import { createRouter, createWebHistory } from "vue-router";

import holaOliver from '../components/pruebas/holaOliver.vue';
import adiosOliver from '../components/pruebas/adiosOliver.vue';
import list from '../components/pruebas/list.vue';
import nuevaVista from '../components/pruebas/nuevaVista.vue'; 
import home from '../components/views/home.vue';

const routes = [
    {
        path:'/',
        component: holaOliver
    },
    {
        path:'/list',
        component: list
    },
    {
        path: '/:pathMatch(.*)*',
        component: adiosOliver
    },
    {
        path: '/nuevaVista',
        component: nuevaVista
    },
    {
        path: '/home',
        component: home
    }  
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router