<script lang="ts">
  import { page } from '$app/stores';
  import HomeIcon from '$lib/components/icons/HomeIcon.svelte';
  import QuestionIcon from '$lib/components/icons/QuestionIcon.svelte';
  import UserCard from '$lib/users/UserCard.svelte';
</script>

<header class="fixed z-999 h-10 flex w-full bg-gray-900">
  <nav class="flex w-full items-center">
    <ul class="flex">
      <li class="p-2">
        <a
          class="flex items-center hover:no-underline"
          sveltekit:prefetch
          href="/"
        >
          <HomeIcon />
          <p
            class={`${
              $page.url.pathname === '/' ? 'text-blue-400 ' : 'text-white '
            } ml-2`}
          >
            Home
          </p>
        </a>
      </li>
      <li class="p-2">
        <a
          class="flex items-center hover:no-underline"
          sveltekit:prefetch
          href="/questions"
        >
          <QuestionIcon />
          <p
            class={`${
              $page.url.pathname === '/questions'
                ? 'text-blue-400 '
                : 'text-white '
            } ml-2`}
          >
            Question
          </p>
        </a>
      </li>
    </ul>
  </nav>
  <UserCard username="Toro" />
</header>
