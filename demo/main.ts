import { createApp } from 'vue';
import ChunqingUi from '@chunqing-ui/components';
import App from './app.vue';

const app = createApp(App);

app.use(ChunqingUi);

app.mount('#app');
