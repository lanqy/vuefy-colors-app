<template>
    <div id="color">
      <ul>
        <li v-for="item in items" @click="handlerClick(item.text)" :style="'background-color:' + item.text">
          <label :style="'color:' + color2white(item.hex)">{{item.code}}</label>
          <span :style="'color:' + color2white(item.hex)">{{item.text}}</span>
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
    mode: String
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
      this.list(title, this.mode)
    },
    mode (mode) {
      this.list(this.title, mode)
    }
  },
  methods: {
    list (title, mode) {
      var obj = this.colors[title]
      var o = Object.keys(obj)
      var text, hex, rgb, code, name, hsl
      this.items = []
      for (var i = 0; i < o.length; i++) {
        hex = obj[o[i]].hex
        rgb = Utils.hex2rgb(hex)
        code = obj[o[i]].code
        name = o[i]
        hsl = Utils.rgb2hsl(rgb)
        switch (mode) {
          case 'rgb':
            text = `rgb(${rgb.join(', ')})`
            break
          case 'hsl':
            text = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`
            break
          default:
            text = hex
        }
        this.items.push({
          name: name,
          hex: hex,
          text: text,
          rgb: rgb,
          code: code
        })
      }
    },
    color2white (hex) {
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
  mounted: function () {
    this.list(this.title, this.mode)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{list-style: none;}
.active{text-decoration: line-through;}
table{margin:10px auto;}
</style>
