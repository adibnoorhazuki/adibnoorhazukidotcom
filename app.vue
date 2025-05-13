<script setup lang="ts">
useSeoMeta({
  title: 'Adib Hazuki',
  ogTitle: 'Adib Hazuki',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
})

useHead({
  link: [{ rel: 'icon', type: 'image/svg', href: 'favicon.svg' }],
})

const pageTransition = {
  name: 'slide-down',
  mode: 'out-in'
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage :transition="pageTransition" />
  </NuxtLayout>
</template>
