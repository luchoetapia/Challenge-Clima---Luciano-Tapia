<script>
import axios from 'axios'
import { linkBuscador } from '@/utils/linksAPI'
import { apiKey } from '@/utils/apiKey'
import CityCard from './City-Card.vue'

export default {
  data() {
    return {
      cities: [],
      found: false
    }
  },
  props: {
    search: null
  },
  components: {
    CityCard
  },
  watch: {
    search: function () {
      this.cities = []

      axios.get(`${linkBuscador}?apikey=${apiKey}&q=${this.search}&language=es`)

        .then((response) => {
          this.cities = response.data
        })

        .catch((err) => {
          console.log(err)
        })
    },

    cities: function () {
      if (this.cities.length === 0) {
        this.found = false
      } else {
        this.found = true
      }
    }
  }
}
</script>

<template>
  <div class="results">
    <div class="title">
      <h1>Resultados de la busqueda</h1>
    </div>

    <div class="list" v-if="found">
      <ul>
        <li v-for="city in cities">
          <CityCard :city="city" />
        </li>
      </ul>
    </div>

    <div v-if="!found" class="notFound">
      <p1>No se encontraron resultados</p1>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans:wght@300&family=Poppins:wght@100&display=swap');

p1 {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.results {
  display: contents;
  justify-content: center;
  align-items: center;
}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
}

.title {
  border-bottom: 1px solid #aaaaaa;
  width: 90%;
  margin-left: 5%;
}

.list ul {
  width: 80%;
}

.list ul li {
  list-style: none;
}

.notFound {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0;
}
</style>
