import Auth0Provider from 'next-auth/providers/auth0';
import { NuxtAuthHandler } from '#auth';

export default NuxtAuthHandler({
  secret: useRuntimeConfig().auth.secret,

  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Auth0Provider.default({
      clientId: useRuntimeConfig().auth.clientId,
      clientSecret: useRuntimeConfig().auth.clientSecret,
      issuer: useRuntimeConfig().auth.issuer,
      origin: useRuntimeConfig().auth.origin,
    }),
  ],
});
