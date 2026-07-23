import { frontendQuestions } from "./questions/frontend";
import { backendQuestions } from "./questions/backend";
import { fullstackQuestions } from "./questions/fullstack";
import { csFundamentalsQuestions } from "./questions/cs-fundamentals";
import { webFundamentalsQuestions } from "./questions/web-fundamentals";

export const allQuestions = [
  ...frontendQuestions,
  ...backendQuestions,
  ...fullstackQuestions,
  ...csFundamentalsQuestions,
  ...webFundamentalsQuestions,
];
