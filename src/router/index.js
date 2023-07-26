import { createRouter, createWebHistory } from 'vue-router'
import NocodePage from '../views/NocodePage.vue'
import ProductivityPage from '../views/ProductivityPage.vue'
import DeveloperToolsPage from '../views/DeveloperToolsPage.vue'
import EducationPage from '../views/EducationPage.vue'
import EntertainmentPage from '../views/EntertainmentPage.vue'

const routes = [
  {
    path: '/sponsors',
    name: 'sponsors',
    component: () => import('../views/SponsorsView.vue')
  },
  {
    path: '/explor',
    name: 'explor',
    component: () => import('../views/ExplorView.vue')
  },
  {
    path: '/submit',
    name: 'submit',
    component: () => import('../views/SubmitView.vue')
  },
  {
    path: '/bookmarks',
    name: 'bookmarks',
    component: () => import('../views/BookmarksView.vue')
  },
  {
    path: '/',
    name: 'tools',
    component: () => import('../views/ToolsView.vue'),
    children: [
      {
        path: 'nocode',
        component: NocodePage
      },
      {
        path: 'productivity',
        component: ProductivityPage
      },
      {
        path: 'developer-tools',
        component: DeveloperToolsPage
      },
      {
        path: 'education',
        component: EducationPage
      },
      {
        path: 'entertainment',
        component: EntertainmentPage
      }
    ]
  },
  {
    path: '/communities',
    name: 'communities',
    component: () => import('../views/CommunitiesView.vue')
  },
  {
    path: '/podcasts',
    name: 'podcasts',
    component: () => import('../views/PodcastsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior () {
    return {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  },
  routes
})

export default router
