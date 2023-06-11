<template>
  <div>
    <NavBar />
    <div class="container mx-auto py-4 px-12">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
