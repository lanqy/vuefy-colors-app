<template>
  <div id="app">
    <Hd @click="switchColorMode"></Hd>
    <main id="content">
      <Side @click="handlerClick"></Side>
      <router-view :route="route" :mode="mode"></router-view>
    </main>
  </div>
</template>

<script>
import './assets/index.css'
import Hd from './components/header.vue'
import Side from './components/side.vue'
export default {
  name: 'app',
  data () {
    return {
      route: 'red',
      open: false,
      mode: 'hex'
    }
  },
  methods: {
    handlerClick (key) {
      this.route = key
    },
    close () {
      var _this = this
      setTimeout(function () {
        _this.open = false
      }, 1000)
    },
    switchColorMode (value) {
      this.mode = value
    }
  },
  components: {
    Side,
    Hd
  }
}
</script>

<style>
*{margin:0;padding:0;}
html,body{height: 100%;width:100%}
#app {
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  color: #2c3e50;
}
._404{
  -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    background: #666;
  }
</style>
