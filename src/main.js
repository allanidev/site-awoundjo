import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import  Vuelidate from '../node_modules/@vuelidate' */






createApp(App).use(store).use(router).mount('#app')
