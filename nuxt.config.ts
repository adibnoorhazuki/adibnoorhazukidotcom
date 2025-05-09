// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/gradient.css'],
  googleFonts: {
    families: { 'Lato': true, 'Playfair Display': true },
    display: 'swap',
    preload: true,
    download: true,
  },
  icon: {
    customCollections: [
      {
        prefix: 'ah',
        dir: './assets/icons',
      },
    ],
  },
  modules: ['shadcn-nuxt', '@nuxt/icon', '@nuxtjs/google-fonts'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})