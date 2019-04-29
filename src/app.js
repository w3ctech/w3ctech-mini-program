import Vue from 'vue'
import App from './App.vue'

import store from './vuex/index'

Vue.prototype.$$store = store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
