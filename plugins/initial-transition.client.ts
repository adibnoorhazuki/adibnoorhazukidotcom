export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()

  // This hook runs after Vue mounts the app (on client only)
  nuxtApp.hook('app:beforeMount', () => {
    const app = document.getElementById('__nuxt')

    if (app) {
      const main = document.querySelector('main')

      if(!main) {
        return
      }
      // Apply initial "enter-from" styles
      main.style.opacity = '0'
      main.style.transform = 'translateY(-30px)'

      // Force reflow so styles are applied before animation
      void main.offsetWidth

      // Start transition
      main.style.transition = 'all 1s ease'
      main.style.opacity = '1'
      main.style.transform = 'translateY(0)'
    }
  })
})