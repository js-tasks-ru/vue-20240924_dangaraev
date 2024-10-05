import { defineComponent } from 'vue'
import '../../WeatherApp.css'

export default defineComponent({
  name: 'CardMainInfo',


  props: {
    locale: {
        type: Object,
        required: true,
    }
  },

  template: `
    <div>
        <h2 class="weather-card__name">
        {{ locale.geographic_name }}
        </h2>
        <div class="weather-card__time">
        {{ locale.current.dt }}
        </div>
    </div>
  `,
})
