import { createRouter, createWebHistory } from "vue-router";

import holaOliver from '../components/pruebas/holaOliver.vue';
import adiosOliver from '../components/pruebas/adiosOliver.vue';

const routes = [
    {
        path:'/',
        component: holaOliver
    },
    {
        path: '/pathMatch(.*)*',
        component: adiosOliver
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router