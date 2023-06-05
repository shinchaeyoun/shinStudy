const methods = {
  isTest: () => {
    console.log('hi it is test')
  }
}

export default {
  install (Vue) {
    Vue.prototype.$isTest = methods.isTest
  }
}
