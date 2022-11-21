<script lang="ts">
  export let title = 'Title';
  export let onClose = () => {};
</script>

<div
  class="z-90 fixed h-screen w-screen top-0 left-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
>
  <div class="flex flex-col bg-gray-700 w-96 p-2 rounded-md">
    <div class="flex w-full text-xl justify-between items-center">
      <p class="text-white">{title}</p>
      <div
        class="rounded-full flex justify-center items-center w-6 h-6 bg-gray-900 hover:bg-gray-800 cursor-pointer"
        on:click={onClose}
      >
        <p class="text-white">X</p>
      </div>
    </div>
    <slot />
  </div>
</div>
