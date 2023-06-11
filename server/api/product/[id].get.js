export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const uri = 'https://fakestoreapi.com/products/' + id;

  return await $fetch(uri);
});
