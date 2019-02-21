<template>
  <div>
    <City-header></City-header>
    <City-search></City-search>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang='stylus' scoped>

</style>
