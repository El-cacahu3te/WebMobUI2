<script setup>
import { computed, ref } from 'vue';
// export function value(number) {
//    const temp = ref(0);
//    const kelvin = computed({
//      get :  () => parseFloat((temp.value).toFixed(2)),
//      set : (val) => temp.value=  parseFloat(val), 
//    });

// }
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
</template>

<style scoped>
  
</style>