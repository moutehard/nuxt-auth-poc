<template>
  <div>
    <span v-if="isAuthenticated" class="font-bold">{{ userName }}</span>
    <button @click="login" v-if="!isAuthenticated">Login</button>
    <button @click="logout" v-else>Logout</button>
  </div>
</template>

<script setup lang="ts">

const { status, data, signIn, signOut } = useAuth();

const login = () => signIn('auth0');
const logout = () => signOut();

const isAuthenticated = computed(() => {
  return status.value === 'authenticated';
});

const userName = computed(() => {
  return data.value?.user?.name || '';
});
</script>