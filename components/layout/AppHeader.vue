<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const navigation: { title: string, href: string }[] = [
  {
    title: 'About',
    href: '/',
  },
  {
    title: 'Experience',
    href: '/experience',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

const currentRoute = useRoute()
const isActive = (route: string) => {
  return currentRoute.path === route
}
</script>

<template>
  <header class="mx-auto max-w-7xl flex justify-between items-start w-full py-5 px-2">
    <div
      class="cursor-pointer"
      @click="$router.push('/')"
    >
      <img src="/header-logo.svg" alt="Logo" class="w-50" />
    </div>

    <div class="flex gap-4">
      <NavigationMenu class="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem
            v-for="(item, index) in navigation"
            :key="index"
          >
            <NavigationMenuLink
              :class="cn('gradient-text hover:bg-background cursor-pointer', isActive(item.href) ? 'is-active' : '')"
              @click="$router.push(item.href)"
            >
              {{ item.title }}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Dialog class="md:hidden">
        <DialogTrigger as-child>
          <Button variant="ghost" class="md:hidden">
            <Icon name="mingcute:menu-line" class="text-2xl text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <div class="grid gap-4 py-4">
            <Button
              v-for="(item, index) in navigation"
              :key="index"
              variant="ghost"
              class="w-full text-left"
              @click="$router.push(item.href)"
              as="a"
            >
              <span :class="cn('text-lg font-semibold gradient-text', isActive(item.href) ? 'is-active' : '')">
                {{ item.title }}
              </span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </header>
</template>
