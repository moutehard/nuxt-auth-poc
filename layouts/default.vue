<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Kick &#10084;&#65039; Okta</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <!-- <li><NuxtLink to="/protected">Protected Route</NuxtLink></li> -->
          <!-- <li><NuxtLink to="/products">Merch</NuxtLink></li> -->
          <li>
            <NuxtLink v-if="!isAuthenticated" @click="login" class="btn"> Login </NuxtLink>
            <NuxtLink v-else @click="logOut" class="btn">Logout</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import { useAuth0 } from '@auth0/auth0-vue';

  // const auth0 = process.client ? useAuth0() : undefined;
  const auth0 = useAuth0();

  const isAuthenticated = computed(() => {
    return auth0?.isAuthenticated.value;
  });

  const login = () => {
    auth0?.checkSession();
    if (!auth0?.isAuthenticated.value) {
      auth0?.loginWithRedirect({
        appState: {
          target: useRoute().path,
        },
      });
    }
  };

  const logOut = () => {
    navigateTo('/');
    auth0.logout({ logoutParams: { returnTo: window.location.origin } });
  };
</script>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>
