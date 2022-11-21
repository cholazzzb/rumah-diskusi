import { writable } from 'svelte/store';
import type { QuestionTagName } from './questionEntity';

export const questionStore = writable<Array<QuestionTagName>>([]);
export const buildQuestion = (questions: Array<QuestionTagName>) =>
  questionStore.set(questions);
