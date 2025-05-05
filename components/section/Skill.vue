<script lang="ts" setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  skills: {
    type: Object,
    required: true,
  },
  class: {
    type: String,
    default: '',
  },
  childClass: {
    type: String,
    default: '',
  },
  skillClass: {
    type: String,
    default: '',
  }
})

function getRatingIcons(rating: number) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return [
    ...Array.from({ length: fullStars }, () => 'carbon:star-filled'),
    ...(hasHalfStar ? ['carbon:star-half'] : []),
  ]
}

function getChildClass() {
  let originalClass = 'flex flex-col gap-2'

  if(props.childClass && props.childClass.includes('flex-wrap')) {
    originalClass = originalClass.replace('flex-col', '')
  }

  return cn(originalClass + ' ' + props.childClass)
}
</script>

<template>
  <div
    :class="cn('p-4 flex flex-col gap-y-10', props.class)"
  >
    <span
      class="text-lg md:text-2xl text-center"
    >
      {{ props.title }}
    </span>

    <div
      :class="cn('flex flex-wrap items-center justify-center gap-y-5 gap-x-10', props.childClass)"
    >
      <div 
        v-for="(skill, index) in props.skills"
        :key="index"
        :class="cn('flex flex-col gap-y-2', props.skillClass)"
      >
        <TooltipProvider v-if="skill.icon">
          <Tooltip>
            <TooltipTrigger as-child>
              <Icon :name="skill.icon" size="50" :class="{
                'text-[#FF6A00]': true,
                'bg-white rounded-full': skill.name == 'Github',
              }"/>
              <div>
                <Icon
                  v-for="(icon, iconIndex) in getRatingIcons(skill.rating)"
                  :key="iconIndex"
                  :name="icon"
                  size="20"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{{ skill.name }}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div v-else>
          <span>{{ skill.name }}</span>

          <div v-if="skill.rating">
            <Icon
              v-for="(icon, iconIndex) in getRatingIcons(skill.rating)"
              :key="iconIndex"
              :name="icon"
              size="20"
            />
          </div>

          <div v-if="skill.proficiencies" class="flex flex-col text-sm mt-4 gap-y-1.5">
            <p>Spoken: {{ skill.proficiencies.spoken }}</p>
            <p>Written: {{ skill.proficiencies.written }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>