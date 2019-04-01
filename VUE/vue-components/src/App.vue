<template>
  <div id="app">
    <test-menu></test-menu>


    <!-- <div>
        <router-link :to="{name:'HelloWorld'}"><h1>H1</h1></router-link>
       <router-link :to="{name:'H1'}"><h1>H2</h1></router-link>
    </div> -->


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
