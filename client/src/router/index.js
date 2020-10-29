
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)


const router = new Router({
    routes:[
        {
            path:'/',
            name:'index',
            component:Index
        },
        {
            path:'/login',
            name:'login',
            component:resolve => require(['@/views/Login.vue'],resolve)
        },
        {
            path:'/register',
            name:'register',
            component:resolve => require(['@/views/Register.vue'],resolve)
        }
    ]
})

router.beforeEach((to,from,next) =>{
    NProgress.start()
    next()
});
router.afterEach(()=>{
    NProgress.done()
})


export default router