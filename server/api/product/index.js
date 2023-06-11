export default defineEventHandler(async (event) => {
  return await $fetch('https://fakestoreapi.com/products');
});
