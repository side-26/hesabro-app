import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home/Home.vue'
import Pricing from '@/views/Pricing/Pricing.vue';
import NotFound from '@/views/NotFound/NotFound.vue';
import { ROUTES } from '@/config/path.route'
const routes = [
  { path: `/`, name: `${ROUTES.HOME.name}`, component: Home },
  { path: `/${ROUTES.TAREFEHA.path}`, name: `${ROUTES.TAREFEHA.name}`, component: Pricing },
  { path: `/${ROUTES.HOME.path}`, redirect: { name: `${ROUTES.HOME.name}` } },
  { path: '/:pathMatch(.*)*', name: 'صفحه مورد نظر یافت نشد', component: NotFound }

]
const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 0
      }
    }

  },
  // linkExactActiveClass: "text-cyan-600 font-IranYecan-bold",
  // linkActiveClass: 'text-cyan-600 font-IranYecan-bold'
})
router.beforeEach((to, from) => {
  document.title = to.name;
})
export default router