<script>
export default {
  props: {
    city: {
      type: Object,
      required: true
    }
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'city', query: { key: this.city.Key } })
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="cityCard">
      <strong class="name">{{ city.LocalizedName }}</strong>
      <p1 class="state">{{ city.AdministrativeArea.LocalizedName }}, {{ city.Country.LocalizedName }}</p1>
    </div>

    <button class="button" @click="redirect" role="link"><fa icon="arrow-right" /></button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans:wght@300&family=Poppins:wght@100&display=swap');

.card {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #aaaaaa;
}

.cityCard {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
}

.citcityCardy p1 {
  font-size: 16px;
}

.cityCard .name {
  display: grid;
  font-size: 30px;
  font-weight: bold;
}

.button {
  font-size: 16px;
  width: 100px;
  font-weight: 400;
  color: #ffffff;
  background-color: #0088a9;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
