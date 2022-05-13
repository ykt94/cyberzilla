import { createRouter, createWebHistory } from "vue-router";

import UsersIndex from '../components/users/UsersIndex'
import UsersEdit from '../components/users/UsersEdit'
import UsersPayments from '../components/users/UsersPayments'

const routes = [
    {
        path: '/users',
        name: 'users.index',
        component: UsersIndex
    },
    {
        path: '/users/:id',
        name: 'users.edit',
        component: UsersEdit,
        props: true
    },
    {
        path: '/users/:id/payments',
        name: 'users.payments',
        component: UsersPayments,
        props: true
    },    
]

export default createRouter({
    history: createWebHistory(),
    routes
})
