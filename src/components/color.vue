<template>
  <div id="color" class="color" :style={backgroundColor:color}>
    <h1>{{color}}</h1>
  </div>
</template>

<script>
import * as Utils from '../utils/utils'
export default {
  name: 'color',
  data () {
    return {
      color: this.colorGen(),
      open: false
    }
  },
  methods: {
    colorGen () {
      return '#' + Math.random().toString(16).slice(2, 8)
    }
  },
  created: function () {
    var self = this
    var doc = document
    doc.onclick = function (e) {
      e.preventDefault()
      if (e.target.tagName === 'H1') {
        Utils.copy(e.target.innerText)
        Utils.toast()
      }
      self.color = self.colorGen()
    }
  }
}
</script>

<style>
.color{width: 100%;height: 100%;}
body{
  font-size: 1.5em;
  line-height: 1.6;
  font-weight: 400;
  font-family: "Quicksand", "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
h1{
  font-size: 4.0rem;
  font-family: "Quicksand";
  font-weight: 300;
  margin: 0 0 2.0rem 0;
  user-select:none;
  cursor: pointer;
  position: fixed;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
