<script>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
import axios from 'axios'
import { link24Horas } from '@/utils/linksAPI'
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
    const response = await axios.get(`${link24Horas}/${this.cityID}/historical/24?apikey=${apiKey}&language=es&metric=true`)

    response.data.map((res) => {
      this.labels.push(res.LocalObservationDateTime[11] + res.LocalObservationDateTime[12] + ':00')
      this.values.push(res.Temperature.Metric.Value)
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
  padding: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
}
</style>
