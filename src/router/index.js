
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Wall from '../views/WallPage.vue'
import Home from '../views/HomePage.vue'
import Scene from '../views/ScenePage.vue'
import About from '../views/AboutPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/BUAAspace/Wall',
            name: 'Wall',
            component: Wall
        },
        {
            path: '/BUAAspace/',
            name: 'Home',
            component: Home
        },
        {
            path: '/BUAAspace/Scene',
            name: 'Scene',
            component: Scene
        },
        {
            path: '/BUAAspace/About',
            name: 'About',
            component: About
        }
    ]
})

export default router
