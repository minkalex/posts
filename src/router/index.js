import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: () => import('../components/Post/Index'), name: 'posts.index'},
    {path: '/posts/:id', component: () => import('../components/Post/Show'), name: 'posts.show'},
    {path: '/posts/create', component: () => import('../components/Post/Create'), name: 'posts.create'},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
