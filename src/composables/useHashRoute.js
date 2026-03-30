import { computed, onBeforeUnmount, onMounted, shallowRef } from 'vue';

function normalizeHash(hash) {
   return hash.startsWith('#') ? hash : `#${hash}`;
}
// route doit avoir une propriété hash et component

export function useHashRoute(routes) {
   const defaultRoute = routes[0];
   const currentRoute = shallowRef(defaultRoute);
   

   function getRouteByHash(hash) {
      const normalizedHash = normalizeHash(hash || defaultRoute.hash);
      return routes.find((route) => route.hash === normalizedHash) || defaultRoute;
   } //on cherche la route correspondant au hash, si aucune route ne correspond on retourne la route par défaut
   

   function syncRouteFromUrl() {
      currentRoute.value = getRouteByHash(window.location.hash);
   }

   function navigateTo(hash, replace = false) {
      const route = getRouteByHash(hash);
      const url = `${window.location.pathname}${window.location.search}${route.hash}`;

      if (replace === true) {
         window.history.replaceState(null, '', url);
         syncRouteFromUrl();
         return;
      }

      window.history.pushState(null, '', url);
      //rajouter à l'historique du navigateur
      syncRouteFromUrl();
   }

   onMounted(() => {
      if (window.location.hash === '') {
         navigateTo(defaultRoute.hash, true);
      } else {
         syncRouteFromUrl();
      }

      window.addEventListener('hashchange', syncRouteFromUrl);
      window.addEventListener('popstate', syncRouteFromUrl);
      //écoute les changement de hash ou url après enter
   });

   onBeforeUnmount(() => {
      window.removeEventListener('hashchange', syncRouteFromUrl);
      window.removeEventListener('popstate', syncRouteFromUrl);
   });

   const currentComponent = computed(() => currentRoute.value.component);

   return {
      currentComponent,
      currentRoute,
      navigateTo,
   };
}