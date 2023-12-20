<script>
export default {
  data() {
    return {
      sun: false,
      cloudSun: false,
      cloud: false,
      cloudRain: false,
      cloudBolt: false,
      cloudShowersHeavy: false,
      snowFlake: false,
      temperatureFull: false,
      temperatureEmpty: false,
      wind: false,
      moon: false,
      cloudMoonRain: false
    }
  },
  props: {
    icon: null
  },
  methods: {
    setIcon() {
      if (this.icon >= 1 && this.icon <= 3) {
        this.sun = true
      } else if (this.icon >= 4 && this.icon <= 6) {
        this.cloudSun = true
      } else if ((this.icon >= 7 && this.icon <= 11) || (this.icon >= 36 && this.icon <= 38)) {
        this.cloud = true
      } else if (this.icon >= 12 && this.icon <= 14) {
        this.cloudRain = true
      } else if ((this.icon >= 15 && this.icon <= 17) || (this.icon >= 41 && this.icon <= 42)) {
        this.cludBolt = true
      } else if (this.icon == 18) {
        this.cloudShowersHeavy = true
      } else if ((this.icon >= 19 && this.icon <= 29) || (this.icon >= 43 && this.icon <= 44)) {
        this.snowFlake = true
      } else if (this.icon == 30) {
        this.temperatureFull = true
      } else if (this.icon == 31) {
        this.temperatureEmpty
      } else if (this.icon == 32) {
        this.wind = true
      } else if (this.icon >= 33 && this.icon <= 35) {
        this.moon = true
      } else if (this.icon >= 39 && this.icon <= 40) {
        this.cloudMoonRain = true
      }
    }
  },
  mounted() {
    this.setIcon()
  }
}
</script>

<template>
  <div v-if="sun" class="iconDiv">
    <fa icon="sun" />
  </div>

  <div v-if="cloudSun" class="iconDiv">
    <fa icon="cloud-sun" />
  </div>

  <div v-if="cloud" class="iconDiv">
    <fa icon="cloud" />
  </div>
  <div v-if="cloudRain" class="iconDiv">
    <fa icon="cloud-rain" />
  </div>
  <div v-if="cloudBolt" class="iconDiv">
    <fa icon="cloud-bolt" />
  </div>
  <div v-if="cloudShowersHeavy" class="iconDiv">
    <fa icon="cloud-showers-heavy" />
  </div>
  <div v-if="snowFlake" class="iconDiv">
    <fa icon="snow-flake" />
  </div>
  <div v-if="temperatureFull" class="iconDiv">
    <fa icon="temperature-full" />
  </div>
  <div v-if="temperatureEmpty" class="iconDiv">
    <fa icon="temperature-empty" />
  </div>
  <div v-if="moon" class="iconDiv">
    <fa icon="moon" />
  </div>
  <div v-if="wind" class="iconDiv">
    <fa icon="wind" />
  </div>
  <div v-if="cloudMoonRain" class="iconDiv">
    <fa icon="cloud-moon-rain" />
  </div>
</template>

<style>
.iconDiv {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 50px;
  margin-bottom: 10px;
}
</style>
