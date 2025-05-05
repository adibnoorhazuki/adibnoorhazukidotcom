<script setup lang="ts">
import { socials } from '~/constants/social'

const linkedSocials = socials.filter((social) => social.href)

const currentRoute = useRoute()
</script>

<template>
  <footer
    v-if="currentRoute.path !== '/contact'"
    class="md:fixed w-full bottom-0 z-50 transition-all duration-[1500ms] p-4 bg-background"
  >
    <div class="flex justify-center items-center gap-5">
        <TooltipProvider
          v-for="(social, index) in linkedSocials"
          :key="index"
        >
          <Tooltip>
            <TooltipTrigger as-child>
              <Button
                v-if="social.href"
                variant="ghost"
                class="gradient-border bg-background hover:bg-background rounded h-12 w-12 p-0 group"
                :href="social.href"
                :target="social.href.includes('https') ? '_blank' : ''"
                :rel="social.href.includes('https') ? 'noopener noreferrer' : ''"
                as="a"
              >
                <Icon :name="social.icon" class="text-2xl text-secondary group-hover:text-primary" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{{ social.title }}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </footer>
</template>
