<template>
  <div>
    <div class="container zindex">
      <div class="branding">
        <nuxt-link to="" class="logo">
          <img
            src="../assets/images/ipc-logo.png"
            alt="IPC Logo branding Independence purchasing company"
          />
        </nuxt-link>
        <div class="mobile__view">
          <div class="component-header-main">
        <svg
          @click="goBack"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 12L10 19M21 12H3H21ZM3 12L10 5L3 12Z"
            stroke="#565C69"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Checkout</p>
        <div class="component-cart">
          <nuxt-link to="/dashboard/market/cart">
            <div class="badge" v-if="cart.length > 0">
              <p>{{ getCartLength }}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 10V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V9.6888"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
    getCartLength() {
      const cartLength = this.$store.state.cart.length;
      return cartLength;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.mobile__view {
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
::-webkit-scrollbar {
  display: none;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  position: sticky;
  top: 0;
  left: 0;
}
.zindex {
  z-index: 99;
}
.branding {
  display: flex;
  width: 90%;
  padding: 24px 0;
}
.branding img {
  width: 90%;
}
.content {
  width: 90%;
  margin-top: 16px;
  margin-inline: auto;
}
p.header {
  color: var(--grey-grey1, #303237);
  text-align: center;

  /* Body Large/Body Large Medium */
  font-size: 16px;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 24px;
}
@media (max-width: 750px) {
  .content {
    margin-top: 40px;
  }
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  max-width: 376px;
  width: 100%;
}
.header-text {
  color: var(--grey-grey1);
}

.header-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
}

.form-group {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 32px;

  width: 100%;
}
.form-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}
.input-field {
  width: 100%;
}
label {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: var(--grey-grey1);
}

@media (max-width: 550px) {
  h2 {
    font-size: 24px;
    line-height: 36px;
  }
}
@media (max-width: 950px) {
  .logo {
    display: none;
  }
  .mobile__view {
    display: flex;
  }
}
</style>
