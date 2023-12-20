<script>
import axios from 'axios'
import { linkLocationKey } from '../utils/linksAPI'
import { apiKey } from '@/utils/apiKey'
import { linkWeatherNow } from '../utils/linksAPI'

export default {
  data() {
    return {
      cityID: this.$route.query.key,
      city: {
        LocalizedName: '',
        AdministrativeArea: { LocalizedName: '' },
        Country: { LocalizedName: '' }
      },
      weather: {
        WeatherText: '',
        WeatherIcon: 0,
        Temperature: {
          Metric: {
            Value: 0
          }
        },
        RealFeelTemperature: {
          Metric: {
            Value: 0
          }
        },
        RelativeHumidity: 0,
        Wind: {
          Speed: {
            Metric: {
              Value: 0
            }
          }
        },
        Pressure: {
          Metric: {
            Value: 0
          }
        }
      }
    }
  },
  methods: {
    getName() {
      axios
        .get(`${linkLocationKey}/${this.cityID}?apikey=${apiKey}&language=es`)

        .then((response) => {
          this.city = response.data
        })

        .catch((err) => {
          console.log(err)
        })
    },

    getWeather() {
      axios
        .get(`${linkWeatherNow}/${this.cityID}?apikey=${apiKey}&language=es&details=true`)

        .then((response) => {
          this.weather = response
        })

        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getName()
    this.getWeather()
  }
}
</script>

<template>
  <div class="main">
    <div class="city">
      <strong>{{ city.LocalizedName }}</strong>
      <p1>{{ city.AdministrativeArea.LocalizedName }}, {{ city.Country.LocalizedName }}</p1>
    </div>
  </div>

  <div class="main">
    <div class="weather">
        <div class="actual">
          
        </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}

.city {
  width: 90%;
  border-bottom: 1px solid #aaaaaa;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.city strong {
  font-size: 45px;
  font-weight: bold;
}

.weather {
    width: 80%;
    background-color: #aaaaaa;
    padding: 20px;
}
</style>
