<template>
    <div id="color">
      <ul>
        <li v-for="item in items" @click="handlerClick(item.hex)" :style="'background-color:' + item.hex">
          <label :style="'color:' + checkColor(item.hex)">{{item.code}}</label>
          <span :style="'color:' + checkColor(item.hex)">{{item.hex}}</span>
        </li>
      </ul>
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
        var name = o[i]
        this.items.push({
          name: name,
          hex: hex,
          rgb: rgb,
          code: code
        })
      }
    },
    checkColor (hex) {
      var rgb = Utils.hex2rgb(hex)
      if (Utils.isDark(rgb)) {
        return '#fff'
      }
      return ''
    },
    handlerClick (text) {
      Utils.copy(text)
      Utils.toast()
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
