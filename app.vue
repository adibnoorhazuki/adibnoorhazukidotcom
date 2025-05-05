<script setup lang="ts">
useSeoMeta({
  title: 'Adib Hazuki',
  ogTitle: 'Adib Hazuki',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://adib.dev/logo.svg',
})

useHead({
  link: [{ rel: 'icon', type: 'image/svg', href: 'favicon.svg' }],
})
</script>

<template>
  <NuxtLayout class="bg-black">
    <NuxtPage />
  </NuxtLayout>
</template>
