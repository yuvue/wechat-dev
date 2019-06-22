export default [
  {
    path: '/chat/:id',
    component: () => import('v/chat/_id/Index'),
    name: 'chatId',
  },
  {
    path: '/contact',
    component: () => import('v/contact/Index'),
    name: 'contact',
  },
  {
    path: '/contact/add',
    component: () => import('v/contact/Add'),
    name: 'contactAdd',
  },
  {
    path: '/contact/friend',
    component: () => import('v/contact/Friend'),
    name: 'contactFriend',
  },
  {
    path: '/contact/search',
    component: () => import('v/contact/search/Index'),
    name: 'contactSearch',
  },
  {
    path: '/contact/search/verify',
    component: () => import('v/contact/search/Verify'),
    name: 'contactSearchVerify',
  },
  {
    path: '/contact/:id/config',
    component: () => import('v/contact/_id/Config'),
    name: 'contactIdConfig',
  },
  {
    path: '/contact/:id',
    component: () => import('v/contact/_id/Index'),
    name: 'contactId',
  },
  {
    path: '/contact/:id/remark',
    component: () => import('v/contact/_id/Remark'),
    name: 'contactIdRemark',
  },
  {
    path: '/',
    component: () => import('v/Index'),
    name: 'index',
  },
  {
    path: '/login',
    component: () => import('v/Login'),
    name: 'login',
  },
  {
    path: '/me/edit',
    component: () => import('v/me/Edit'),
    name: 'meEdit',
  },
  {
    path: '/me',
    component: () => import('v/me/Index'),
    name: 'me',
  },
  {
    path: '/moment',
    component: () => import('v/moment/Index'),
    name: 'moment',
  },
  {
    path: '/moment/add',
    component: () => import('v/moment/Add'),
    name: 'momentAdd',
  },
  {
    path: '/moment/friend',
    component: () => import('v/moment/Friend'),
    name: 'momentFriend',
  },
  {
    path: '/moment/collect',
    component: () => import('v/moment/Collect'),
    name: 'momentCollect',
  },
  {
    path: '/register',
    component: () => import('v/Register'),
    name: 'register',
  },
  {
    path: '/group',
    component: () => import('v/group/Index'),
    name: 'group',
  },
  {
    path: '/group/add',
    component: () => import('v/group/Add'),
    name: 'groupAdd',
  },
  {
    path: '/error',
    component: () => import('v/Error'),
    name: 'error',
    alias: '*',
  },
  {
    path: '/detail',
    component: () => import('v/detail/_id'),
    name: 'detail',
  },
]
