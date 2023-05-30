<template>
  <Navbar v-if="hasNavbar" :cartLength="cartLength" />
  <router-view />
</template>
<script>
import api from "./utils/api";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    async fetchDataCarts() {
      try {
        const datas = await api.getCarts();
        this.carts = datas.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    hasNavbar() {
      const path = this.$route.path;
      if (path == "/" || path == "/foods") {
        return true;
      }
      return false;
    },
    cartLength() {
      return this.carts.length;
    },
  },
  mounted() {
    this.fetchDataCarts();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn:active {
  transform: scale(0.9);
}

.line {
  position: relative;
  width: 70%;
  height: 3px;
  background-color: #11111f;
}

.text-success {
  color: #42b983 !important;
}
.bg-success {
  background-color: #42b983 !important;
}
.btn-success {
  background-color: #42b983 !important;
  border: none !important;
}
</style>
