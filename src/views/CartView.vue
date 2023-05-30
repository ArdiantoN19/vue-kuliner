<template>
  <Navbar :cartLength="cartLength" />
  <div class="container">
    <div v-if="!carts.length">Tidak ada data</div>
    <div v-else class="row justify-content-center pb-3 pb-md-4">
      <div class="col-12 col-lg-10 col-xl-8">
        <CartList
          :carts="carts"
          :getImgURL="getImgURL"
          :incrementCart="incrementCart"
          :decrementCart="decrementCart"
          @cart:delete="deleteCart"
        />
      </div>
    </div>
    <CheckoutCart :total="totalBilling" :checkoutCart="showMenuCheckout" />
    <div class="position-fixed top-0 start-0 bg-white checkout" v-if="checkout">
      <OrderView :close="showMenuCheckout" :pesanan="checkoutCart" />
    </div>
  </div>
</template>

<script>
import api from "@/utils/api";
import { getImgURL } from "@/utils/helpers";
import Navbar from "@/components/Navbar.vue";
import CartList from "@/components/CartList.vue";
import CheckoutCart from "@/components/CheckoutCart.vue";
import OrderView from "./OrderView.vue";

export default {
  name: "CartView",
  components: {
    Navbar,
    CartList,
    CheckoutCart,
    OrderView,
  },
  data() {
    return {
      carts: [],
      checkout: false,
      getImgURL,
    };
  },
  // setup() {
  // return {
  // carts: [],
  // getImgURL,
  // };
  // },
  methods: {
    incrementCart(id) {
      return this.carts.map((cart) => {
        if (cart.id === id) {
          return { ...cart, jumlah_pemesanan: cart.jumlah_pemesanan++ };
        }
        return { ...cart };
      });
    },
    decrementCart(id) {
      return this.carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            jumlah_pemesanan:
              cart.jumlah_pemesanan <= 1 ? 1 : cart.jumlah_pemesanan--,
          };
        }
        return { ...cart };
      });
    },
    deleteCart(id) {
      const datas = this.carts.filter((cart) => cart.id !== id);
      return (this.carts = datas);
    },
    async fetchDataCarts() {
      try {
        const datas = await api.getCarts();
        this.carts = datas.data;
      } catch (error) {
        console.log(error);
      }
    },
    showMenuCheckout() {
      return (this.checkout = !this.checkout);
    },
  },
  computed: {
    totalBilling() {
      const onlyPrice = this.carts.map(
        ({ jumlah_pemesanan, products }) => jumlah_pemesanan * products.harga
      );
      const total = onlyPrice.reduce((acc, item) => acc + item, 0);
      return total;
    },
    cartLength() {
      return this.carts.length;
    },
    checkoutCart() {
      const newPesanan = {
        keranjangs: this.carts,
        total: this.totalBilling,
      };
      return newPesanan;
    },
  },
  created() {
    this.fetchDataCarts();
  },
};
</script>
<style scoped>
.checkout {
  height: 100vh;
  width: 100%;
}
.img-fluid {
  object-fit: cover !important;
  height: 200px !important;
}
</style>
