<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    companies: {
      type: Array as PropType<{
        name: string
        image: string
      }[]>,
      default: () => [],
    },
  })
</script>

<template>

<div
  class="p-4 flex flex-col gap-y-10"
>
  <span
    class="text-lg md:text-2xl text-center"
  >
    {{ props.title }}
  </span>
  
  <div
    class="flex flex-wrap justify-center gap-x-5"
  >
    <div 
      v-for="(company, index) in props.companies"
      :key="index"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <img
              :src="`${company.image}`"
              :alt="company.name"
              class="w-40 h-40 object-cover"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{{ company.name }}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
</div>
</template>
