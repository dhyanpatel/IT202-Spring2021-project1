<template>
  <b-container>
    <br>
    <b-row class="my-1" v-for="field in fields" :key="field.field">
      <b-col sm="3">
        <label>Filter <code>{{ field.field }}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input v-model="field.value"/>
      </b-col>
    </b-row>
    <br>
    <b-row class="my-1">
      <b-col>
        <b-button @click="submitForm('ListData')">List Data</b-button>
      </b-col>
      <b-col>
        <b-button @click="submitForm('MapData')">Map Data</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Form",
  data: function () {
    return {
      fields: [
        {field: 'id', value: ''},
        {field: 'pin', value: ''},
        {field: 'address', value: ''},
        {field: 'managing_organization', value: ''},
        {field: 'property_status', value: ''},
        {field: 'sq_ft', value: ''},
        {field: 'ward', value: ''},
        {field: 'community_area_number', value: ''},
        {field: 'community_area_name', value: ''},
        {field: 'zoning_classification', value: ''},
        {field: 'zip_code', value: ''},
        {field: 'last_update', value: ''},
      ]
    };
  },
  methods: {
    submitForm(page) {
      this.$store.commit('setFilters', this.fields.filter(field => field.value !== ''))
      this.$store.commit('setPage', page)
    }
  }
}
</script>

<style scoped>

</style>
