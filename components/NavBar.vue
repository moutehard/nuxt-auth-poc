<template>
  <header class="shadow-sm bg-gray-50">
    <nav class="container mx-auto py-4 px-12 flex justify-between">
      <a to="/" class="font-bold">Kick &#10084;&#65039; Okta</a>
      <div class="flex gap-4">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/products">Products</NuxtLink>
      </div>
      <div class="flex gap-4">
        <ClientOnly placeholder="Loading...">
          <NavDropdown />
        </ClientOnly>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
