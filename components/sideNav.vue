<template>
  <section class="dashboard-nav-bar">
    <section class="dashboard-menu">
      <img
        src="../assets/images/ipc-logo.png"
        alt="IPC Logo branding Independence purchasing company"
      />
      <section class="menu">
        <nuxt-link to="/dashboard/">
          <div class="desktop-nav">
            <div class="nav-content">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 10.2501V20.0001C3 20.5524 3.44771 21.0001 4 21.0001H8.42857C8.98086 21.0001 9.42857 20.5524 9.42857 20.0001V13.2858H14.5714V20.0001C14.5714 20.5524 15.0191 21.0001 15.5714 21.0001H20C20.5523 21.0001 21 20.5524 21 20.0001V10.2501C21 9.93536 20.8518 9.63897 20.6 9.45012L12 3.00012L3.4 9.45012C3.14819 9.63897 3 9.93536 3 10.2501Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Dashboard</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/dashboard/products" :class="{'innerProduct': isInnerProduct}">
          <div class="desktop-nav">
            <div class="nav-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12.3931V3.00006H12.393L20.4442 11.0513C21.1853 11.7923 21.1853 12.9939 20.4442 13.735L13.7349 20.4443C12.9938 21.1854 11.7922 21.1854 11.0512 20.4443L3 12.3931Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.01611 7.01617L7 7.00006"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Products</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/dashboard/orders">
          <div class="desktop-nav">
            <div class="nav-content">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9.00006C3 7.89549 3.89543 7.00006 5 7.00006H19C20.1046 7.00006 21 7.89549 21 9.00006V20.0001C21 21.1047 20.1046 22.0001 19 22.0001H5C3.89543 22.0001 3 21.1047 3 20.0001V9.00006Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 10.0001V6.00006C8 3.79092 9.79086 2.00006 12 2.00006C14.2091 2.00006 16 3.79092 16 6.00006V9.68886"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Orders</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/dashboard/customers">
          <div class="desktop-nav">
            <div class="nav-content">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 11.0001C11.2091 11.0001 13 9.2092 13 7.00006C13 4.79092 11.2091 3.00006 9 3.00006C6.79086 3.00006 5 4.79092 5 7.00006C5 9.2092 6.79086 11.0001 9 11.0001Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 21.0001V17.0001C2 15.8955 2.89543 15.0001 4 15.0001H14C15.1046 15.0001 16 15.8955 16 17.0001V21.0001"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 3.00006C16.8604 3.22036 17.623 3.72076 18.1676 4.42237C18.7122 5.12398 19.0078 5.98689 19.0078 6.87506C19.0078 7.76323 18.7122 8.62614 18.1676 9.32775C17.623 10.0294 16.8604 10.5298 16 10.7501"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 15.0001H20C21.1046 15.0001 22 15.8955 22 17.0001V21.0001"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>Customer</p>
            </div>
          </div>
        </nuxt-link>
        <!-- <nuxt-link :to="{ name: 'profile' }"> -->
        <nuxt-link to="/dashboard/messaging">
          <div class="desktop-nav"> 
            <div class="nav-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 6.00012H16H8ZM8 10.0001H16H8ZM8 14.0001H11H8ZM6 22.0001H18C19.1046 22.0001 20 21.1047 20 20.0001V4.00012C20 2.89555 19.1046 2.00012 18 2.00012H6C4.89543 2.00012 4 2.89555 4 4.00012V20.0001C4 21.1047 4.89543 22.0001 6 22.0001Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Messaging</p>
            </div>
          </div>
        </nuxt-link>
      </section>
    </section>
    <section class="dashboard-profile">
      <div class="profile-content">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H15"
            stroke="#FF3B2D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 7L3 12L8 17"
            stroke="#FF3B2D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 3V21"
            stroke="#FF3B2D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="logout">Logout</p>
      </div>
    </section>
  </section>
</template>



<script>
export default {
  props: {
    showPopup: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    togglePopup() {
      this.$emit("update:showPopup", !this.showPopup);
    },
    logoutUser() {
      this.$emit("update:logout", !this.logout);
    },
  },
  computed: {
    isInnerProduct() {
      return (
        this.$route.path === '/dashboard/products/create-product' ||
        this.$route.path === '/dashboard/products/new-product' ||
        this.$route.path.includes('[id]') ||
        this.$route.path === '/dashboard/products/[id].vue' 
      );
    },
  },
};
</script>

<style scoped>
.dashboard-nav-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 48px 24px;
  gap: 48px;

  width: 278px;
  height: 100vh;

  /* White */

  background: #ffffff;
  /* Grey/Grey5 */

  border-right: 1px solid var(--grey-grey5);
  z-index: 5;
}

.dashboard-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;

  max-width: 230px;
}

.dashboard-menu img {
  max-width: 144.8px;
  height: auto;
}

.menu {
  display: flex;
  flex-direction: column;
  max-width: 230px;
}

.nav-content {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.nav-content svg {
  stroke: var(--grey-grey2);
}

.nav-content p {
  font-weight: 500;
}

.popup {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 278px;
  /* height: 168px; */
  left: 0px;
  top: 255px;
  background: var(--white);

  filter: drop-shadow(0px 1px 12px rgba(0, 6, 125, 0.2));
  border-radius: 16px;
  z-index: 12;
}

.popup a {
  width: 100%;
}

.cursor {
  cursor: pointer;
}

.popup .desktop-nav {
  border-radius: 0px;
}

.logout {
  color: var(--negative-n300);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.dashboard-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 8px 24px; */

  max-width: 230px;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 1.1s ease-out;
}

.modal-fade-leave-to {
  opacity: 0;
}

.router-link-exact-active .desktop-nav {
  background: var(--primary-p300);
}

.router-link-exact-active .desktop-nav p {
  color: #fff;
}

.router-link-exact-active .desktop-nav svg {
  stroke: #fff;
}

.router-link-exact-active .desktop-nav .nav-content svg path {
  stroke: #fff !important;
}
</style>