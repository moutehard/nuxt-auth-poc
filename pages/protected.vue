<template>
  <div>
    <h2>Protected Route</h2>
    <p class="font-bold">isAuthenticated?</p>
    <pre>{{ isAuthenticated }}</pre>
    <div>
      <div>
        <p class="font-bold">User</p>
        <pre>{{ user }}</pre>
      </div>
      <div>
        <p class="font-bold">Access Token</p>
        <pre>{{ accessToken }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>

<script setup>
  // this component requires auth so it should be rendered on the client side
  import { useAuth0 } from '@auth0/auth0-vue';

  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const accessToken = await getAccessTokenSilently();

  // Adding authGuard middleware
  definePageMeta({
    middleware: 'auth',
  });
</script>
