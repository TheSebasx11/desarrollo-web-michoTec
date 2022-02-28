import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "../css/output.css"
import store from './store/store'
import Vuex from 'vuex'

const options = {};

createApp(App).use(router).use(Vuex).use(VueSweetalert2).use(store).use(Toast, options).mount('#app');
