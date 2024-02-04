import Button from './src/index.vue'

Button.install = function (Vue) {
  console.debug('button')
  Vue.component(Button.name, Button)
}

export default Button
