<template>
  <div class="card overflow-hidden shadow-sm">
    <img class="img-fluid" :src="getImgURL(product.gambar)" />
    <div class="card-body text-start">
      <h5>{{ product.nama }}</h5>
      <p>Rp. {{ product.harga }}</p>
      <router-link
        class="btn btn-success"
        :to="'/foods/' + product.id"
        v-if="product.is_ready"
      >
        <span class="iconify" data-icon="ph:shopping-cart-light"></span>
        Pesan
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { getImgURL, linkedTo } from "@/utils/helpers";

export default defineComponent({
  name: "Card",
  props: {
    product: Object,
  },
  setup() {
    onMounted(() => console.log("berhasil"));
    return {
      getImgURL,
      linkedTo,
    };
  },
});
</script>

<style scoped>
.img-fluid {
  object-fit: cover !important;
  height: 150px !important;
}
</style>
