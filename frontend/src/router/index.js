//FILE CHE SI OCCUPA DELLE ROTTE DELL'APPLICAZIONE
import { createRouter, createWebHistory } from 'vue-router'

//Importazione degli elementi, cioe le mie paginette
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home 
    },
]

export default routes