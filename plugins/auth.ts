import { createAuth0, authGuard } from '@auth0/auth0-vue';

export default defineNuxtPlugin((nuxtApp) => {
  const { domain, clientId, audience, redirectUri: redirect_uri } = useAppConfig().auth;

  // https://auth0.github.io/auth0-vue/index.html
  // https://auth0.github.io/auth0-spa-js/interfaces/Auth0ClientOptions.html
  const auth0 = createAuth0({
    domain, // https://auth0.github.io/auth0-spa-js/interfaces/Auth0ClientOptions.html#domain
    clientId, // https://auth0.github.io/auth0-spa-js/interfaces/Auth0ClientOptions.html#clientId
    authorizationParams: { // https://auth0.github.io/auth0-spa-js/interfaces/AuthorizationParams.html
      audience, // https://auth0.github.io/auth0-spa-js/interfaces/AuthorizationParams.html#audience
      redirect_uri, // https://auth0.github.io/auth0-spa-js/interfaces/AuthorizationParams.html#redirect_uri
    },
    cacheLocation: 'localstorage', // https://auth0.github.io/auth0-spa-js/interfaces/Auth0ClientOptions.html#cacheLocation
    useRefreshTokens: true, // https://auth0.github.io/auth0-spa-js/interfaces/Auth0ClientOptions.html#useRefreshTokens
  });

  // Adding @auth0/auth0-vue as a Nuxt3 plugin
  // Only instantiate on client
  if (process.client) {
    nuxtApp.vueApp.use(auth0);
  }

  // Generally protected routes that require authentication
  addRouteMiddleware('auth', authGuard);

  // `authGuard` is basically these under the hood
  // addRouteMiddleware('auth', () => {
  //   if (process.client) {
  //     auth0?.checkSession();
  //     if (!auth0?.isAuthenticated.value) {
  //       auth0?.loginWithRedirect({
  //         appState: {
  //           // Target path the app gets routed to after handling the callback from Auth0 (defaults to '/')
  //           target: useRoute().path,
  //         },
  //       });
  //     }
  //   }
  // });
});
