<script setup>
defineProps({
  label : String
})
const value = defineModel(0); //variable réactive pour stocker la valeur de l'input

</script>

<template>
   <div>
 <section >
      <h1>Changement de valeurs</h1>
  </section>
  <section ">
    
      <h2>{{ label }}</h2>
      <input v-model="value" type="number" placeholder="Entrez un nombre" />
      <!-- v-model lié à une variable -->
      </section> 
   </div>
</template>

<style scoped>
  
</style>