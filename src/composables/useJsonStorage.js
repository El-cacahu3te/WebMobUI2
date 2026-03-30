import { watch } from "vue";

export function useJsonStorage(key,val) {
   const valRef = ref(val);

   watch(valRef, () => {
      const jsonVal = JSON.stringify(valRef.value);
      //appelé dés que valRef change
      localStorage.setItem(key, jsonVal);
      //stocké dans le localStorage du navigateur
   })
   return {val: valRef}; 
   //val = valeur, valREf = valeur réactive 
   //crée un objet avec la propriété val qui est une référence à la valeur réactive valRef
}