import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/sync-components.vue'
import Recursive  from '@/views/recursive-components.vue'
import ComponentCommunication from '@/views/component-communication.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    base: __dirname,
    mode: 'history',
    routes: [

        { path: '/', component: Index,  name: 'syncComponents' },
        { path: '/recursive', component: Recursive,  name: 'recursiveComponents' },
        { path: '/tongxin', component: ComponentCommunication,  name: 'componentCommunication' },

    ]
})

// router.beforeEach((to, from, next) => {
//     try{
//         next() // 确保一定要调用 next()
//     }catch(e){
//         location.href = "./" + to.fullPath
//         next(e)
//     }

// })
export default router
