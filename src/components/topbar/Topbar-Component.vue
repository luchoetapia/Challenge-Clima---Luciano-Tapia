<script>
export default {
  methods: {
    toggleBtm() {
      const toggleBtmIcon = document.querySelector('.toggle_btm fa')
      const dropdown = document.querySelector('.dropdown')

      dropdown.classList.toggle('open')
      const isOpen = dropdown.classList.contains('open')

      toggleBtmIcon.icon = isOpen ? 'xmark' : 'bars'
    }
  }
}
</script>

<template>
  <div class="navbar">
    <a class="logo">El Clima</a>

    <nav class="nav__links">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Acerca de</a></li>
      </ul>
    </nav>

    <div class="toggle_btm" v-on:click="toggleBtm">
      <fa icon="bars" size="xl" style="color: #edf0f1;"/>
    </div>
  </div>

  <div class="dropdown">
    <li><a href="/">Inicio</a></li>
    <li><a href="/about">Acerca de</a></li>
  </div>
</template>

<style scoped>
li, a {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #edf0f1;
  text-decoration: none;
}

.logo {
    size: 120px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px 10%;
  background-color: #24252A;

}

.nav__links {
  list-style: none;
}

.nav__links ul {
  padding-inline-start: 0;
}

.nav__links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav__links li a {
  transition: all 0.3s ease 0s;
}

.nav__links li a:hover {
  color: #0088a9;
}

.nav__links li a::after {
  content: '';
  display: block;
  height: 5px;
  width: 0%;
  background-color: #0088a9;
  transition: all ease-in-out 0.3s;
}

.nav__links li a:hover::after {
  width: 100%;
}

.navbar .toggle_btm {
  width: 18px;
  cursor: pointer;
  display: none;
}

.dropdown {
  display: none;
  position: absolute;
  right: 2rem;
  top: 68px;
  width: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  overflow: hidden;
  height: 0;
  transition: height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.dropdown.open {
  height: 105px;
}

.dropdown li {
  background-color: transparent;
  list-style: none;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown li a {
  background-color: transparent;
  transition: all 0.3s ease 0s;
  color: #24252A;
}

.dropdown li a:hover {
  color: #0088a9;
}

.dropdown li a::after {
  content: '';
  display: block;
  height: 5px;
  width: 0%;
  background-color: #0088a9;
  transition: all ease-in-out 0.3s;
}

.dropdown li a:hover::after {
  width: 100%;
}

@media (max-width: 822px) {
  .nav__links li {
    display: none;
  }
  .navbar .toggle_btm {
    display: block;
  }

  .dropdown {
    display: block;
  }
}

@media (max-width: 576px) {
  .dropdown {
    left: 2rem;
    width: unset;
  }
}

fa {
    color: #edf0f1;
}
</style>
