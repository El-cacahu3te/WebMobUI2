<script setup>
import Home from './pages/Home.vue'
import Temperature from './pages/Temperature.vue'
import Messures from './pages/Messures.vue'
import Schedule from './components/Schedule.vue/index.js'
import { useHashRoute } from './composables/useHashRoute.js' 
import { useJsonStorage } from './composables/useJsonStorage.js' 

const routes = [
  {hash : '#home', component : Home},
  {hash : '#temperature', component : Temperature},
  {hash : '#messures', component : Messures},
  {hash : '#schedule', component : Schedule}
];
const {currentComponent,
      currentRoute,
      navigateTo} = useHashRoute(routes);
      //objet cassé en 3 variables pour pouvoir les utiliser dans le template
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#temperature">Temperature</a></li>
        <li><a href="#messures">Messures</a></li>
        <li><a href="#schedule">Schedule</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <!-- <Home v-if="curentPage === 'home'"/>
   // affiche la page que si la conditione est vraie,ici le code est redondant
    <Temperature v-if="curentPage === 'temperature'"/> -->
    <component :is="currentComponent"/>
  </main>
</template>
