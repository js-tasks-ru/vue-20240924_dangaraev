import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref(getCurrentTime())
    let updateInterval

    function getCurrentTime() {
      return new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
    }

    function updateCurrentTime() {
      currentTime.value = getCurrentTime();
    }

    onMounted(() => {
      updateInterval = setInterval(() => {
        updateCurrentTime()
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(updateInterval)
    })

    return {
      currentTime,
    }
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})
