<script lang="ts">
  let count = 0;
</script>

<div class="flex flex-col">
  <div on:click={() => (count += 1)}>+</div>
  {count}
  <div on:click={() => (count -= 1)}>-</div>
</div>
