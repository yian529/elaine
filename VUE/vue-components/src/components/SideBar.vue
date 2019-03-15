<template>
  <div class="tree-menu">
    <ul v-for="menuItem in theModel" :key="menuItem.id">
      <tree-menu :model="menuItem"></tree-menu>
    </ul>
  </div>
</template>

<script>
  import testData from '@/components/testData.js';
  import TreeMenu from '@/components/TreeMenu.vue';

  export default {
    name: "recursiveComponents",
    components: {
      TreeMenu
    },
    data() {
      return {
        theModel: testData
      }
    }
  }
</script>