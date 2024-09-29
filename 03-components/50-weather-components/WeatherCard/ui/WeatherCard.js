import { defineComponent } from 'vue'
import '../../WeatherApp.css'
import CardDetails from './CardDetails.js';
import CardAlert from './CardAlert.js';
import CardMainInfo from './CardMainInfo.js';
import CardConditions from './CardConditions.js';

export default defineComponent({
  name: 'WeatherCard',

  components: {
    CardAlert,
    CardMainInfo,
    CardConditions,
    CardDetails
  },

  props: {
    locale: {
        type: Object,
        required: true,
    }
  },

  setup() {
    function defineNightTime(currentTime, sunriseTime, sunsetTime) {
      return sunriseTime > currentTime || sunsetTime < currentTime;
    }

    function definePressure(pressure) {
      return (pressure * 0.75).toFixed(0);
    }

    return {
      defineNightTime,
      definePressure,
    }
  },

  template: `
    <li 
        class="weather-card" 
        :class="{ 'weather-card--night': defineNightTime(locale.current.dt, locale.current.sunrise, locale.current.sunset) }"
    >
        <CardAlert v-if="locale.alert" />

        <CardMainInfo :locale />

        <CardConditions :current="locale.current" />
    
        <CardDetails :current="locale.current" />
    </li>
  `,
})
