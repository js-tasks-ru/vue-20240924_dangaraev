import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    const locales = getWeatherData()

    function defineIcon(id) {
      return WeatherConditionIcons[id]
    }

    function defineNightTime(currentTime, sunriseTime, sunsetTime) {
      const [ currentHours, currentMinutes ] = currentTime.split(':')
      const currentTimeTotal = currentHours * 60 + currentMinutes;
      const [ sunriseHours, sunriseMinutes ] = sunriseTime.split(':')
      const sunriseTimeTotal = sunriseHours * 60 + sunriseMinutes;
      const [ sunsetHours, sunsetMinutes ] = sunsetTime.split(':')
      const sunsetTimeTotal = sunsetHours * 60 + sunsetMinutes;
      
      return sunriseTimeTotal > currentTimeTotal
        || currentTimeTotal < sunsetTimeTotal;
    }

    function defineTemp(temperature) {
      return `${((Math.round((temperature - 273.15) * 10) / 10)).toFixed(1)} °C`;
    }

    function definePressure(pressure) {
      return (pressure * 0.75).toFixed(0);
    }

    return {
      locales,
      defineIcon,
      defineNightTime,
      defineTemp,
      definePressure,
    }
  },

  template: `
    <div v-for="locale in locales" :key="locale.geographic_name">
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li class="weather-card" :class="{ 'weather-card--night': defineNightTime(locale.current.dt, locale.current.sunrise, locale.current.sunset) }">
          <div v-if="locale.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">Королевская метеослужба короля Арагорна II: Предвещается наступление сильного шторма.</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ locale.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ locale.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="locale.current.weather.description">{{ defineIcon(locale.current.weather.id) }}</div>
            <div class="weather-conditions__temp">{{ defineTemp(locale.current.temp) }}</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ definePressure(locale.current.pressure) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ locale.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ locale.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ locale.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
