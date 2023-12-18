<script>
import SearchCard from './Search-card.vue';

export default {
  props: {
    cities: [],
    isVisible: null
  },
  components: {
    SearchCard,
    },
    methods: {
        isNotEmpty() {
            if (this.cities.lenght === 0) {
                return false
            }

            return true
        }
    }

}
</script>

<template>
  <div v-if="isVisible">
    <div class="title">
      <h1>Resultados de la busqueda</h1>
    </div>

    <div class="resultados" v-if="isNotEmpty">
      <SearchCard :cityRecived="cities[0]" />
    </div>

    <div class="loading" v-if="!isNotEmpty">
        No se encontraron resultados
    </div>
  </div>
</template>

<style>
.resultados {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
