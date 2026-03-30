<script setup>
import { computed, ref } from 'vue';

const temp = ref(0);
const kelvin = computed({
  get :  () => parseFloat((temp.value).toFixed(2)),
  set : (val) => temp.value=  parseFloat(val), 
  
}); 
const celcuis = computed({
  get :  () => parseFloat((temp.value -273.15).toFixed(2)),
  set : (val) => temp.value= parseFloat(val)+273.15, 
  
});  
const farenheit = computed({
  get :  () => parseFloat(((temp.value*(9/5))-459.67).toFixed(2)),
  //transforme en chiffre puis string puis chiffre pour arrondir à 2 chiffres après la virgule
  set : (val) =>temp.value = (5/9)*( parseFloat(val) + 459.67), 
  
});




</script>

<template>
  <section id="header">
      <h1>Changement de valeurs</h1>
  </section>
  <section id="kelvin">
    
      <h2>Kelvin</h2>
      <input v-model="kelvin" type="number" placeholder="Entrez un nombre" />
      <!-- v-model lié à une variable -->
      </section>
  <section id="celcius">
    <div id="docs">
      <h2>Celcius</h2>
      <input v-model="celcuis" type="number" placeholder="Entrez un nombre" />
      <!-- v-model lié à une variable -->
    </div>
  </section>
  <section id="fahrenheit">
    <div id="docs">
      <h2>Fahrenheit</h2>
      <input v-model="farenheit" type="number" placeholder="Entrez un nombre" />
      <!-- v-model lié à une variable -->
    </div>
  </section>
</template>

<style scoped>
</style>
