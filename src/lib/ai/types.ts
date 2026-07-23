export interface AIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIOptions {
  temperature?: number;
  maxTokens?: number;
  model?: string;
}

export interface AIResponse {
  content: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface Evaluation {
  score: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
  followUpQuestions: string[];
  suggestedAnswer?: string;
}

export interface AIProvider {
  name: string;
  chat(messages: AIMessage[], options?: AIOptions): Promise<AIResponse>;
  isAvailable(): boolean;
}
