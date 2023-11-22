import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import ExchangeView from '../views/ExchangeView.vue'
import MapView4 from '../views/MapView4.vue'
import FinancialProductView from '../views/FinancialProductView.vue'
import DetailView from '@/views/DetailView.vue'
import CreateView from '@/views/CreateView.vue'
import SignUpView from '@/views/SignUpView.vue'
import LogInView from '@/views/LogInView.vue'
import ProfileView from '@/views/ProfileView.vue'
import DetailEditView from '@/views/DetailEditView.vue'
import ProfileEditView from '@/views/ProfileEditView.vue'
import PasswordEditView from '@/views/PasswordEditView.vue'
import MapView from '@/views/MapView.vue'
import AddCommentView from '@/views/AddCommentView.vue'
import DepositList from '@/components/DepositList.vue'
import SavingList from '@/components/SavingList.vue'
import { useCounterStore } from '../stores/counter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/article',
      name: 'article',
      component: ArticleView
    },
    {
      path: '/articles/:id',
      name: 'DetailView',
      component: DetailView
    },
    {
      path: '/create',
      name: 'CreateView',
      component: CreateView
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: ExchangeView
    },
    {
      path: '/bankmap',
      name: 'bankmap',
      component: MapView4
    },



    {
      path: '/bankmap2',
      name: 'bankmap2',
      component: MapView
    },



    {
      path: '/financialproducts',
      name: 'financialproducts',
      component: FinancialProductView
    },
    {
      path: '/financialproducts/depositlist',
      name: 'depositlist',
      component: DepositList
    },
    {
      path: '/financialproducts/savinglist',
      name: 'savinglist',
      component: SavingList
    },
    {
      path: '/signup',
      name: 'SignUpView',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'LogInView',
      component: LogInView
    },
    {
      path: '/profile',
      name: 'ProfileView',
      component: ProfileView
    },
    {
      path: '/profile/edit',
      name: 'ProfileEditView',
      component: ProfileEditView
    },
    {
      path: '/profile/password',
      name: 'PasswordEditView',
      component: PasswordEditView
    },
    {
      path: '/detail/:id',
      name: 'DetailEditView',
      component: DetailEditView
    },
    {
      path: '/detail/:id/comment',
      name: 'AddCommentView',
      component: AddCommentView
    },
    
  ]
})

router.beforeEach((to, from) => {
  const store = useCounterStore()
  if ((to.name === 'CreateView' || to.name === 'ProfileView') && !store.isLogin) {
    window.alert('로그인이 필요합니다.')
    return {name: 'LogInView'}
  } 
  if ((to.name === 'SignUpView' || to.name === 'LogInView') && (store.isLogin)){
    window.alert('이미 로그인이 되어있습니다.')
    return { name: 'ArticleView'}
  }
})

export default router
