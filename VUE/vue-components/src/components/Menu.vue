<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link :to="{name:'syncComponents'}">异步组件(:is, v-if, v-show)</router-link></el-menu-item>
        <el-menu-item index="2"><router-link :to="{name:'recursiveComponents'}">递归组件</router-link></el-menu-item>
        <el-menu-item index="3"><router-link :to="{name:'componentCommunication'}">组件通信</router-link></el-menu-item>
    </el-menu>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
          this.activeIndex = key
        console.log(key, keyPath);
      }
    }
}
</script>

