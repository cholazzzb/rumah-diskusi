<script lang="ts">
  import {
    selectedTagStore,
    removeSelectedTag,
    getSelectedTagId,
  } from '$lib/tags/tagStore';
  import { createQuestion } from './_api';
  import TagModal from '$lib/tags/tagModal.svelte';
  import Button from '$lib/components/Button.svelte';

  let title = '';
  let description = '';

  const onClickSubmit = async () => {
    await createQuestion({
      title,
      description,
      created_at: new Date().toLocaleString(),
      updated_at: new Date().toLocaleString(),
      tags_id: getSelectedTagId(),
    });
    window.location.href = `/questions`;
  };

  let tagModalOpen = false;
  const onOpenModal = () => {
    tagModalOpen = true;
  };
  const onCloseModal = () => {
    tagModalOpen = false;
  };
</script>

<svelte:head>
  <title>Ask Question</title>
</svelte:head>

<div class="flex flex-col p-4">
  <h1 class="title">Write A Question</h1>
  <form class="flex flex-col">
    <label class="flex flex-col p-2">
      <p class="p-1 text-white">Title</p>
      <input
        type="text"
        class="p-2 rounded-md text-black"
        bind:value={title}
        placeholder="Enter title..."
        required
      />
    </label>
    <label class="flex flex-col p-2">
      <p class="p-1 text-white">Description</p>
      <textarea
        type="text"
        class="p-2 rounded-md text-black"
        bind:value={description}
        placeholder="Enter description..."
        required
      />
    </label>
    <div class="flex flex-wrap justify-start items-center mb-2">
      <p class="p-3 text-white">Tags :</p>
      {#each $selectedTagStore as tag, tagIdx (tagIdx)}
        <div class="tag">
          {tag.name}
          <div
            class="remove-tag-button"
            on:click={() => removeSelectedTag(tag.name)}
          >
            X
          </div>
        </div>
      {/each}

      <Button className="bg-primary hover:bg-primaryHover" onClick={onOpenModal}
        >Add Tag</Button
      >

      {#if tagModalOpen}
        <TagModal onClose={onCloseModal} />
      {/if}
    </div>
  </form>
  <div>
    <Button
      className="bg-primary hover:bg-primaryHover"
      onClick={onClickSubmit}
    >
      Ask this question
    </Button>
  </div>
</div>

<style>
  .title {
    color: white;
    font-weight: 900;
  }

  .tag {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-inline-end: 5px;
    border-radius: 50%;
    border-color: #f5f5f5;
    background-color: #333;
    color: #f5f5f5;
  }
  .remove-tag-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-inline-start: 4px;
    border: solid 1px;
    border-radius: 100%;
    border-color: #f5f5f5;
  }
  .remove-tag-button:hover {
    background-color: #f5f5f5;
    color: #333;
  }
</style>
