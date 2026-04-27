<script setup>
 import { useFetchJson } from '../composables/useFetchJson';  
 const { data, error, loading } = useFetchJson('https://chabloz.eu/files/horaires/all');
</script>

<template>
 <table>
   <tr v-for="entry of data">
      <td>  {{  entry.class }}</td>
      <td>  {{  entry.label }}</td>
   </tr>
 </table>


</template>

<style scoped>
  
</style>