<template>
  <div>
    <AppBar/>
    <div id="app">
      <Home v-if="currentPage==='Home'"/>
    </div>
  </div>
</template>

<script>

import AppBar from "@/components/AppBar";
import Home from "@/components/Home";
export default {
  name: 'App',
  components: {AppBar, Home},
  computed: {
    currentPage() {
      return this.$store.getters.getPage
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
