import './assets/sass/normalize.scss'
import './assets/sass/reset.scss'
import './assets/sass/style.sass'
import './assets/sass/desktopStyle.sass'
import './assets/sass/verticalTablet.sass'
import './assets/sass/horizontalPhone.sass'
import './assets/sass/verticalPhone.sass'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
