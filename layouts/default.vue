<script setup lang="ts">
</script>

<template>
  <LayoutAppHeader />

  <main
    class="min-h-[calc(100vh-5.5rem)] mx-auto max-w-7xl py-10 px-2 flex flex-col items-center gap-y-6 mb-14"
  >
    <slot />
  </main>

  <LayoutAppFooter />
</template>