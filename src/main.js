import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
}).$mount('#app')