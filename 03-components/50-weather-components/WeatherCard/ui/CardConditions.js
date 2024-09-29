import { defineComponent } from 'vue'
import { WeatherConditionIcons } from '../../weather.service.ts'
import '../../WeatherApp.css'

export default defineComponent({
  name: 'CardConditions',

  props: {
    current: {
        type: Object,
        required: true,
    }
  },

  setup() {
    function defineIcon(id) {
      return WeatherConditionIcons[id]
    }

    function defineTemp(temperature) {
      return `${((Math.round((temperature - 273.15) * 10) / 10)).toFixed(1)} °C`;
    }

    return {
      defineIcon,
      defineTemp,
    }
  },

  template: `
    <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="current.weather.description">{{ defineIcon(current.weather.id) }}</div>
        <div class="weather-conditions__temp">{{ defineTemp(current.temp) }}</div>
    </div>
  `,
})
