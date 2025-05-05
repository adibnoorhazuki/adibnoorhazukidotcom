<script setup lang="ts">
import { experience } from '~/constants/experience'
</script>

<template>
  <div class="container">
    <div
      class="flex flex-col gap-10 transition-all duration-1000 ease-in-out relative mr-8 md:mr-0"
    >
      <div
        v-if="experience.length > 0"
        class="h-[calc(100%+3.5rem)] w-0.5 bg-secondary absolute -top-10 left-6 md:left-1/2 transform md:-translate-x-0.5 hidden md:block"
      />

      <div
        v-for="(exp, index) in experience"
        :key="index"
        class="relative flex flex-col items-center gap-x-20 md:gap-y-0 gap-y-1"
        :class="index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'"
      >
        <Section
          :company="exp.company"
          :name="exp.position"
          :duration="exp.duration"
          :projects="exp.projects"
          class="flex flex-col md:w-[calc(50%-3rem)] w-full p-4 mt-[1.25rem]"
          is-hide-image
        />
      </div>
    </div>
  </div>
</template>