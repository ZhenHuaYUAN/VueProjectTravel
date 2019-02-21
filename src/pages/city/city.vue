<template>
  <div>
    <City-header></City-header>
    <City-search></City-search>
    <City-list></City-list>
    <City-alphabet></City-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang='stylus' scoped>

</style>
