import { ref } from "vue"

export function useFetchJson(url) {
   const data = ref(null);
   const error = ref(false); //par défaut pas d'erreur
   const loading = ref(true);
   fetch(url).then(async (resp) => { 
      const dataDecoded = await resp.json();
      data.value = dataDecoded;
      loading.value = false;})
   return{data, error, loading}
}