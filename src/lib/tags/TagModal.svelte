<script>
  import Button from '$lib/components/Button.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import TagItem from './TagItem.svelte';
  import { getTags } from './tagService';
  import { emptySelectedTagStore } from './tagStore';

  let tags = [];
  const loadTags = async () => {
    const res = await getTags();
    tags = res.data;
  };
  loadTags();

  export let onClose = () => {};
</script>

<Modal
  title="Add Tag"
  onClose={() => {
    onClose();
    emptySelectedTagStore();
  }}
>
  <div class="flex flex-wrap">
    {#each tags as tag (tag.name)}
      <TagItem {tag} />
    {/each}
  </div>
  <div class="flex flex-row-reverse mt-4">
    <Button onClick={onClose}>Save</Button>
    <Button
      onClick={() => {
        onClose();
        emptySelectedTagStore();
      }}>Cancel</Button
    >
  </div>
</Modal>
