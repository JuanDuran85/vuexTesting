import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrashAlt, faCheck, faTimes, faPen} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add({faTrashAlt, faCheck, faTimes, faPen});

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
