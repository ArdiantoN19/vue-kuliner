<template>
  <div class="home container">
    <Hero />
    <div class="row align-items-center mt-4 mt-xl-5">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h2>Best Product</h2>
        <span class="line"></span>
        <div>
          <router-link class="btn btn-success" to="/foods"
            >See More</router-link
          >
        </div>
      </div>
      <CardList :products="bestProducts" />
    </div>
  </div>
</template>

<script>
import { defineComponent, DefineComponent } from "vue";
import api from "@/utils/api";
import Hero from "@/components/Hero.vue";
import CardList from "@/components/CardList.vue";
import { reactive } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Hero,
    CardList,
  },
  // setup() {
  //   const bestProducts = [];
  //   const fetchDataBestProducts = async () => {
  //     try {
  //       const datas = await api.getBestProducts();
  //       this.bestProducts = datas.data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   return {
  //     bestProducts,
  //     fetchDataBestProducts,
  //   };
  // },
  data() {
    const bestProducts = [];
    return {
      bestProducts,
    };
  },
  methods: {
    async fetchDataBestProducts() {
      try {
        const datas = await api.getBestProducts();
        this.bestProducts = datas.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchDataBestProducts();
  },
});
</script>
