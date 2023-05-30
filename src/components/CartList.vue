<template>
  <div
    v-for="cart in carts"
    :key="cart.id"
    class="row overflow-hidden pb-3 border-bottom border-2 mb-4"
  >
    <div class="col-12 col-md-6 col-lg-5 col-xl-4 mb-3 mb-md-0">
      <img
        class="img-fluid rounded"
        alt="gambar"
        :src="getImgURL(cart.products.gambar)"
      />
    </div>

    <div class="col-12 col-md-6 text-start">
      <h5>{{ cart.products.nama }}</h5>
      <p>Rp. {{ cart.products.harga }}</p>
      <div class="form-group mb-3">
        <label class="form-label">Keterangan: </label>
        <textarea
          class="form-control"
          rows="2"
          v-model="cart.keterangan"
        ></textarea>
      </div>
      <div class="row align-items-center wrap mb-3">
        <div class="form-label">Jumlah pesanan:</div>
        <div class="d-flex justify-content-between">
          <div class="col-5 col-lg-4 col-xl-5 d-flex gap-2">
            <button
              class="btn btn-success"
              @click="() => decrementCart(cart.id)"
            >
              -
            </button>
            <input
              type="number"
              class="form-control border-success"
              readonly
              :value="cart.jumlah_pemesanan"
            />
            <button
              class="btn btn-success"
              @click="() => incrementCart(cart.id)"
            >
              +
            </button>
          </div>
          <div class="d-flex gap-2">
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="() => toggleDelete(cart.id)"
            >
              <span class="iconify" data-icon="mdi:trash-outline"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartList",
  props: {
    carts: Array,
    getImgURL: Function,
    edit: Boolean,
    incrementCart: Function,
    decrementCart: Function,
  },
  methods: {
    toggleDelete(id) {
      return this.$emit("cart:delete", id);
    },
  },
};
</script>

<style></style>
