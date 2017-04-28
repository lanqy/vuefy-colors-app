<template>
    <div id="color">
      <ul>
        <li v-for="item in items" @click="handlerClick(item.hex)" :style="'background-color:' + item.hex"><label>{{item.code}}</label><span>{{item.hex}}</span></li>
      </ul>
    <div id="toast" :class="{open:open}">Copied!</div>
  </div>
</template>

<script>
import * as Utils from '../utils/utils'
import json from '../utils/colors/colors.json'
export default {
  name: 'list',
  props: {
    title: String,
    default: 'red'
  },
  data () {
    return {
      colors: json,
      keys: Object.keys(json),
      items: [],
      open: false,
      route: this.title
    }
  },
  watch: {
    title (title) {
      this.updateItems(title)
    }
  },
  methods: {
    updateItems (title) {
      var obj = this.colors[title]
      var o = Object.keys(obj)
      this.items = []
      for (var i = 0; i < o.length; i++) {
        var hex = obj[o[i]].hex
        var rgb = obj[o[i]].rgb
        var code = obj[o[i]].code
        this.items.push({
          hex: hex,
          rgb: rgb,
          code: code
        })
      }
    },
    close () {
      var _this = this
      setTimeout(function () {
        _this.open = false
      }, 1000)
    },
    handlerClick (text) {
      Utils.copy(text)
      this.open = true
      this.close()
    }
  },
  created: function () {
    this.updateItems(this.title)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{list-style: none;}
.active{text-decoration: line-through;}
table{margin:10px auto;}
</style>
