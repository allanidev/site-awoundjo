import { createRouter, createWebHistory } from 'vue-router'
import HomeSection from '../views/HomeSection'
import Souscript from '../views/Souscript'
import OffresSection from '../views/Offre'
import DevisSection from '../views/Devis.vue'
import FormPartenaireSection from '../views/FormPartenaire'
import SouscriptSection from '../views/Souscript.vue';


const routes = [
  {
    path: '/',
    name: 'acceuil',
    component: HomeSection
  },
  {
    path: '/nos-offres',
    name: 'nosOffres',
    component: OffresSection
  },
  {
    path: '/qui-peut-souscrire',
    name: 'qui-peut-souscrire',
    component: SouscriptSection
  },
  {
    path: '/simuler-un-devis',
    name: 'simulerUnDevis',
    component: DevisSection
  },
  {
    path: '/devenir-partenaire',
    name: 'devenirPartenaire',
    component: FormPartenaireSection
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
