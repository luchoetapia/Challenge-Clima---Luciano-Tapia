<script setup>
  import SearchComponent from '../search/Search-component.vue'
</script>

<template>
    <div class="wellcome">
      <div class="msg"><h1>BIENVENIDO</h1></div>

      <div class="input"><SearchComponent /></div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

  .wellcome {
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    background: url('../../../public/photos/blue-sky-background-and-white-clouds-vector.jpg');
    padding: 50px 0;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
  }

  .msg {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

</style>