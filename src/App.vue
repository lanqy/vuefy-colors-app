<template>
  <div id="app">
    <header id="top"><a id="logo"></a><h2>red</h2><div id="modes">hex</div></header>
    <main id="content">
      <side></side>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import './assets/index.css'
import side from './components/side.vue'
export default {
  name: 'app',
  components: {
    side
  }
}
</script>

<style>
*{margin:0;padding:0;}
html,body{height: 100%;width:100%}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #2c3e50;
}
</style>
