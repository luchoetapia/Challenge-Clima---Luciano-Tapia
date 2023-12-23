<script>
export default {
  data() {
    return {
      iconType: '',
    }
  },
  props: {
    icon: null
  },
  methods: {
    getIcon() {
      if (this.icon >= 1 && this.icon <= 3) {
        this.iconType = "sun"
      } else if (this.icon >= 4 && this.icon <= 6) {
        this.iconType = "cloud-sun"
      } else if ((this.icon >= 7 && this.icon <= 11) || (this.icon >= 36 && this.icon <= 38)) {
        this.iconType = "cloud"
      } else if (this.icon >= 12 && this.icon <= 14) {
        this.iconType = "cloud-rain"
      } else if ((this.icon >= 15 && this.icon <= 17) || (this.icon >= 41 && this.icon <= 42)) {
        this.iconType = "cloud-bolt"
      } else if (this.icon == 18) {
        this.iconType = "cloud-showers-heavy"
      } else if ((this.icon >= 19 && this.icon <= 29) || (this.icon >= 43 && this.icon <= 44)) {
        this.iconType = "snow-flake"
      } else if (this.icon == 30) {
        this.iconType = "temperature-full"
      } else if (this.icon == 31) {
        this.iconType = "temperature-empty"
      } else if (this.icon == 32) {
        this.iconType = "wind"
      } else if (this.icon >= 33 && this.icon <= 35) {
        this.iconType = "moon"
      } else if (this.icon >= 39 && this.icon <= 40) {
        this.iconType = "cloud-moon-rain"
      }
    }
  },
  mounted() {
    this.getIcon()
  }
}
</script>

<template>
  <div class="iconDiv">
    <fa :icon="iconType" />
  </div>
</template>

<style scoped>
.iconDiv {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 50px;
  margin-bottom: 10px;
}
</style>
