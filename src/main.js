import { createApp } from 'vue'
import App from './App.vue'

import {Home, Search, Library, ChevronLeft, ChevronRight, Play} from 'lucide-vue-next'

const app = createApp(App);

app.component('HomeIcon', Home);
app.component('SearchIcon', Search);
app.component('LibraryIcon', Library);
app.component('ChevronLeftIcon', ChevronLeft);
app.component('ChevronRightIcon', ChevronRight);
app.component('PlayIcon', Play);

app.mount('#app');
