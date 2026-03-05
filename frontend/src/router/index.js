//FILE CHE SI OCCUPA DELLE ROTTE DELL'APPLICAZIONE
import { createRouter, createWebHistory } from 'vue-router'

//Importazione degli elementi, cioe le mie paginette
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About}
]

const router = createRouter({
    history: createWebHistory(), //Gestisce gli URL moderni senza #
    routes
})

export default router

        
