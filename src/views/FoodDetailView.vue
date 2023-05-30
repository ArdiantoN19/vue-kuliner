<template>
  <div class="container">
    <nav
      class="mt-4"
      style="--bs-breadcrumb-divider: '>'"
      aria-label="breadcrumb"
    >
      <ol class="breadcrumb fw-bold">
        <li class="breadcrumb-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/foods">Foods</router-link>
        </li>
        <li class="breadcrumb-item active">
          <span>Detail</span>
        </li>
      </ol>
    </nav>
    <div class="row justify-content-center mt-5">
      <div class="col-12 col-md-6">
        <img
          v-if="!product.gambar"
          class="img-fluid rounded mb-3 mb-md-0"
          src="../assets/images/default.png"
        />
        <img
          v-else
          class="img-fluid rounded mb-3 mb-md-0"
          :src="getImgURL(product.gambar)"
        />
      </div>
      <div class="col-12 col-md-6 text-start">
        <h2>{{ product?.nama }}</h2>
        <hr />
        <p class="fs-5">Rp. {{ product?.harga }}</p>
        <FormPesanan
          :getImgURL="getImgURL"
          :increment="increment"
          :decrement="decrement"
          :pesanan="pesanan"
          :submitPesanan="submitPesanan"
        />
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/utils/api";
import { getImgURL } from "@/utils/helpers";
import FormPesanan from "@/components/FormPesanan.vue";

export default {
  name: "FoodDetailView",
  components: {
    FormPesanan,
  },
  data() {
    return {
      pesanan: {
        jumlahBeli: 1,
        keterangan: "",
      },
      product: {},
      getImgURL,
    };
  },
  created() {
    const fetchDataDetailProduct = async () => {
      try {
        const data = await api.getDetailProduct(Number(this.$route.params.id));
        this.product = data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDetailProduct();
  },
  methods: {
    increment() {
      return this.pesanan.jumlahBeli++;
    },
    decrement() {
      if (this.pesanan.jumlahBeli <= 1) {
        return false;
      }
      return this.pesanan.jumlahBeli--;
    },
    submitPesanan() {
      api.postAddCart({ id: this.$route.params.id, ...this.pesanan });
      return this.$router.push({ name: "FoodView" });
    },
  },
};
</script>

<style scoped>
.breadcrumb-item a {
  text-decoration: none !important;
  color: #11111f !important;
}

.breadcrumb-item.active {
  color: #42b983 !important;
}
</style>
