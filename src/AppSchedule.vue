<script setup>
   import Schedule from './components/Schedule.vue'
   import TheHeader from './components/TheHeader.vue' 
</script>

<template>
   <q-layout view="hHh lpR fFf">
    <TheHeader />
    <Schedule />
    <q-footer  reveal  class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title  class="text-body2">
          <div class="text-center">
          <q-icon name="copyright" />2026 -By Elia Nicolo
        </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
  
  
</template>

<style scoped>
  
</style>