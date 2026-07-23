import type {
  AIProvider,
  AIMessage,
  AIOptions,
  AIResponse,
  Evaluation,
} from "./types";
import { OpenAIProvider } from "./openai";
import { GeminiProvider } from "./gemini";
import { AnthropicProvider } from "./anthropic";

class AIManager {
  private providers: Map<string, AIProvider> = new Map();
  private activeProvider: string = "gemini";

  constructor() {
    const openaiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || "";
    const geminiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
    const anthropicKey = process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY || "";

    if (openaiKey) this.providers.set("openai", new OpenAIProvider(openaiKey));
    if (geminiKey) this.providers.set("gemini", new GeminiProvider(geminiKey));
    if (anthropicKey)
      this.providers.set("anthropic", new AnthropicProvider(anthropicKey));

    // Auto-select first available provider
    for (const [name, provider] of this.providers) {
      if (provider.isAvailable()) {
        this.activeProvider = name;
        break;
      }
    }
  }

  setProvider(name: string) {
    if (this.providers.has(name)) {
      this.activeProvider = name;
    }
  }

  getProvider(): AIProvider | undefined {
    return this.providers.get(this.activeProvider);
  }

  isConfigured(): boolean {
    return this.providers.size > 0;
  }

  async chat(messages: AIMessage[], options?: AIOptions): Promise<AIResponse> {
    const provider = this.getProvider();
    if (!provider) {
      throw new Error("No AI provider configured. Add an API key to .env.local");
    }
    return provider.chat(messages, options);
  }

  async evaluateAnswer(
    question: string,
    userAnswer: string,
    expectedAnswer?: string
  ): Promise<Evaluation> {
    const systemPrompt = `You are an expert technical interviewer. Evaluate the candidate's answer to the interview question. Provide:
1. A score from 0-100
2. Detailed feedback
3. Strengths of the answer
4. Areas for improvement
5. Follow-up questions to probe deeper
6. A suggested better answer if the score is below 70

Respond in JSON format with these fields: score, feedback, strengths, improvements, followUpQuestions, suggestedAnswer`;

    const userPrompt = `Question: ${question}\n\nCandidate's Answer: ${userAnswer}\n${expectedAnswer ? `\nExpected Answer Reference: ${expectedAnswer}` : ""}`;

    const response = await this.chat(
      [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      { temperature: 0.3 }
    );

    try {
      const jsonMatch = response.content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
    } catch {
      // Fall back to parsing
    }

    return {
      score: 50,
      feedback: response.content,
      strengths: [],
      improvements: [],
      followUpQuestions: [],
    };
  }

  async generateFollowUp(context: string): Promise<string> {
    const response = await this.chat(
      [
        {
          role: "system",
          content:
            "You are a senior technical interviewer. Generate a follow-up question based on the candidate's previous answer. Be specific and probing.",
        },
        { role: "user", content: context },
      ],
      { temperature: 0.7, maxTokens: 200 }
    );
    return response.content;
  }

  async suggestBetterAnswer(
    question: string,
    answer: string
  ): Promise<string> {
    const response = await this.chat(
      [
        {
          role: "system",
          content:
            "You are a senior technical interviewer. Provide a better, more comprehensive answer to the interview question. Be clear, structured, and thorough.",
        },
        {
          role: "user",
          content: `Question: ${question}\n\nCurrent Answer: ${answer}\n\nProvide a better answer:`,
        },
      ],
      { temperature: 0.5 }
    );
    return response.content;
  }
}

export const ai = new AIManager();
