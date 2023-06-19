import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/_index.scss'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

createApp(App).use(store).use(router).use(Vuetify).mount('#app')
