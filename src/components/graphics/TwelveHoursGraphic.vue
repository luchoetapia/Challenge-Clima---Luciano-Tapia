<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import axios from 'axios'
import { link12Horas } from '@/utils/linksAPI'
import { apiKey } from '@/utils/apiKey'
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale)

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
    const response = await axios.get(
      `${link12Horas}/${this.cityID}?apikey=${apiKey}&language=es&metric=true`
    )

    response.data.map((res) => {
      this.labels.push(res.DateTime[11] + res.DateTime[12] + ':00')
      this.values.push(res.Temperature.Value)
    })

    console.log(this.labels)
    console.log(this.values)

    this.chartData = {
      labels: this.labels,
      datasets: [
        {
          label: 'Temperatura',
          data: this.values
        }
      ]
    }
    console.log(this.chartData.labels)
    this.isVisible = true
  }
}
</script>

<template>
  <div v-if="isVisible">
    <Line :chart-options="chartOptions" :chart-data="chartData" />
  </div>
</template>
