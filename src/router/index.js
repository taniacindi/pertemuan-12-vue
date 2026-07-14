import { createRouter, createWebHistory } from 'vue-router'

import UserList from '../views/UserList.vue'
import UserDetail from '../views/UserDetail.vue'
import CreateUser from '../views/CreateUser.vue'

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/detail/:id',
    name: 'UserDetail',
    component: UserDetail
  },
  {
    path: '/create',
    name: 'CreateUser',
    component: CreateUser
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router