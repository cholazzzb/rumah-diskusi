<script lang="ts" module="context">
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
  import 'carbon-components-svelte/css/g100.css';
</script>

<Header />

<main class="flex flex-col w-full h-screen bg-background p-6 pt-12">
  <slot />
</main>

<style>
  main {
    background-color: #434343;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
