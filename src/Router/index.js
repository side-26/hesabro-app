import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/Home.vue'
import Tarefeha from '@/views/Tarefeha/Tarefeha.vue';
import { ROUTES } from '@/config/path.route'
const routes = [
    { path: `/`, name: `${ROUTES.HOME.name}`, component: Home },
    { path: `/${ROUTES.TAREFEHA.path}`, name: `${ROUTES.TAREFEHA.name}`, component: Tarefeha },
    { path: `/${ROUTES.HOME.path}`, redirect: { name: `${ROUTES.HOME.name}` } }


]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: "text-cyan-600 font-IranYecan-bold"
})
router.beforeEach((to, from) => {
    console.log(to, from)
    document.title = to.name;
})
export default router