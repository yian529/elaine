<template>
    <div class="">
        <MyTest :title="title" :massgae="massgae" :test="test"></MyTest>
    </div>
</template>
<script>
import MyTest from './MyTest.vue'
export default {
    name:'componentCommunication',
    data () {
        return {
            title:'定义在父组件的title',
            massgae:'message222'
        }
    },
    components:{
        MyTest
    },
    created:function(){
    },
    methods:{
        test() {
            alert(111)
        }
    },
}
</script>