<template>
  <b-container>
    <b-card title="City of Chicago Land Areas">
      <b-table
          striped
          hover
          id="locationsTable"
          :items="locations"
          :fields="fields"
          :per-page="15"
          :current-page="currentPage"
          small/>
      <b-pagination
          align="fill"
          v-model="currentPage"
          :total-rows="locations.length"
          :per-page="15"
          aria-controls="locationsTable"/>
      <p>Current Page: {{ currentPage }}</p>
    </b-card>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: "ListData",
  data: function () {
    return {
      fields: ['community_area_name', 'pin', 'address'],
      locations: [],
      currentPage: 1,
    };
  },
  beforeMount() {
    axios.get("https://data.cityofchicago.org/resource/aksk-kvfp.json", {params: this.filters}).then(response => this.locations = response.data)
  },
  computed: {
    filters() {
      return this.$store.getters.getFilters
    }
  }
}
</script>

<style scoped>

</style>
