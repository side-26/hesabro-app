import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.view/Home.view.vue'
import Tarefeha from '../views/Tarefeha.view/Tarefeha.view.vue';
import { PATHS } from '@/config/path.route'
const routes = [
    { path: `/`, name: `${PATHS.HOME}`, component: Home },
    { path: `/${PATHS.TAREFEHA}`, name: `${PATHS.TAREFEHA}`, component: Tarefeha }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router