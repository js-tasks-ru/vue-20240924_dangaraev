import { defineComponent } from 'vue'
import '../../WeatherApp.css'

export default defineComponent({
  name: 'CardDetails',

  props: {
    current: {
        type: Object,
        required: true,
    }
  },

  setup() {
    function definePressure(pressure) {
      return (pressure * 0.75).toFixed(0);
    }

    return {
      definePressure,
    }
  },

  template: `
    <div class="weather-details">
        <div class="weather-details__item">
        <div class="weather-details__item-label">Давление, мм рт. ст.</div>
        <div class="weather-details__item-value">{{ definePressure(current.pressure) }}</div>
        </div>
        <div class="weather-details__item">
        <div class="weather-details__item-label">Влажность, %</div>
        <div class="weather-details__item-value">{{ current.humidity }}</div>
        </div>
        <div class="weather-details__item">
        <div class="weather-details__item-label">Облачность, %</div>
        <div class="weather-details__item-value">{{ current.clouds }}</div>
        </div>
        <div class="weather-details__item">
        <div class="weather-details__item-label">Ветер, м/с</div>
        <div class="weather-details__item-value">{{ current.wind_speed }}</div>
        </div>
    </div>
  `,
})
