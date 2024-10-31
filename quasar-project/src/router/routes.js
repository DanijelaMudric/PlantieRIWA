const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/popisKnjiga', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: '/onama', component: () => import('pages/o_nama.vue') },
      { path: '/lokacija', component: () => import('pages/lokacija.vue') },
      { path: '/login', component: () => import('pages/login.vue') },
      { path: '/registracija', component: () => import('pages/registracija.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
