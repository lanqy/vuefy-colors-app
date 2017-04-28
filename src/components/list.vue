<template>
    <ul id="color">
      <li v-for="item in items" :style="'background-color:' + item.hex"><label>{{item.code}}</label><span>{{item.hex}}</span></li>
    </ul>
</template>

<script>
import json from '../utils/colors/colors.json'
export default {
  name: 'list',
  data () {
    return {
      colors: json,
      keys: Object.keys(json),
      user: {},
      title: this.$route.params.title,
      items: []
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
    }
  },
  watch: {
    '$route' (to, from) {
      this.updateItems(this.$route.params.title)
    }
  },
  created: function () {
    this.updateItems(this.$route.params.title)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{list-style: none;}
.active{text-decoration: line-through;}
table{margin:10px auto;}
</style>
