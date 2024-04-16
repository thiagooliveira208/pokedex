import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './routes'

import './assets/main.scss'
import './index.css'

import "./plugins/fontawesome";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)

app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
