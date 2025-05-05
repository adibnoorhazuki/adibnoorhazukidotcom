<script setup lang="ts">
import { projects } from '@/constants/projects'
</script>

<template>
  <div class="container">
    <div class="grid md:grid-cols-2 gap-10 mr-8 md:mr-0">
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