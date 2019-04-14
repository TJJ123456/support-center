import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import FAQ from './components/FAQ.vue';
import Login from './components/login.vue';
import TicketsLayout from './components/TicketsLayout.vue';
import state from './main/state'
Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/faq', name: 'faq', component: FAQ },
    { path: '/login', name: 'login', component: Login },
    { path: '/tickets', name: 'tickets', component: TicketsLayout, meta: { private: true } }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    console.log('to', to.name);
    console.log(state.user);
    if (to.meta.private && !state.user) {
        next({ name: 'login' });
        return;
    }
    console.log('???')
})

export default router;