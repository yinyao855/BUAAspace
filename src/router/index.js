
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Wall from '../views/WallPage.vue'
import Home from '../views/HomePage.vue'
import Scene from '../views/ScenePage.vue'
import About from '../views/AboutPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/wall',
            name: 'Wall',
            component: Wall
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/scene',
            name: 'Scene',
            component: Scene
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

export default router
