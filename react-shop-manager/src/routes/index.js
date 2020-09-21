import Login from '@/pages/Login'
import List from '@/pages/admin/products/List'
import Edit from '@/pages/admin/products/Edit'
import Index from '@/pages/admin/dashboard/Index'
import PageNotFound from '@/pages/PageNotFound'
import Notice from '@/pages/admin/notices/Index'

export const mainRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: PageNotFound
  }
]

export const adminRoutes = [
  {
    path: '/admin/dashboard',
    component: Index,
    isShow: true,
    title: '看板',
    icon: 'area-chart'
  },
  {
    path: '/admin/products',
    component: List,
    isShow: true,
    exact: true,
    title: '商品管理',
    icon: 'shop'
  },
  {
    path: '/admin/products/edit/:id?',
    isShow: false,
    component: Edit
  },
  {
    path: '/admin/notice',
    isShow: false,
    component: Notice
  }
]
