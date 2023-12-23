<script>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
import axios from 'axios'
import { link12Horas } from '@/utils/linksAPI'
import { apiKey } from '@/utils/apiKey'


export default {
  name: 'TwelveHoursGraphic',
  components: { Line },
  props: {
    cityID: null
  },
  data() {
    return {
      labels: [],
      values: [],
      chartData: [],
      chartOptions: {
        responsive: true
      },
      isVisible: false
    }
  },
  async mounted() {
    const response = await axios.get(`${link12Horas}/${this.cityID}?apikey=${apiKey}&language=es&metric=true`)

    response.data.map((res) => {
      const date = new Date(res.DateTime)
      this.labels.push(date.getHours() + ":" + date.getMinutes())
      this.values.push(res.Temperature.Value)
    })

    this.chartData = {
      labels: this.labels,
      datasets: [
        {
          label: 'Temperatura',
          data: this.values,
          backgroundColor: "#0088a9"
        }
      ]
    }

    this.isVisible = true
  }
}
</script>

<template>
  <div class="graphic" v-if="isVisible">
    <Line :data="chartData" :options="chartOptions"  />
  </div>
</template>

<style scoped>
.graphic {
  background-color: #f3f6f7;
  width: 80%;
  padding: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
}
</style>
