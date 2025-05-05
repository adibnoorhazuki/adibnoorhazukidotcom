<script lang="ts" setup>
import { cn } from '@/lib/utils'
import type { Company } from '@/@types/company'
import type { Project } from '~/@types/project';

const props = defineProps({
  company: {
    type: Object as () => Company,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String as () => string | null,
    default: null,
  },
  duration: {
    type: String,
    default: '',
  },
  projects: {
    type: Array as () => Array<Pick<Project, "name" | "duration">>,
    default: () => [],
  },
  class: {
    type: String,
    default: '',
  },
  isHideImage: {
    type: Boolean,
    default: false,
  },
  isHideDetails: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div :class="cn('relative bg-background gradient-border rounded-sm p-4 min-h-50 group', props.class)">
    <div
      v-if="company.icon"
      class="absolute -top-8 -right-8 z-10"
    >
      <div
        class="w-16 h-16 gradient-border inner rounded bg-white"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
                <img 
                  :src="company.icon" :alt="company.name" class="rounded-full" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{{ company.name }}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>

    <div
      class="flex flex-col h-full gap-4"
    >
      <div
        v-if="!isHideImage"
        class="flex justify-center items-center bg-white h-48 border-2 rounded-sm py-10"
      >
        <img 
          v-if="image"
          :src="image" :alt="name" class="rounded-sm size-40 object-cover" />
      </div>

      <h2 class="text-xl">
        {{ name }}
      </h2>

      <p
        v-if="description"
        class="text-sm text-justify"
      >
        {{ description }}
      </p>

      <div 
        v-if="!isHideDetails"
        class="flex flex-col md:flex-row justify-between items-start md:items-center"
      >
        <div class="flex gap-2">
          <Icon name="mingcute:building-2-line" class="text-gray-400" />
          <span class="text-xs text-gray-400">
            {{ company.name }}
          </span>
        </div>

        <div class="flex gap-2">
          <icon name="mingcute:calendar-line" class="text-gray-400" />
          <span class="text-xs text-gray-400">
            {{ duration }}
          </span>
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <div
          v-if="projects.length > 0"
          class="flex items-center gap-2 text-sm text-gray-400 pb-2"
        >
          <Icon name="mingcute:briefcase-2-line" class="text-gray-400" />
          <span class="text-xs text-gray-400">
            Projects
          </span>
        </div>


        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="(item, index) in projects"
            :key="index"
            class="flex flex-col"
          >
            <span>{{ item.name }}</span>
            <span class="text-xs text-gray-400">
              {{ item.duration }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
