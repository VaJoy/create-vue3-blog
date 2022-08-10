import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@pages/index/components/Home.vue'
import Post from '@pages/post/components/Post.vue'

const routes = [
    { path: '/', component: Home },
    {
        path: '/post/:page(\\d*)',
        component: Post,
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.afterEach((to, from) => {
    window.scrollTo(0, 0);
})