<template>
    <nav id="side">
      <router-link v-for="key in keys" :to="'/material/'+key" :style="'background-color:'+ colors[key].base.hex">
        <span @click="handlerClick(key)"></span>
      </router-link>
    </nav>
</template>

<script>
import json from '../utils/colors/colors.json'
export default {
  name: 'side',
  data () {
    return {
      colors: json,
      keys: Object.keys(json)
    }
  },
  methods: {
    handlerClick (key) {
      this.$emit('click', key)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{list-style: none;}
#side a span{display: block;width:100%;min-height: 2rem;}
.active{text-decoration: line-through;}
table{margin:10px auto;}
</style>
