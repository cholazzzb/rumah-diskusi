<script lang="ts">
  export let onClick = () => {};

  export let className: string = '';
</script>

<button class={`p-2 px-4 mx-2 rounded-md ${className}`} on:click={onClick}>
  <slot />
</button>

<style>
  .primary {
    background-color: #8689e0;
    color: black;
    font-weight: 700;
  }
  .primary:hover {
    background-color: #5a5fdb;
  }
  .success {
    background-color: #76fddd;
    color: black;
    font-weight: 700;
  }
  .success:hover {
    background-color: #30dfb6;
  }
  .secondary {
    background-color: #76fddd;
    color: black;
    font-weight: 700;
  }
  .secondary:hover {
    background-color: #208fe2;
  }
  .error {
    background-color: #fe8977;
    color: black;
    font-weight: 700;
  }
  .error:hover {
    background-color: #e96957;
  }
</style>
