<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>

@font-face {
  font-family: "Work Sans";
  src: url("./assets/fonts/Work_Sans/static/WorkSans-Regular.ttf") format("ttf"),
} 

#app {
  font-family: "Work Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>