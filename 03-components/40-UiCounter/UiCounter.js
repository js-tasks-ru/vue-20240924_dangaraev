import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true
    },

    min: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: Infinity
    }
  },

  emit: ['decrement', 'increment'],

  setup(props, { emit }) {
    function handleDecrement() {
      emit('update:count', props.count - 1 )
    }

    function handleIncrement() {
      emit('update:count', props.count + 1 )
    }

    return {
      handleDecrement,
      handleIncrement
    }
  },

  template: `
    <div class="counter">
      <UiButton 
        aria-label="Decrement" 
        :disabled="count === min"
        @click.stop="handleDecrement"
      >
        ➖
      </UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton 
        aria-label="Increment" 
        :disabled="count === max"
        @click.stop="handleIncrement"
      >
        ➕
      </UiButton>
    </div>
  `,
})
