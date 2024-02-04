import ProSqlTipTree from './src/index.vue'

/* istanbul ignore next */
ProSqlTipTree.install = function (Vue) {
  console.debug(111111)
  Vue.component(ProSqlTipTree.name, ProSqlTipTree)
}

export default ProSqlTipTree
