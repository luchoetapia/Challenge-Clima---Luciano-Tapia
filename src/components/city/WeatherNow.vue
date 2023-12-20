<script>
import { linkWeatherNow } from '../../utils/linksAPI'
import { apiKey } from '../../utils/apiKey'
import axios from 'axios'
import WeatherIcon from './WeatherIcon.vue'

export default {
  props: {
    cityID: null
  },
  data() {
    return {
      isVisible: false,
      weather: {}
    }
  },
  methods: {
    getWeather() {
      axios
        .get(`${linkWeatherNow}/${this.cityID}?apikey=${apiKey}&language=es&details=true`)

        .then((response) => {
          this.weather = response.data[0]
          this.isVisible = true
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getWeather()
  },
  components: { WeatherIcon }
}
</script>

<template>
  <div class="center">
    <div class="mainData" v-if="isVisible">
      <p1>{{ weather.Temperature.Metric.Value }}°</p1>

      <div class="weatherData">
        <WeatherIcon :icon="weather.WeatherIcon" />
        <p2>{{ weather.WeatherText }}</p2>
      </div>
    </div>
  </div>

  <div class="center">
    <div class="secondaryData" v-if="isVisible">
      <div class="table">
        <div class="data">
          <p1>Sensación termica: </p1>
          <p2>{{ weather.RealFeelTemperature.Metric.Value }}°</p2>
        </div>
        <div class="data">
          <p1>Humedad: </p1>
          <p2>{{ weather.RelativeHumidity }}%</p2>
        </div>
        <div class="data">
          <p1>Viento: </p1>
          <p2>{{ weather.Wind.Speed.Metric.Value }} km/h</p2>
        </div>
      </div>
      <div class="table">
        <div class="data">
          <p1>Presión Atmosférica: </p1>
          <p2>{{ weather.Pressure.Metric.Value }} mb</p2>
        </div>
        <div class="data">
          <p1>Indice UV: </p1>
          <p2>{{ weather.UVIndex }} ({{ weather.UVIndexText }})</p2>
        </div>
        <div class="data">
          <p1>Visibilidad: </p1>
          <p2>{{ weather.Visibility.Metric.Value }} km</p2>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.center {
  display: flex;
  justify-content: center;
}

.mainData {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}

.mainData p1 {
  font-family: 'Consolas', sans-serif;
  font-size: 80px;
  font-weight: bold;
}

.mainData .weatherData {
  display: grid;
  align-items: flex-end;
  justify-content: flex-end;
}

.mainData .weatherData p2 {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.secondaryData {
  background-color: rgba(0, 136, 168, 0.2);
  padding: 30px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border-radius: 15px;
}

.secondaryData .table {
  display: grid;
  width: 45%;
}

.data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

.data p2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: bold;
}
</style>
