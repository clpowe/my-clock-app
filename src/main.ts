import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'uno.css'
import '@unocss/reset/tailwind.css'

import App from './App.vue'

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
