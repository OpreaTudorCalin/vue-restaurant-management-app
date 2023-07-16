import { createApp } from 'vue'
import App from './App.vue'
import router from './routers.js'

let app = createApp(App);
app.use(router);
app.mount('#app')
