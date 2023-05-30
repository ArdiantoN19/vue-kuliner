<template>
  <div class="container">
    <nav
      class="mt-4 d-flex justify-content-between align-items-center"
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
          <span>Checkout</span>
        </li>
      </ol>
      <button class="btn btn-outline-danger" @click="close">❌</button>
    </nav>
    <div class="row justify-content-center mt-5">
      <div
        class="col-12 col-md-6 border border-success rounded text-start px-3 py-2"
      >
        <form @submit="submitOrder">
          <div class="form-group mb-3">
            <label class="form-label">Nama: </label>
            <input
              class="form-control border-success"
              v-model="orderIdentitas.nama"
            />
          </div>
          <div class="form-group mb-3">
            <label class="form-label">Nomer meja: </label>
            <input
              class="form-control border-success"
              v-model="orderIdentitas.noMeja"
            />
          </div>
          <div class="form-group mb-3">
            <label class="form-label">Total bayar: </label>
            <span class="fw-bold"> Rp. {{ pesanan.total }}</span>
          </div>
          <button type="submit" class="btn btn-success">Pesan</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderView",
  props: {
    pesanan: Object,
    close: Function,
  },
  data() {
    return {
      orderIdentitas: {
        nama: "",
        noMeja: "",
      },
    };
  },
  methods: {
    submitOrder(e) {
      e.preventDefault();
      console.log({
        nama: this.orderIdentitas.nama,
        noMeja: this.orderIdentitas.noMeja,
        ...this.pesanan,
      });
    },
  },
  created() {
    console.log(this.pesanan);
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
