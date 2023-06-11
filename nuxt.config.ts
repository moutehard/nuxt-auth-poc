// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  telemetry: false,
  routeRules: {
    '/': { ssr: true },
    '/protected': { ssr: false },
  },
  appConfig: {
    auth: {
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      audience: process.env.AUTH0_AUDIENCE,
      redirectUri: process.env.AUTH0_REDIRECT_URI,
    },
  },
  // runtimeConfig: {
  //   auth: {
  //     clientId: 'eUMIhcLZ41v61195MiWHaVlOSAV1uFWx',
  //     clientSecret: 'qNfhjBvM0-OL_yBecMvmwOYtdzl_EYhtIj1SWOPLoXia8IvPleI4Z42V2HUlYXio',
  //     issuer: 'https://dev-f3654w7ymy2subov.us.auth0.com',
  //     origin: 'https://app-stg.kick.com',
  //     secret: '3794c8cef9bda827cd89b8a0b20dd4568830bb36b6a5bb0e4a700b1eff55d006',
  //   },
  // },
});
