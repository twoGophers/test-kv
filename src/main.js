import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import InputMask from 'vue-input-mask';

Vue.component('input-mask', InputMask)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
