<script>
export default {
  data() {
    return {
      city: {
        LocalizedName: '',
        AdministrativeArea: { LocalizedName: '' },
        Country: { LocalizedName: '' }
      }
    }
  },
  props: {
    cityRecived: {}
  },
  mounted() {
    this.city = this.cityRecived
  }
}
</script>

<template>
  <div class="card">
    <div class="city">
      <p1 class="name">{{ city.LocalizedName }}</p1>
      <p2 class="state">{{ city.AdministrativeArea.LocalizedName }}, {{ city.Country.LocalizedName }}</p2>
    </div>

    <button class="button"><fa icon="arrow-right" /></button>
  </div>
</template>

<style>
.card {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.name {
    display: grid;
    
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
