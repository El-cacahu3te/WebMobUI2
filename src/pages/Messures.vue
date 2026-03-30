<script setup> 
import {computed, ref } from 'vue'; 

const temp = ref(0); 
const pouce = computed ({ 
  get : () => parseFloat((temp.value).toFixed(2)), 
  set : (val) => temp.value = parseFloat(val), 
});
const cm = computed ({ 
  get : () => parseFloat((temp.value * 2.54).toFixed(2)), 
  set : (val) => temp.value = parseFloat(val) / 2.54, 
});
const feet = computed ({ 
  get : () => parseFloat((temp.value * 0.0833333).toFixed(2)), 
  set : (val) => temp.value = parseFloat(val) / 0.0833333, 
});
const m = computed ({ 
  get : () => parseFloat((temp.value * 0.0254).toFixed(2)), 
  set : (val) => temp.value = parseFloat(val) / 0.0254, 
});
const km = computed ({ 
  get : () => parseFloat((temp.value * 0.0000254).toFixed(2)), 
  set : (val) => temp.value = parseFloat(val) / 0.0000254, 
});
const mile = computed ({ 
  get : () => parseFloat((temp.value * 0.0000157828).toFixed(2)), 
  set : (val) => temp.value = parseFloat(val) / 0.0000157828,
}); 

</script>

<template>
   <section id="header">
      <h1>Changement de valeurs</h1>
   </section>
   <section id="pouce">
      <h2>Pouce/Inch</h2>
      <input v-model="pouce" type="number" placeholder="Entrez un nombre" />
      <!-- v-model lié à une variable -->
   </section>
   <section id="cm">
      <h2>Centimètre</h2>
      <input v-model="cm" type="number" placeholder="Entrez un nombre" />
      <!-- v-model lié à une variable -->
   </section>
   <section id="feet">
      <h2>Feet</h2>
      <input v-model="feet" type="number" placeholder="Entrez un nombre" />
      <!-- v-model lié à une variable -->
   </section>
   <section id="m">
      <h2>Mètre</h2>
      <input v-model="m" type="number" placeholder="Entrez un nombre" />
      </section>
   <section id="km">
      <h2>Kilomètre</h2>
      <input v-model="km" type="number" placeholder="Entrez un nombre" />
      <!-- v-model lié à une variable -->
   </section>
   <section id="mile">
      <h2>Mile</h2>
      <input v-model="mile" type="number" placeholder="Entrez un nombre" />
      <!-- v-model lié à une variable -->
   </section>
</template>
<style scoped>

</style>