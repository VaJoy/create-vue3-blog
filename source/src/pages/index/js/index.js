import { createApp } from 'vue'
import Index from '../components/Index.vue'
import { router } from '@src/js/router'

const app = createApp(Index)
app.use(router);
app.mount('#wrap');