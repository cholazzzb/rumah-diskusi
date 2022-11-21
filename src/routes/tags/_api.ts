import type { CreateTagRequest, GetTagResponse } from '$lib/tags/tagEntity';
import { supabase } from '../../supabase';

export const createTag = async (tag: CreateTagRequest) => {
  const { data, error } = await supabase.from('tags').insert([tag]);
  if (error) {
    console.error(error);
    return {
      message: 'error',
      data: [tag],
    };
  }
  return {
    message: 'success',
    data,
  };
};

export const getTags = async (): Promise<GetTagResponse> => {
  const { data, error } = await supabase.from('tags').select('*');
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
