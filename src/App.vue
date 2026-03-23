<script setup>
import Home from './pages/Home.vue'
import Temperature from './pages/Temperature.vue'

import { useHashRoute } from './composables/useHashRoute.js'  



const {curentPage} = useHashRoute();
console.log(curentPage.value);
const router = [
  {name : 'home', component : Home},
  {name : 'temperature', component : Temperature}
]
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#temperature">Temperature</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <Home v-if="curentPage === 'home'"/>
   <!-- affiche la page que si la conditione est vraie -->
    <Temperature v-if="curentPage === 'temperature'"/>
  </main>
</template>
