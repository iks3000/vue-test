
import Vue from 'vue'
import App from './App'
import 'reset-css';
import './assets/style/app.scss'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});