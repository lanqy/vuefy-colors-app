<template>
  <div class="users">
    <form class="" action="index.html" method="post">
      Name: <input type="text" v-model="user.name" name="" value="" />
      <br />
      <br />
      Email: <input type="email" v-model="user.email" name="" value="" />
      <br />
      <br />
      <input type="submit" value="Add" @click="AddUser" />
    </form>
    <table>
      <tr v-for="user in users" :class="{ active: user.contacted }">
        <td>Name</td>
        <td>{{user.name}}</td>
        <td>Email</td>
        <td>{{user.email}}</td>
        <td><input type="checkbox" v-model="user.contacted" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      user: {},
      users: []
    }
  },

  methods: {
    AddUser (e) {
      if (this.user.name && this.user.email) {
        this.users.push({
          name: this.user.name,
          email: this.user.email,
          contacted: false
        })
      }

      this.user.name = ''
      this.user.email = ''
      e.preventDefault()
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
