<template>
  <div class="container mx-auto sm:px-4">
    <div class="flex flex-wrap items-center profile-header">
      <div class="md:w-1/5 pr-4 pl-4 mb-3">
        <img :src="user?.picture" alt="User's profile picture" class="rounded-full w-36 h-36" />
      </div>
      <div class="relative md:flex-grow md:flex-1 text-center md:text-left">
        <h2>{{ user?.name }}</h2>
        <p class="text-xl font-light text-gray-700">{{ user?.email }}</p>
      </div>
    </div>

    <div class="flex flex-wrap">
      <pre class="bg-gray-50 overflow-scroll json">{{ user }}</pre>
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
import { useAuth0 } from '@auth0/auth0-vue';

const { user } = useAuth0();

definePageMeta({
  middleware: 'auth',
});
</script>
