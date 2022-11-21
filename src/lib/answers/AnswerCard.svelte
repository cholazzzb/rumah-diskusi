<script lang="ts">
  import { Tile } from 'carbon-components-svelte';
  export let answerHeader = '';
  export let answerBody = '';
  export let answerFooter = '';
</script>

<Tile>
  <div class="answer-header">
    {answerHeader}
  </div>
  <div class="answer-body">
    {answerBody}
  </div>
  <div class="answer-footer">
    {answerFooter}
  </div>
</Tile>

<style>
  .answer-header {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
  }
  .answer-body {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .answer-footer {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
</style>
