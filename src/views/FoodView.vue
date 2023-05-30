<template>
  <div class="container">
    <input class="form-control" v-model="search" placeholder="search..." />
    <div class="row align-items-center mt-4 mt-xl-5">
      <h2 class="mb-3 text-start">List Products</h2>
      <CardList :products="filterProducts" />
    </div>
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
import api from "@/utils/api";

export default {
  name: "FoodView",
  components: {
    CardList,
  },
  data() {
    const products = [];
    const search = "";
    return {
      products,
      search,
    };
  },
  created() {
    const fetchDataProducts = async () => {
      try {
        const datas = await api.getProducts();
        this.products = datas.data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataProducts();
  },
  // Digunakan untuk mengurangi logic yang digunakan pada template
  // Serta dapat membentuk data baru berdasarkan data yang ada.
  computed: {
    filterProducts() {
      return this.products.filter((product) =>
        product.nama.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style></style>
