<script lang="ts">
  export let pressed: string;
</script>

<nav class="border-b-2 border-b-blue-600">
  <div class="mt-4 mb-4 text-xl flex justify-center">
    <div class="mr-2">
      {#if pressed === 'Home'}
        <a href="/" class="text-white hover:text-white"> Home </a>
      {:else}
        <a href="/"> Home </a>
      {/if}
    </div>

    <div class="ml-2">
      {#if pressed === 'Admin'}
        <a href="/admin" class="text-white hover:text-white"> Admin </a>
      {:else}
        <a href="/admin"> Admin </a>
      {/if}
    </div>
  </div>
</nav>
