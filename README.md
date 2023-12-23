# Challenge Clima - Luciano Tapia

Plataforma de clima,desarrollada con Vue.js y conectada a AcuWeather (https://developer.accuweather.com/), en el cual se puede buscar y seleccionar cualquier ciudad del mundo (Siempre y cuando este en el sistema de AcuWeather) y ver diversos datos de como se encuentra el clima en dicha ciudad. Tambien se pueden ver algunos gráficos que informan las variaciones en las siguientes horas y días.

## Manual de usuario

Al entrar a la página, se puede ver un listado con las 50 ciudades mas buscadas y un input para buscar cualquier otra ciudad.

Al ir ingresando letras, se va actualizando un listado con varias ciudades, correspondientes a esa busqueda, con un botón para ingresar a ver sus datos (La lista del Top 50 también tiene este botón).

Cuando se ingresa a la ciudad, se observan los datos y los gráficos ofrecidos por la plataforma.

## Instalación

1- git clone https://github.com/luchoetapia/Challenge-Clima-Luciano-Tapia.git

2- cd ./challenge-clima-luciano-tapia

3- npm i

4- npm run dev

## Paquetes incluidos

- "@fortawesome/fontawesome-svg-core": "^6.5.1",
- "@fortawesome/free-solid-svg-icons": "^6.5.1"
- "@fortawesome/vue-fontawesome": "^3.0.5"
- "axios": "^1.6.2"
- "chart.js": "^4.4.1"
- "pinia": "^2.1.7"
- "vue": "^3.3.11"
- "vue-chartjs": "^5.3.0"
- "vue-router": "^4.2.5"

## Autor

Luciano Ezequiel Tapia (@luciano.etapia)

### Contacto

luciano.etapia@gmail.com

## Links de API utilizados

- https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D
- https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/5day/%7BlocationKey%7D
- https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/hourly/12hour/%7BlocationKey%7D
- https://developer.accuweather.com/accuweather-current-conditions-api/apis/get/currentconditions/v1/%7BlocationKey%7D/historical/24
- https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/autocomplete
- https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/topcities/%7Bgroup%7D
- https://developer.accuweather.com/accuweather-current-conditions-api/apis/get/currentconditions/v1/%7BlocationKey%7D
