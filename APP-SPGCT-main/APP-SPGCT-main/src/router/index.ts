import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { verifyTokenType } from '../stores/backend/access_tokens'; // Importar la función que verifica el tipo de token
import routes from './routes';

/*
 * Si no se está construyendo en modo SSR, puedes
 * exportar directamente la instancia del Router;
 *
 * La función a continuación también puede ser asíncrona; usa
 * async/await o devuelve una Promesa que resuelva
 * con la instancia del Router.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // Guardia global de navegación
  Router.beforeEach((to, from, next) => {
    const tokenType = verifyTokenType(); // Obtener tipo de token

    // Verificar si la ruta requiere autenticación
    const requiresAuth = to.meta.requiresAuth;

    if (requiresAuth) {
      if (tokenType === 'local') {
        // Si es autenticación local, bloquear ciertas rutas
        if (
          to.name === 'productores' ||
          to.name === 'dashboard' ||
          to.name === 'recuperar-contrasena'
        ) {
          console.warn(
            'Acceso denegado: no tienes permiso para acceder a esta ruta.'
          );
          next('/Login'); // Redirigir al Login si la ruta está bloqueada para el tipo local
        } else {
          next(); // Permitir acceso a las demás rutas
        }
      } else if (tokenType === 'api') {
        // Si es autenticación por API, desbloquear todas las rutas
        next();
      } else {
        // Si no hay un token válido, redirigir al Login
        next('/Login');
      }
    } else {
      // Si la ruta no requiere autenticación, continuar
      next();
    }
  });

  return Router;
});
