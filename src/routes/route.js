import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicio from '../components/PaginaInicio.vue'
import PaginaRegistro from '../components/PaginaRegistro.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/paginainicio'
        },
        {
            path: '/paginainicio',
            name: 'paginainicio',
            component: PaginaInicio,
            props: true
        },
        {
            path: '/paginaregistro',
            name: 'paginaregistro',
            component: PaginaRegistro,
            props: true
        }
    ]
})

export default router

// routes: [
//     {
//         path: '/',
//         redirect: '/paginainicio'
//     },
//     {
//         path: '/paginainicio',
//         component: PaginaInicio,
//         children: [
//             {
//                 path: '/paginaregistro',
//                 name: 'paginaregistro',
//                 component: PaginaRegistro
//             }
//         ]
//     },
// ]