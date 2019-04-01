<template>
  <div id="app">
    <test-menu></test-menu>


    <transition name="fade"  mode="out-in">
      <router-view ></router-view>
    </transition>
  </div>
</template>

<script>
import TestMenu from '@/components/Menu.vue'
export default {
  name: 'app',
  components: {
    TestMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
