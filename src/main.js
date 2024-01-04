import { createApp } from 'vue'
import App from './App.vue'

import {Home, Search, Library, ChevronLeft, ChevronRight, Play, SkipBack, SkipForward, Repeat, Shuffle,ListMusic, VolumeX, Maximize2 } from 'lucide-vue-next'

const app = createApp(App);

app.component('HomeIcon', Home);
app.component('SearchIcon', Search);
app.component('LibraryIcon', Library);
app.component('ChevronLeftIcon', ChevronLeft);
app.component('ChevronRightIcon', ChevronRight);
app.component('PlayIcon', Play);
app.component('SkipBackIcon', SkipBack);
app.component('SkipForwardIcon', SkipForward);
app.component('RepeatIcon', Repeat);
app.component('ShuffleIcon', Shuffle);
app.component('ListMusicIcon', ListMusic);
app.component('VolumeXIcon', VolumeX);
app.component('Maximize2Icon', Maximize2)

app.mount('#app');
