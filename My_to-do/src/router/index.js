import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sign_up from '@/components/Sign_up.vue'
import to_do from '../components/to_do.vue'
import Sign_in from '@/components/Sign_in.vue'
import todo_list from '../components/todo_list.vue'
import show_todo from '@/components/show_todo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: Sign_up
    },
    {
      path: '/login',
      name: 'login',
      component: Sign_in
    },
    {
      path: '/',
      name: 'todo',
      component: to_do
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo_list
    },
    {
      path: '/showtodo',
      name: 'showtodo',
      component: show_todo
    },

  ]
})

export default router
