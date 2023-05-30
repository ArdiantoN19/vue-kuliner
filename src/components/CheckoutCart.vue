<template>
  <div class="position-fixed bottom-0 start-0 w-100 bg-success py-2">
    <div class="d-flex container justify-content-between align-items-center">
      <h5 class="text-white">Total: Rp. {{ total }}</h5>
      <button
        type="button"
        class="btn btn-light text-success"
        @click="checkoutCart"
      >
        Checkout
        <span class="iconify" data-icon="maki:fast-food"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutCart",
  props: {
    total: Number,
    checkoutCart: Function,
  },
};
</script>
