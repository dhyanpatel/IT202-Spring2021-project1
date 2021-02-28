<template>
  <div id="map" ref="map"/>
</template>

<script>
import axios from "axios";

export default {
  name: "MapData",
  data: () => ({
    locations: [],
    map: null
  }),
  mounted() {
    this.map = new window.google.maps.Map(this.$refs["map"], {
      center: {lat: 41.87011425047884, lng: -87.64948762367648},
      zoom: 12
    })
    axios.get("https://data.cityofchicago.org/resource/aksk-kvfp.json", {params: this.filters}).then(response => {
      this.locations = response.data
      this.locations.forEach(location => {
        let marker = new window.google.maps.Marker({
          position: {lat: parseFloat(location.latitude), lng: parseFloat(location.longitude)},
          map: this.map
        })
        let infoWindow = new window.google.maps.InfoWindow({
          position: {lat: parseFloat(location.latitude), lng: parseFloat(location.longitude)},
          content: `<h4>${location.community_area_name}</h4><b>${location.address}</b><br><b>${location.pin}</b>`,
          disableAutoPan: true
        })
        marker.addListener("mouseover", () => infoWindow.open(this.map, marker))
        marker.addListener("mouseout", () => infoWindow.close(this.map, marker))
      })
    })
  },
  computed: {
    filters() {
      return this.$store.getters.getFilters
    }
  },

}
</script>


<style scoped>
#map {
  height: 94vh;
  background: gray;
}
</style>
