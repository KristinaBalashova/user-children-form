import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./style.css";
import { createI18n } from "vue-i18n";
import { messages } from "./locales";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  transition: "Vue-Toastification__fade",
  maxToasts: 5,
  newestOnTop: true,
};

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "en",
  messages,
});

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(Toast, options).mount("#app");
