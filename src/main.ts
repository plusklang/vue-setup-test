import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import AutocompleteDirective from "@/directives/AutocompleteDirective";

const app = createApp(App)

app
    .use(router)
    .use(createPinia())
    .directive('autocomplete', AutocompleteDirective)
    .mount('#app')

