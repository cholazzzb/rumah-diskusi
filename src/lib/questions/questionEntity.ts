export type Question = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  vote: number;
  answer: number;
  view: number;
  tags_id: Array<number>;
};

export type QuestionTagName = Omit<Question, 'tags_id'> & {
  tags: Array<{
    id: number;
    name: string;
  }>;
};

export type CreateQuestionRequest = {
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  tags_id: Array<number>;
  vote: number;
  answer: number;
  view: number;
};

export type CreateQuestion = {
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  tags_id: Array<number>;
};

export type GetQuestionResponse = {
  message: string;
  data: Array<Question>;
};
