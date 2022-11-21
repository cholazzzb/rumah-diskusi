<script lang="ts">
  import QuestionCard from '$lib/questions/QuestionCard.svelte';
  import type { QuestionTagName } from '$lib/questions/questionEntity';

  export let question: QuestionTagName;
</script>

<svelte:head>
  <title>Questions</title>
</svelte:head>

<div>
  <QuestionCard {question} />
</div>
