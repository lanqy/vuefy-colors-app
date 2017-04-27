<template>
  <div id="app">
    <ul>
      <router-link to="/">Colors</router-link>
      <router-link to="/users">Users</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{margin:0;padding:0;}
html,body{width: 100%;height: 100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  transition: all 2s ease;
}
</style>
