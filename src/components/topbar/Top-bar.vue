<template>
    <div class="navbar">
        <div class="logo">
            <p1>El Clima</p1>
        </div>

        <nav class="nav__links">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/aboutus">Acerca de</a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

li, a, button, p1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #edf0f1;
    text-decoration: none;
}

.logo {
    width: 120px;
}

.navbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    padding: 10px 8%;
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
    padding: 0px 10px;
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
</style>