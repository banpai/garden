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

const AddCode = resolve => {
  import('@/views/code/addCode').then(module => {
    resolve(module)
  })
}

const routes = [
  {
    path: '/codeSearch',
    name: 'codeSearch',
    component: CodeSearch
  }, {
    path: '/addCode',
    name: 'addCode',
    component: AddCode
  }, {
    path: '/prograssEdit',
    name: 'prograssEdit',
    component: PrograssEdit
  },
  {
    path: '*',
    redirect: '/codeSearch'
  }
]

export default routes
