<template>
  <div v-if="!products?.length">
    <p>Tidak ada data</p>
  </div>
  <div
    class="col-12 mb-3 col-md-6 col-lg-4 col-xl-3"
    v-for="product in products"
    :key="product.id"
  >
    <Card :product="product" />
  </div>
</template>
<script>
import Card from "./Card.vue";

export default {
  name: "CardList",
  props: {
    products: Array,
  },
  components: {
    Card,
  },
};
</script>

<style></style>
