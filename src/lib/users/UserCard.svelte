<script lang="ts">
  import { OverflowMenu, OverflowMenuItem } from 'carbon-components-svelte';

  export let username = '';
</script>

<OverflowMenu flipped style="width: auto;">
  <div slot="menu" style="padding: 1rem; color: red;">{username}</div>
  <OverflowMenuItem text="Profile" />
  <OverflowMenuItem danger text="Logout" />
</OverflowMenu>

<style></style>
