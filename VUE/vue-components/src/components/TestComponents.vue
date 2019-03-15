<template>
<div>
    <!-- 按钮，用于切换组件 -->
    <button @click="currentTabComponent = 'A'">showA</button>
    <button @click="currentTabComponent = 'B'">showB</button>

     <!-- 动态切换显隐，组件 -->
     <keep-alive>
        <component :is="currentTabComponent"></component>
     </keep-alive>


     <!-- <A v-show="currentTabComponent == 'A'"></A>
     <B v-show="currentTabComponent == 'B'"></B> -->

     
     <!-- <A v-if="currentTabComponent == 'A'"></A>
     <B v-if="currentTabComponent == 'B'"></B> -->
</div>
</template>
<script>
//引入组件A以及组件B
import A from "./A.vue";
import B from "./B.vue";
  export default {
    name:'testSyncComponents',
    data() {
      return {
        //默认显示组件A，若字符串为B则显示组件B,name在component内声明
        currentTabComponent: "A"
      };
    },
    methods: {
    },
    components: {
        //声明组件A,B
        A,
        B
    },
    methods:{
    }
  };
</script>
<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
.posts-tab {
  display: flex;
}
.posts-sidebar {
  max-width: 40vw;
  margin: 0;
  padding: 0 10px 0 0;
  list-style-type: none;
  border-right: 1px solid #ccc;
}
.posts-sidebar li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.posts-sidebar li:hover {
  background: #eee;
}
.posts-sidebar li.selected {
  background: lightblue;
}
.selected-post-container {
  padding-left: 10px;
}
.selected-post > :first-child {
  margin-top: 0;
  padding-top: 0;
}
</style>
