<template>
  <div>
    <div class="dashboard-wrapper">
      <section class="section-wrapper">
        <div class="ipc-nav">
          <div class="fixed" v-if="!mobile">
            <div class="solv">
              <!-- side navigation bar -->
              <sideNav
                :show-popup="showPopup"
                @update:showPopup="updateShowPopup"
                @update:logout="updatelogout"
              />
            </div>
            <div class="backdrop" v-if="showPopup" @click="closePopup"></div>
          </div>
        </div>
        <div class="top-fixed" @click="closePopup">
          <section class="dashview">
            <div class="ipc-top-fixed">
              <section class="dashboard-top-fixed">
                <!-- dasboard header that have the welcome, search bar and notify-cart -->
                <topDetails
                  @openCart="toggleCart"
                  @openNotification="toggleNotification"
                />
              </section>
            </div>
            <div class="view-wrapper">
              <section class="view">
                <slot />
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>
  
  <script>
export default {
  // middleware: 'auth', // Add the 'auth' middleware to protect this page
  data() {
    return {
      showPopup: false,
      mobile: false,
      loading: true,
      logout: false,
      isCart: false,
      isNotification: false,
      checkMail: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
    // set loading to true again when component is mounted
    // this.loading = true;
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
    if (this.$route.path === "/dashboard") {
      // Perform an automatic redirect to "/dashboard/market"
      this.$router.redirect("/dashboard/market");
    }
  },
  created() {},
  methods: {
    toggleCart() {
      this.isCart = !this.isCart;
      if (this.mobile) {
        this.$router.push("/dashboard/market/cart");
      }
      console.log("cart clicked");
    },
    toggleNotification() {
      this.isNotification = !this.isNotification;
      if (this.mobile) {
        this.$router.push("/dashboard/market/notifications");
      }
      console.log("cart clicked");
    },
    updateShowPopup(value) {
      this.showPopup = value;
    },
    updatelogout(value) {
      if (this.showPopup === true) {
        this.showPopup = false;
      }
      this.logout = value;
    },
    closePopup() {
      if (this.showPopup === true) {
        this.showPopup = false;
      }
      this.logout = false;
    },
    checkScreenSize() {
      if (window.innerWidth <= 951) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    redirectToSearchPageFunc() {
      if (this.mobile) {
        this.$router.push("/dashboard/search");
      }
    },
    logoutUser() {
      this.logout = !this.logout; // set logout to true
    },
    logoutUserBG() {
      this.logout = false; // set logout to true
    },
    handleOpenMail() {
      this.checkMail = !this.checkMail;
    },
  },
};
</script>
  
  <style scoped>
section {
  background: none;
}

.dashboard-wrapper {
  display: flex;
  max-width: 100%;
  width: 100%;
  height: 100%;
}

.section-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding-right: 0px;
}

.fixed {
  position: relative;
}

.mobile-bottom-nav {
  width: 100%;
}

div.top-fixed {
  width: 100%;
}

.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

section.dashview {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.dashboard-top-fixed {
  height: 136px;

  /* White */

  background: #ffffff;
  /* Grey/Grey5 */

  border-bottom: 1px solid var(--grey-grey5);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.view-wrapper {
  display: flex;
  overflow-y: scroll;
  height: calc(100vh - 136px);
  max-width: calc(100vw - 278px);
  justify-content: center;
}

section.view {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(100vw - 278px);
  margin-bottom: 100px;
}

::-webkit-scrollbar {
  /* display: none; */
  display: block !important;
  width: auto;
  /* Set width of the scrollbar */
}

.nuxt-page-here {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 20px;
  padding-bottom: 100px;
  justify-content: center;
}

@media (max-width: 950px) {
  .top-details,
  .view-wrapper,
  section.view {
    max-width: 100%;
  }

  .view-wrapper {
    overflow-y: visible;
    height: 100%;
  }

  .ipc-top-fixed {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;
  }

  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 100%;
  }

  .nuxt-page-here {
    margin: 16px;
    gap: 16px;
  }
}
</style>
  