import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/reset.scss'
import './assets/scss/common.scss'
import './assets/scss/_index.scss'

createApp(App).use(store).use(router).mount('#app')

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
