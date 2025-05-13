<script setup lang="ts">
import { projects } from '@/constants/projects'
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mr-8 md:mr-0 lg:mr-0">
      <Section
        v-for="(project, index) in projects"
        :key="index"
        :company="project.company"
        :name="project.name"
        :description="project.description"
        :image="project.image"
        is-hide-details
      />
    </div>
  </div>
</template>