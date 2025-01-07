import Aura from '@primevue/themes/aura';
import { InputText, Message } from 'primevue';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.component('InputText', InputText);
app.component('Message', Message);
app.component('Button', Button);

app.mount('#app');
