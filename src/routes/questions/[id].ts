import type { QuestionTagName } from '$lib/questions/questionEntity';
import { supabase } from '../../supabase';

/** @type {import('./[id]').RequestHandler} */
export async function get({
  params,
}): Promise<{ body: { question: QuestionTagName } } | { status: 404 }> {
  console.log({ params });

  const [questions, tags] = await Promise.all([
    supabase.from('questions').select('*').eq('id', params.id),
    supabase.from('tags').select('*'),
  ]);

  if (questions.error || tags.error) {
    console.error({ questions: questions.error, tags: tags.error });
    return {
      status: 404,
    };
  }

  return {
    body: {
      question: {
        ...questions.data[0],
        tags: questions.data[0].tags_id.map((tagId: number) => ({
          id: tagId,
          name: tags.data[tagId - 1].name,
        })),
      },
    },
  };
}
