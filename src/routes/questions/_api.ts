import type {
  CreateQuestion,
  GetQuestionResponse,
} from '$lib/questions/questionEntity';
import { supabase } from '../../supabase';

export const createQuestion = async (question: CreateQuestion) => {
  const newQuestion = [{ ...question, vote: 0, answer: 0, view: 0 }];
  const { data, error } = await supabase.from('questions').insert(newQuestion);
  if (error) {
    console.error(error);
    return {
      message: 'error',
    };
  }
  return {
    message: 'success',
    data,
  };
};

export const getQuestions = async (): Promise<GetQuestionResponse> => {
  const { data, error } = await supabase.from('questions').select('*');
  if (error) {
    console.error(error);
    return {
      message: 'error',
      data: [],
    };
  }
  return {
    message: 'success',
    data,
  };
};

export const getQuestionById = async (questionId: number) => {
  const { data, error } = await supabase
    .from('questions')
    .select('*')
    .eq('id', questionId);
  if (error) {
    console.error(error);
    return {
      message: 'error',
    };
  }
  return {
    message: 'success',
    data,
  };
};
