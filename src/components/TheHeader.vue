<script setup>
import { ref } from 'vue';
import { useJsonStorage } from '../composables/useJsonStorage';

const {val : theme} = useJsonStorage('theme', 'light');
function switchTheme(){
  theme.value = theme.value === 'light' ? 'dark' : 'light';
}


</script>

<template>  
   <header></header>
</template>