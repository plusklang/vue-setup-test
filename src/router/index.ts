import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Profile from "@/views/Profile.vue";
import Edit from "@/views/Edit.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/edit',
        name: 'Edit',
        component: Edit
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
