<template>
  <div class="row text-start justify-content-center align-items-center">
    <div class="col-12 order-1 order-md-0 col-md-7">
      <h1><strong>Delicious Food Menu,</strong></h1>
      <h1 class="fw-thin">In Your Design</h1>
      <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
      <router-link class="btn btn-success" to="/foods">
        Pesan
        <span class="iconify" data-icon="maki:fast-food"></span>
      </router-link>
    </div>
    <div class="col-12 col-md-5 mb-3 mb-md-0">
      <img class="img-fluid" src="../assets/eating.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>
