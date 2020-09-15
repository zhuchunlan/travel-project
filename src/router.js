import Vue from 'vue'
import Vuerouter from 'vue-router'

import Home from './components/home/Home.vue'

Vue.use(Vuerouter)

const routes=[
    {
        path:'',
        redirect: '/home'

    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/city',
        component: () => import ('./components/city/City.vue')
    },
    {
        path: '/detail',
        component: () => import ('./components/detail/Detail.vue')
    }
]

const router = new Vuerouter({
    routes,
    mode: 'history'
})

export default router