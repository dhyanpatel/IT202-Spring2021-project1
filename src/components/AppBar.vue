<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item @click="navPage('Home')">Instructions</b-nav-item>
      <b-nav-item @click="navPage('Application')">Application</b-nav-item>
      <b-nav-item @click="navPage('About')">About</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "AppBar",
  methods: {
    navPage(page){
      this.$store.commit('setPage', page)
    }
  }
}
</script>

<style scoped>

</style>
