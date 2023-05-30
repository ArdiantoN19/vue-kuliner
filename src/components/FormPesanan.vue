<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form v-on:submit.prevent>
    <div class="form-group">
      <div class="form-label">Keterangan:</div>
      <textarea
        class="form-control border-success mb-3"
        rows="4"
        v-model="pesanan.keterangan"
      >
      </textarea>
    </div>
    <div class="row align-items-center wrap mb-3">
      <div class="form-label">Jumlah:</div>
      <div class="col-5 col-lg-4 col-xl-3 d-flex gap-2">
        <button class="btn btn-success" @click="decrement">-</button>
        <input
          type="number"
          class="form-control border-success"
          readonly
          :value="pesanan.jumlahBeli"
        />
        <button class="btn btn-success" @click="increment">+</button>
      </div>
    </div>
    <div class="text-end">
      <button type="submit" class="btn btn-success" @click="submitPesanan">
        Pesan
        <span class="iconify" data-icon="maki:fast-food"></span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormPesanan",
  props: {
    pesanan: Object,
    getImgURL: Function,
    increment: Function,
    decrement: Function,
    submitPesanan: Function,
  },
};
</script>

<style></style>
