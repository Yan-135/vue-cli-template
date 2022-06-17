import Vue from 'vue'
import Router from 'vue-router'
import { getCurUser } from '@/utils/local'; //本地存储进行封装，便于修改

// Home view 中增加了Home.vue文件
import Home from '@/views/Home.vue'
// about view 中增加了.vue文件
import About from '@/views/About.vue'
// Login view 中增加了 .vue文件
import Login from '@/views/Login.vue'
// ErrorPage view 中增加了 .vue文件
// import ErrorPage from '@/views/components/common/ErrorPage.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requireAuth: true
            },
            //路由嵌套
            // children: [{
            //     path: '/index/menu1',
            //     component: () =>
            //         import ('../views/About.vue')
            // }, ]
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/',
            name: 'login',
            component: Login,
            props: true
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        console.log(localStorage.getItem('userData'));
        if (localStorage.getItem('userData')) {
            next()
        } else {
            next({ path: '/' })
        }
    } else {
        next()
    }

});

export default router