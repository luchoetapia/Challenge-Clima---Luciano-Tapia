<script>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
import axios from 'axios'
import { link5Dias } from '@/utils/linksAPI'
import { apiKey } from '@/utils/apiKey'


export default {
  components: { Line },
  props: {
    cityID: null
  },
  data() {
    return {
      labels: [],
      tempsMax: [],
      tempsMin: [],
      chartData: [],
      chartOptions: {
        responsive: true
      },
      isVisible: false
    }
  },
  async mounted() {
    const response = await axios.get(`${link5Dias}/${this.cityID}?apikey=${apiKey}&language=es&metric=true`)
    
    response.data.DailyForecasts.map((res) => {
      const date = new Date (res.Date)
      this.labels.push(date.getDate() + '/' + date.getMonth() + "/" + date.getFullYear())
      this.tempsMax.push(res.Temperature.Maximum.Value)
      this.tempsMin.push(res.Temperature.Minimum.Value)
    })

    this.chartData = {
      labels: this.labels,
      datasets: [
        {
          label: 'Temperatura Máxima',
          data: this.tempsMax,
          backgroundColor: "#ff0000",
          borderColor: "#ff0000",
          radius: 8,
          borderWidth: 2,
          
        },
        {
          label: 'Temperatura Mínima',
          data: this.tempsMin,
          backgroundColor: "#0088a9",
          borderColor: "#0088a9",
          radius: 8,
          borderWidth: 2,
        }
      ]
    }

    this.isVisible = true
  }
}
</script>

<template>
  <div class="graphic" v-if="isVisible">
    <Line :data="chartData" :options="chartOptions" />
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
