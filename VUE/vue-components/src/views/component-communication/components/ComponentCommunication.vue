<template>
    <div class="">
        <MyTest :title="title" :massgae="massgae"></MyTest>
    </div>
</template>
<script>
import MyTest from './MyTest.vue'
export default {
    name:'componentCommunication',
    data () {
        return {
            title:'定义在父组件的title',
            massgae:'message111'
        }
    },
    components:{
        MyTest
    },
    created:function(){
    }
}
</script>