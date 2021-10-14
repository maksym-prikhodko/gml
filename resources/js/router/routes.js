function page (path) {
  return () => import( `~/pages/${path}`).then(m => m.default || m)
}
export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') },
  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },
  { path: '/projects', name: 'projects', component: page('projects/ProjectList.vue') },
  { path: '/project/add', name: 'project.add', component: page('projects/ProjectForm.vue') },
  { path: '/project/:id', name: 'project.home', component: page('projects/ProjectHome.vue') },
  { path: '/project/tasks/:id', name: 'project.tasks', component: page('projects/ProjectTasks.vue') },
  { path: '/clients', name: 'clients', component: page('clients/ClientsList.vue') },
  { path: '/client/add', name: 'client.add', component: page('clients/ClientForm.vue') },
  { path: '/client/:id', name: 'client.home', component: page('clients/ClientHome.vue') },
  { path: '/home', name: 'home', component: page('home.vue') },
  { path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ] },
  { path: '*', component: page('errors/404.vue') }
]
