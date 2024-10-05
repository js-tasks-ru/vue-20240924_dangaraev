import { defineComponent } from 'vue'
import { getWeatherData } from './weather.service.ts'
import './WeatherApp.css'
import { WeatherCard } from './WeatherCard'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherCard,
  },

  setup() {
    const locales = getWeatherData()

    return {
      locales,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <WeatherCard v-for="locale in locales" :key="locale.geographic_name" :locale/>
      </ul>
    </div>
  `,
})
