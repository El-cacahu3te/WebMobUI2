<script setup>

</script>

<template>
  <div class="q-pa-md"></div>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://horaires.chabloz.eu/logo.png">
          </q-avatar>
          Horaires COMEM 
          
          
         
        </q-toolbar-title>
        <q-btn  float-left flat color="secondary" icon="bedtime" @click="$q.dark.toggle()" />
      </q-toolbar>
    </q-header>

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