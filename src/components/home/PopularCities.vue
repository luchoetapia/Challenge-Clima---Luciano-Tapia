<script>
import axios from 'axios'
import { linkTopCiudades } from '@/utils/linksAPI'
import { apiKey } from '@/utils/apiKey'
import CityCard from './City-Card.vue'

export default {
  data() {
    return {
      popularCities: []
    }
  },
  methods: {
    getPopularCities() {
      axios
        .get(`${linkTopCiudades}/50?apikey=${apiKey}&q=${this.search}&language=es`)

        .then((response) => {
          this.popularCities = response.data
        })

        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getPopularCities()
  },
  components: {
    CityCard
  }
}
</script>

<template>
  <div class="title">
    <h1>TOP 50 mas buscadas</h1>
  </div>

  <div class="cities">
    <ul>
      <li v-for="city in popularCities">
        <cityCard :city="city" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans:wght@300&family=Poppins:wght@100&display=swap');

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
}

.title {
  border-bottom: 1px solid #aaaaaa;
  width: 90%;
  margin-left: 5%;
}

.cities {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  width: 80%;
}

li {
    list-style: number;
    font-family: 'poppins';
    font-size: 18px;
    font-weight: bold;
}
</style>
