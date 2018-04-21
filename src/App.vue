<template>
  <div id="app" class='app'>
      <guide ></guide>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import guide from 'components/guide/guide'
export default {
  'name': 'App',
  components:{guide}
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus' >





</style>
