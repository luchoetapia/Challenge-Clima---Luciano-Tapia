<script>
import axios from 'axios'
import { linkHoy } from '@/utils/linksAPI'
import { apiKey } from '@/utils/apiKey'

export default {
  data() {
    return {
      day: {},
      found: false,
      sunrise: '',
      sunset: ''
    }
  },
  props: {
    cityID: null
  },
  methods: {
    getDay() {
      axios
        .get(`${linkHoy}/${this.cityID}?apikey=${apiKey}&language=es&details=true&metric=true`)
        .then((response) => {
          this.day = response.data
          this.sunrise = this.day.DailyForecasts[0].Sun.Rise
          this.sunset = this.day.DailyForecasts[0].Sun.Set
          this.found = true
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getDay()
  }
}
</script>

<template>
  <div class="div1" v-if="found">
    <div class="temps">
      <div class="data">
        <p1>Temp. Máxima: </p1>
        <p2>{{ day.DailyForecasts[0].Temperature.Maximum.Value }}°</p2>
      </div>

      <div class="data">
        <p1>Temp. Mínima: </p1>
        <p2>{{ day.DailyForecasts[0].Temperature.Minimum.Value }}°</p2>
      </div>
    </div>

    <div class="temps">
      <div class="data">
        <p1>Sens. Tér. Máx: </p1>
        <p2>{{ day.DailyForecasts[0].RealFeelTemperature.Maximum.Value }}°</p2>
      </div>

      <div class="data">
        <p1>Sens. Tér. Mín: </p1>
        <p2>{{ day.DailyForecasts[0].RealFeelTemperature.Minimum.Value }}°</p2>
      </div>
    </div>

    <div class="temps">
      <div class="data">
        <p1>Amanecer: </p1>
        <p2>{{ sunrise[11] + sunrise[12] + ':' + sunrise[14] + sunrise[15] }}</p2>
      </div>

      <div class="data">
        <p1>Atardecer: </p1>
        <p2>{{ sunset[11] + sunset[12] + ':' + sunset[14] + sunset[15] }}</p2>
      </div>
    </div>
  </div>

  <div class="text" v-if="found">
    <p1>{{ day.Headline.Text }}</p1>
  </div>

  <div class="dayNight" v-if="found">
    <div class="day">
      <p3>Por la tarde</p3>
      <p1>{{ day.DailyForecasts[0].Day.IconPhrase }}</p1>

      <div class="data">
        <p1>Prob. Lluvia:</p1>
        <p2>{{ day.DailyForecasts[0].Day.RainProbability }}%</p2>
      </div>

      <div class="data">
        <p1>Prob. Nieve:</p1>
        <p2>{{ day.DailyForecasts[0].Day.SnowProbability }}%</p2>
      </div>

      <div class="data">
        <p1>Humedad:</p1>
        <p2>{{ day.DailyForecasts[0].Day.RelativeHumidity.Average }}%</p2>
      </div>

      <div class="data">
        <p1>Viento: </p1>
        <p2>{{ day.DailyForecasts[0].Day.Wind.Speed.Value }} km/h</p2>
      </div>
    </div>

    <div class="day">
      <p3>Por la noche</p3>
      <p1>{{ day.DailyForecasts[0].Night.IconPhrase }}</p1>

      <div class="data">
        <p1>Prob. Lluvia:</p1>
        <p2>{{ day.DailyForecasts[0].Night.RainProbability }}%</p2>
      </div>

      <div class="data">
        <p1>Prob. Nieve:</p1>
        <p2>{{ day.DailyForecasts[0].Night.SnowProbability }}%</p2>
      </div>

      <div class="data">
        <p1>Humedad:</p1>
        <p2>{{ day.DailyForecasts[0].Night.RelativeHumidity.Average }}%</p2>
      </div>

      <div class="data">
        <p1>Viento: </p1>
        <p2>{{ day.DailyForecasts[0].Night.Wind.Speed.Value }} km/h</p2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.div1 {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.temps {
  background-color: rgba(0, 136, 168, 0.2);
  padding: 10px;
  width: 30%;
  display: grid;
  margin-top: 20px;
  border-radius: 15px;
}

.data {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
}

.data p1 {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.data p2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.text {
  margin: 25px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text p1 {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 25px;
}

.dayNight {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.day {
  width: 45%;
  background-color: rgba(0, 136, 168, 0.2);
  padding: 15px;
  border-radius: 15px;
  display: grid;
}

.day p1 {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.day p3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  font-weight: bold;
}
</style>
