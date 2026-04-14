import { createApp } from 'vue';
import { Quasar } from 'quasar';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.css';

import App from './AppSchedule.vue';

const myApp = createApp(App);

myApp.use(Quasar, {
   config: {
      brand: {
         // Définissez ici vos couleurs de thème personnalisées
      }
   },
   plugins: {},
});

myApp.mount('#app');
