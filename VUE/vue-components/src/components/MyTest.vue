<template>
<section>
    <div>这里是标题,父组件通过prop传递给子组件的：{{title}}</div>
    <div> 注意这里:this.$attrs{{$attrs}}</div>
</section>
</template>
<script>
export default {
    props:['title'],
    data(){
        return{
        }
    },
    inheritAttrs: false,
    created:function(){
        console.log(this.$attrs)//注意这里
    }
}
</script>

