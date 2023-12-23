<script>
import PopularCities from '../components/home/PopularCities.vue'
import SearchCities from '../components/home/SearchCities.vue'

export default {
  data() {
    return {
      search: '',
      isVisible: false
    }
  },
  components: {
    SearchCities,
    PopularCities
  },
  watch: {
    search: function() {
      if (this.search === '') {
        this.isVisible = false
      }

      else {
        this.isVisible = true
      }
    }
  }
}
</script>

<template>
  <div class="wellcome">
    <div class="msg"><h1>BIENVENIDO</h1></div>

    <div class="input-box">
      <fa icon="magnifying-glass" class="icon" />
      <input type="text" placeholder="Buscar ciudad..." v-model="search" />

      <button class="button">Buscar</button>
    </div>
  </div>

  <div v-if="isVisible">
    <SearchCities :search="search" />
  </div>

  <PopularCities />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans:wght@300&family=Poppins:wght@100&display=swap');

.wellcome {
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  background: url('../utils/photos/photo-1509773896068-7fd415d91e2e.jpeg');
  padding: 50px 0;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  color: #ffffff;
}

.msg {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-box {
  position: relative;
  height: 76px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.35);
}

.input-box .icon,
.input-box .button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.input-box .icon {
  left: 20px;
  font-size: 30px;
  color: #707070;
}

.input-box input {
  height: 100%;
  width: 50%;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  padding: 0 155px 0 65px;
  background-color: transparent;
  border: none;
}

.input-box .button {
  right: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  background-color: #0088a9;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
}

.input-box .button.clicked {
  transform: translateY(-50%) scale(0.98);
}
</style>
