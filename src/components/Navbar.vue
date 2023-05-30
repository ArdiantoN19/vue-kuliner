<template>
  <nav class="navbar navbar-expand-lg bg-secondary mb-4">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">Kuliner</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse text-start text-md-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Food</router-link>
          </li>
        </ul>
        <router-link to="/cart" class="btn">
          Keranjang
          <span class="iconify" data-icon="mdi:shopping"></span>
          <span class="badge text-bg-success rounded-pill">
            {{ cartLength }}
          </span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    cartLength: Number,
  },
};
</script>

<style scoped>
.bg-secondary {
  background: rgb(240, 240, 240) !important;
}
li {
  position: relative;
  font-weight: bold;
  color: #11111f;
}
li a.router-link-exact-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 5px;
  border-radius: 3px;
  left: 0;
  background-color: #42b983;
}

li a.router-link-exact-active {
  color: #42b983 !important;
}

@media screen and (min-width: 600px) {
  li a.router-link-exact-active::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 5px;
    border-radius: 3px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #42b983;
  }
}
</style>
