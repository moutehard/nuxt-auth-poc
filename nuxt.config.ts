// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth'],
  telemetry: false,
  runtimeConfig: {
    auth: {
      clientId: 'eUMIhcLZ41v61195MiWHaVlOSAV1uFWx',
      clientSecret:
        'qNfhjBvM0-OL_yBecMvmwOYtdzl_EYhtIj1SWOPLoXia8IvPleI4Z42V2HUlYXio',
      issuer: 'https://dev-f3654w7ymy2subov.us.auth0.com',
      origin: 'https://app-stg.kick.com',
      secret:
        '3794c8cef9bda827cd89b8a0b20dd4568830bb36b6a5bb0e4a700b1eff55d006',
    },
  },
})
