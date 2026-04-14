import { createApp } from 'vue';
import { Quasar } from 'quasar';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.css';

import App from './AppSchedule.vue';

const myApp = createApp(App);

myApp.use(Quasar, {
   config: {
      brand: {
         primary: '#005c2e',
         secondary: '#00ff80',
         accent: '#ff3333',

         dark: '#191919',
         'dark-page': '#000000',

         positive: '#21BA45',
         negative: '#C10015',
         info: '#31CCEC',
         warning: '#F2C037'
      }
   },
   plugins: {},
});

myApp.mount('#app');
