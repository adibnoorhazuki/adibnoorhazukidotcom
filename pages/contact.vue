<script setup lang="ts">
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { vAutoAnimate } from '@formkit/auto-animate/vue'

import { socials } from '~/constants/social'

const serviceInterests = [
  { value: 'professional', label: 'Professional' },
  { value: 'freelancing', label: 'Freelancing' },
]

const formSchema = toTypedSchema(z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().max(100),
  employmentType: z.enum(serviceInterests.map((interest) => interest.value) as [string, ...string[]], {message: 'Please select a service interest'}),
  message: z.string().min(20).max(500),
}))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    name: '',
    email: '',
    employmentType: '',
    message: '',
  },
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})
</script>

<template>
  <div class="container flex justify-center">
    <div class="grid md:grid-cols-2 gap-20">
      <SectionContact>
        <template v-slot:title>
          <h1 class="text-lg font-thin">
            Hi there!
          </h1>
          <h2 class="text-2xl font-bold mb-8">
            I'm Muhammad Adib bin Noor Hazuki
          </h2>
        </template>

        <div class="grid grid-cols-2 justify-center gap-9">
          <div v-for="social in socials" :key="social.title" class="flex items-center gap-5">
            <Button
              v-if="social.href"
              variant="ghost"
              class="gradient-border bg-background hover:bg-background rounded h-10 w-10 p-0 group"
              :href="social.href"
              :target="social.href.includes('https') ? '_blank' : ''"
              :rel="social.href.includes('https') ? 'noopener noreferrer' : ''"
              as="a"
            >
              <Icon :name="social.icon" class="text-lg text-secondary group-hover:text-primary" />
            </Button>

            <div
              v-else
              class="flex items-center justify-center gradient-border bg-background hover:bg-background rounded h-10 w-10 p-0 group"
            >
              <Icon
                :name="social.icon"
                class="text-lg text-secondary group-hover:text-primary"
              />
            </div>
            
            <div class="flex flex-col">
              <span>{{ social.title }}</span>
              <span v-if="social.description" class="text-sm text-muted-foreground">
                {{ social.description }}
              </span>
            </div>
          </div>
        </div>
      </SectionContact>

      <SectionContact>
        <template v-slot:title>
          <h2 class="text-2xl font-bold mt-9 mb-6">
            Let's Connect
          </h2>
        </template>

        <form class="w-full space-y-4" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="name" :validate-on-blur="!isFieldDirty">
            <FormItem v-auto-animate>
              <FormLabel>
                Name
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your name" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="email" :validate-on-blur="!isFieldDirty">
            <FormItem v-auto-animate>
              <FormLabel>
                Email
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="employmentType" :validate-on-blur="!isFieldDirty">
            <FormItem>
              <FormLabel>Service Interest</FormLabel>

              <Select v-bind="componentField">
                <FormControl>
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select your service interest" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      v-for="interest in serviceInterests"
                      :key="interest.value"
                      :value="interest.value"
                    >
                      {{ interest.label }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="message" :validate-on-blur="!isFieldDirty">
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Leave a message"
                  class="resize-none"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <Button type="submit">
            Submit
          </Button>
        </form>
      </SectionContact>
    </div>
  </div>
</template>