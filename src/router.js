import PostsPage from "@/pages/posts/PostsPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import AboutPage from "@/pages/about/AboutPage.vue";

const routes = [
    {
        path: '/',
        component: PostsPage
    },
    {
        path: '/about',
        component: AboutPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router