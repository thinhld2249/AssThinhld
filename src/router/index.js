import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import PostDetail from '@/components/PostDetail.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import EditProfile from '@/components/EditProfile.vue'
import AddPost from '@/components/AddPost.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/post/:id',
      name: 'postDetail',
      component: PostDetail,
    },
    {
      path: '/editProfile',
      name: 'editProfile',
      component: EditProfile,
    },
    {
      path: '/addPost',
      name: 'addPost',
      component: AddPost,
    },
  ],
})

export default router
