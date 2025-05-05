<script setup lang="ts">
import { aboutMe } from '~/constants/aboutMe'
import { contributed, clientele } from '~/constants/company'
import { skills, languages, areaOfExpertises } from '@/constants/skills'
import { projects } from '~/constants/projects'

const latestProjects = projects.slice(0, 9)

const remainingNoOfProjects = projects.length - latestProjects.length

const isActiveAboutMe = ref('Professional')
</script>

<template>
  <div class="container">
    <SectionHomepage
      title="Hi, I am Adib Hazuki"
    >
      <Tabs :default-value="isActiveAboutMe" class="flex flex-1 items-center w-full gap-y-10">
        <TabsList class="grid w-96 h-12 grid-cols-2">
          <TabsTrigger 
            v-for="(about, index) in aboutMe"
            :key="index"
            :value="about.name"
            class="text-xl"
          >
            {{ about.name }}
          </TabsTrigger>
        </TabsList>
        <TabsContent 
          v-for="(about, index) in aboutMe"
          :key="index"
          :value="about.name"
          class="flex flex-col gap-5 p-5"
        >
          <p v-for="(description, index) in about.description" :key="index" class="text-justify font-light leading-relaxed">
            {{ description }}
          </p>
        </TabsContent>
      </Tabs>
    </SectionHomepage>

    <SectionHomepage
      title="Skills"
    >
      <div class="flex flex-col items-center justify-center gap-y-5">
        <div class="grid md:grid-cols-2 gap-5">
          <SectionSkill
            v-for="(skill, index) in skills"
            :key="index"
            :title="skill.type"
            :skills="skill.items"
            skill-class="justify-center items-center "
          />
        </div>

        <div class="grid md:grid-cols-3 gap-10 w-full">
          <SectionSkill
            title="Area of Expertise"
            :skills="areaOfExpertises"
            class="md:col-span-2 *:w-full"
            child-class="grid md:grid-cols-2"
          />

          <SectionSkill
            title="Languages"
            :skills="languages"
            class="md:col-span-1 *:w-full"
          />
        </div>
      </div>
    </SectionHomepage>

    <SectionHomepage
      title="Experience"
    >
      <div
        class="flex flex-col gap-5 w-full"
      >
        <SectionCompany
          title="Contributed to"
          :companies="contributed"
        />

        <SectionCompany
          title="Clientele"
          :companies="clientele"
        />
      </div>

      <div class="w-full flex justify-end gap-2">
        <Button
          variant="ghost"
          class="hover:bg-background gradient-text text-sm font-light"
          :href="'/experience'"
          as="a"
        >
          Click here to view my Experience
        </Button>
      </div>
    </SectionHomepage>

    <SectionHomepage
      title="Projects"
    >
      <div class="grid md:grid-cols-2 gap-10 mr-8 md:mr-0">
        <Section
          v-for="(project, index) in latestProjects"
          :key="index"
          :company="project.company"
          :name="project.name"
          :description="project.description"
          :image="project.image"
          is-hide-details
        />

        <div class="relative p-4 min-h-50">
          <div
            class="flex flex-col justify-center items-center h-full gap-4"
          >
            <p class="text-center">
              <span class="text-2xl font-semibold">
                {{ remainingNoOfProjects }}
              </span>
              <span class="text-lg text-muted-foreground">
                more projects
              </span>
            </p>

            <div class="flex justify-center items-center gap-2">
              <Button
                variant="ghost"
                class="w-full hover:bg-background gradient-text"
                :href="'/projects'"
                as="a"
              >
                Click here to view all Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionHomepage>
  </div>
</template>