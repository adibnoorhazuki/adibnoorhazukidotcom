export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()

  // This hook runs after Vue mounts the app (on client only)
  nuxtApp.hook('app:beforeMount', () => {
    const app = document.getElementById('__nuxt')

    if (app) {
      // Apply initial "enter-from" styles
      app.style.opacity = '0'
      app.style.transform = 'translateY(-30px)'

      // Force reflow so styles are applied before animation
      void app.offsetWidth

      // Start transition
      app.style.transition = 'all 1s ease'
      app.style.opacity = '1'
      app.style.transform = 'translateY(0)'
    }
  })
})