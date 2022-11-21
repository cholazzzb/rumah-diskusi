<script lang="ts">
  import type { Tag } from './tagEntity';

  import {
    addSelectedTag,
    getSelectedTagId,
    removeSelectedTag,
  } from './tagStore';

  export let tag: Tag;

  $: selectedTag = getSelectedTagId();
  $: selected = selectedTag.indexOf(tag.id) !== -1;
  const onClickToggleSelected = () => {
    if (selected) {
      removeSelectedTag(tag.name);
    } else {
      addSelectedTag(tag);
    }
    selected = !selected;
    console.log({ selectedTag });
  };
</script>

<div
  class={`${
    selected ? 'bg-gray-700 ' : 'bg-gray-900 '
  } hover:bg-gray-800 p-2 m-1 rounded-xl cursor-pointer`}
  on:click={onClickToggleSelected}
>
  <p class="text-white">{tag.name}</p>
</div>
