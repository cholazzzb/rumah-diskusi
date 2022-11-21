<script lang="ts">
  import type { QuestionTagName } from './questionEntity';

  export let question: QuestionTagName;
</script>

<a class="hover:no-underline" href={`/questions/${question.id}`}>
  <div class="p-2 rounded-md bg-primary hover:bg-primaryHover ">
    <div class="flex font-semibold">
      <p class="font-semibold text-white mr-2">{question.vote} votes</p>
      <p class="font-semibold text-white mr-2">{question.answer} answers</p>
      <p class="font-semibold text-white">{question.view} views</p>
    </div>
    <div class="">
      <p class="text-xl text-white">{question.title}</p>
    </div>
    <div>
      <p class="text-white">
        {question.description}
      </p>
    </div>
    <div class="flex">
      {#each question.tags as tag}
        <a class="hover:no-underline" href={`/tags/${tag.id}`}>
          <p class="rounded-full text-white p-1 m-1 text-black bg-secondary">
            {tag.name}
          </p>
        </a>
      {/each}
    </div>
  </div>
</a>
