const CodeSearch = resolve => {
  import('@/views/code/codeSearch').then(module => {
    resolve(module)
  })
}

const PrograssEdit = resolve => {
  import('@/views/prograssedit/prograssEdit').then(module => {
    resolve(module)
  })
}

const routes = [
  {
    path: '/',
    name: 'codesearch',
    component: CodeSearch
  }, {
    path: '/codesearch',
    name: 'codesearch',
    component: CodeSearch
  }, {
    path: '/prograssEdit',
    name: 'prograssEdit',
    component: PrograssEdit
  },
  {
    path: '*',
    redirect: '/computer'
  }
]

export default routes
