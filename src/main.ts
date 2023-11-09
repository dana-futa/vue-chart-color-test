import './assets/main.css'
import 'primevue/resources/themes/lara-light-teal/theme.css' // theme
import '/node_modules/primeflex/primeflex.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import RadioButton from 'primevue/radiobutton';

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component("RadioButton", RadioButton)

app.mount('#app')
