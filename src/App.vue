<template>
  <div>
    <AppBar/>
    <div id="app">
      <Home v-if="currentPage==='Home'"/>
      <Form v-if="currentPage==='Application'"/>
      <ListData v-if="currentPage === 'ListData'"/>
      <MapData v-if="currentPage === 'MapData'"/>
      <About v-if="currentPage === 'About'"/>
    </div>
  </div>
</template>

<script>

import AppBar from "@/components/AppBar";
import Home from "@/components/Home";
import Form from "@/components/Form";
import ListData from "@/components/ListData";
import MapData from "@/components/MapData";
import About from "@/components/About";

export default {
  name: 'App',
  components: {About, MapData, ListData, Form, AppBar, Home},
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
