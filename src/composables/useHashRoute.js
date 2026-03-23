import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

function normalizeHash(hash) {
   return hash.startsWith('#') ? hash : `#${hash}`;
}

export function useHashRoute(routes) {
   const defaultRoute = ref(routes[0]);
   const currentRoute = ref(defaultRoute);

   function getRouteByHash(hash) {
      const normalizedHash = normalizeHash(hash || defaultRoute.hash);
      return routes.find((route) => route.hash === normalizedHash) || defaultRoute;
   }

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