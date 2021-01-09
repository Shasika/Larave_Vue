import Vue from 'vue';
import VueRouter from 'vue-router';
import CustomerList from "./components/CustomerList";
import SignIn from "./components/sign/SignIn";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import store from './store/index'

Vue.use(VueRouter);

export default new VueRouter({
    routes :[
        {
            name: 'home',
            path:'/' ,
            component : Home
        },
        {
            name: 'customer',
            path:'/customer' ,
            component : CustomerList
        },
        {
            name: 'signin',
            path:'/signin' ,
            component : SignIn
        },
        {
            name: 'dashboard',
            path:'/dashboard' ,
            component : Dashboard,
            beforeEnter: (to, from, next) =>{
                if(!store.getters['auth/authenticated']){
                    return next({
                        name: 'signin'
                    })
                }
                next()
            }
        },

    ],

    mode:'history'
});
