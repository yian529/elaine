import Vue from 'vue'
import VueRouter from 'vue-router'

import SyncComponents from '@/views/sync-components/'
import RecursiveComponents  from '@/views/recursive-components/'
import ComponentCommunication from '@/views/component-communication/'

Vue.use(VueRouter)


const router = new VueRouter({
    base: __dirname,
    mode: 'history',
    routes: [

        { path: '/', component: SyncComponents,  name: 'syncComponents' },
        { path: '/recursive', component: RecursiveComponents,  name: 'recursiveComponents' },
        { path: '/tongxin', component: ComponentCommunication,  name: 'componentCommunication' },

    ]
})

export default router
