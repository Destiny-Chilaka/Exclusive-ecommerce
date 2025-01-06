import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
      meta:{hideNavbarFooter:true, hideAnnouncementBar:true}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta:{hideNavbarFooter:true, hideAnnouncementBar:true}
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/wishlistView',
      name: 'wishlist',
      component: () => import('../views/wishlistView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/cartView',
      name: 'cart',
      component: () => import('../views/cartView.vue')
    },
    {
      path: '/ProductDetailView/:id',
      name: 'ProductDetail',
      component: () => import('../views/ProductDetailView.vue')
    },
    {
      path: '/CheckoutView',
      name: 'Checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/category/:categoryId',
      name: 'category',
      component: () => import('@/components/category/CategoryPage.vue')
    }
  ]
})

export default router
