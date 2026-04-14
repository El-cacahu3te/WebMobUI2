<script setup>
import { useFetchJson } from '../composables/useFetchJson';
import { computed } from 'vue';
    const {data: schedule, error, loading} = useFetchJson('https://chabloz.eu/filles/horaires/all'); //hard codé URL pour l'instant
//    const filter = defineModel(); //variable réactive pour stocker la valeur du filtre dans inpute et la variable
//    const scheduleFiltered = computed(() => {
//     return schedule.filter((c) => c.label.search(filter.value)!== -1);
//     }
//    const scheduleSorted = computed(() => {
//     const sorted = schedule.value.toSorted((c1, c2) => c1.start.localeCompare(c2.start));
//       return sorted;
//     });
</script>

<template>
   <!-- <div v-if="loading">Chargement en cours
     
   </div>
   <div v-if="data">Horaires des cours 2026
      <label> Filter: </label>
      <input type="text" v-model="filter" placeholder="Filter by label">
     <div v-for="cours of schedule"> //récuprération de la data dans une variable pour pouvoir l'utiliser dans le template
      {{ cours.label }} {{ cours.start }} - {{ cours.end }}
     </div> 
   </div>
   <div v-if="error">Une erreur c'est produite</div>
   -->
</template>

<style scoped>
  
</style>