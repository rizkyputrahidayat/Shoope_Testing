import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)

// import './assets/css/bootstrap.min.css'
createApp(App).use(router).mount('#app')
