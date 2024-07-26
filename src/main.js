import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'

const sizeDirective = {
    beforeMount(el) {
          el.style.fontSize= '500px'
    }
}

const app = createApp(App).use(store).use(router);

app.directive('size',sizeDirective)

app.mount('#app');
