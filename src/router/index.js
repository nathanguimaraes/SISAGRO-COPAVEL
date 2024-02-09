import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/produtor',
            component:() => import('../views/Produtor.vue')
        },

        {
            path: '/documentacao',
            component: () => import('../views/Documentacao.vue')
        },
        {
            path: '/relatorio',
            component: () => import('../views/Relatorio.vue')
        },
        {
            path: '/analises',
            component: () => import('../views/Analises.vue')
        },
        {
            path: '/imagens',
            component: () => import('../views/Imagens.vue')
        },
        {
            path: '/duvidas-frequentes',
            component: () => import('../views/Duvidas-Frequentes.vue')
        },
        {
            path: '/configuracoes',
            component: () => import('../views/Configuracoes.vue')
        },
        {
            path: '/geolocalizacao',
            component: () => import('../views/Geolocalização.vue')
        },
        {
            path: '/local',
            component: () => import('../views/Local.vue')
        },
        {
            path: '/assinatura',
            component: () => import('../views/Assinatura.vue')
        },

    ]
})

export default router