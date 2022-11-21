<script lang="ts">
  import QuestionCard from '$lib/questions/QuestionCard.svelte';
  import { buildQuestion, questionStore } from '$lib/questions/questionStore';
  import { getTags } from '$lib/tags/tagService';

  import { getQuestions } from './_api';

  const loadQuestions = async () => {
    const [questions, tags] = await Promise.all([getQuestions(), getTags()])
    buildQuestion(
      questions.data.map((question) => ({
        ...question,
        tags: question.tags_id.map((tagId: number) => ({
          id: tagId,
          name: tags.data[tagId - 1].name,
        })),
      })),
    );
  };
  loadQuestions();
</script>

<div class="flex flex-col bg-gray-700 p-4 ">
  <div class="flex justify-between items-center">
    <p class="text-2xl text-white font-bold mb-4">All Questions</p>
    <a class="hover:no-underline" sveltekit:prefetch href="/questions/ask">
      <button
        class="rounded-lg py-2 px-4 bg-blue-400 hover:bg-blue-300 text-white font-semibold"
        >Ask Question</button
      >
    </a>
  </div>

  {#each $questionStore as question (question.id)}
    <QuestionCard {question} />
    <div class="flex w-full h-1 my-1" />
  {/each}
</div>
