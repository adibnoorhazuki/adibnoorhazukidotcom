<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: '',
    }
  })
</script>

<template>
  <div class="flex flex-col items-center justify-around gap-y-10 my-10 py-10 min-h-[calc(100vh-17.5rem)]">
    <h2
      v-if="props.title"
      class="text-4xl font-semibold mb-2"
    >
      {{ props.title }}
    </h2>

    <slot />
  </div>
</template>
