export interface ShortPrompt {
  id: string;
  prompt: string;
  description?: string;
}

export interface LongPrompt {
  id: string;
  title: string;
  prompt: string;
  useCase: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PromptPost {
  slug: string;
  title: string;
  keyword: string;
  description: string;
  date: string;
  category: string;
  image?: string;
  content?: string;
  shortPrompts: ShortPrompt[];
  longPrompts: LongPrompt[];
  faqs: FAQ[];
  platformTips?: string[];
}
