<template>
    <nav id="side">
      <router-link v-for="key in keys" :to="'/material/'+key" :style="'background-color:'+ colors[key].base.hex"></router-link>
    </nav>
</template>

<script>
import json from '../utils/colors/colors.json'
export default {
  name: 'side',
  data () {
    return {
      colors: json,
      keys: Object.keys(json),
      user: {},
      users: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{list-style: none;}
.active{text-decoration: line-through;}
table{margin:10px auto;}
</style>
