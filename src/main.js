import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(elementPlus)
app.mount('#app')