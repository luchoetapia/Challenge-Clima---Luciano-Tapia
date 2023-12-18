<script>
import axios from 'axios';
import { linkTopCiudades } from '@/utils/linksAPI';
import { apiKey } from '@/utils/apiKey';

export default {
    data() {
        return {
            popularCities: []
        }
    },
    methods: {
        getPopularCities() {
            console.log("hola")
            axios.get(`${linkTopCiudades}/50?apikey=${apiKey}&q=${this.search}&language=es`)

            .then ((response) => {
                this.popularCities = response.data
            })

            .catch ((err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getPopularCities()
    },
}
</script>

<template>
    <div>
        <h1>Ciudades mas buscadas</h1>
    </div>

    <div>
        <p1>{{ popularCities[0] }}</p1>
    </div>
</template>