import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counter = ref(0)

    function handleIncrementCounter() {
      counter.value++
    }

    function handleDecrementCounter() {
      counter.value--
    }

    return {
      counter,
      handleIncrementCounter,
      handleDecrementCounter
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="counter === 0"
        @click="handleDecrementCounter"
      >➖</button>

      <span class="count" data-testid="count">{{ counter }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="counter === 5"
        @click="handleIncrementCounter"
      >➕</button>
    </div>
  `,
})
