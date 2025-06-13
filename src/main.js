import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './style.css'
import { createI18n } from 'vue-i18n';
import { messages } from './locales';

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
});


const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
