import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/src/views/Home/Home.vue'
import Tarefeha from '@/src/views/Tarefeha/Tarefeha.vue';
import NotFound from '@/src/views/NotFound/NotFound.vue';
import { ROUTES } from '@/src/config/path.route'
const routes = [
    { path: `/`, name: `${ROUTES.HOME.name}`, component: Home },
    { path: `/${ROUTES.TAREFEHA.path}`, name: `${ROUTES.TAREFEHA.name}`, component: Tarefeha },
    { path: `/${ROUTES.HOME.path}`, redirect: { name: `${ROUTES.HOME.name}` } },
    { path: '/:pathMatch(.*)*', name: 'صفحه مورد نظر یافت نشد', component: NotFound }

]
const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
    linkExactActiveClass: "text-cyan-600 font-IranYecan-bold"
})
router.beforeEach((to, from) => {
    document.title = to.name;
})
export default router