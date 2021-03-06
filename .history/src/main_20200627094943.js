import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';

// 全局注册
Vue.use(Dialog);

Vue.use(Vant);





Vue.prototype.$api = api

this.prototype.$checkLogin =  (fn)=>{

  if(localStorage.getItem('users'))

}





Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')