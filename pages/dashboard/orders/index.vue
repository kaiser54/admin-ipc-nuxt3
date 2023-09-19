<template>
  <MainLayout>
    <div class="dash__container">
      <div class="dash__card">
        <DynamicDashCard
          cardName="Total orders"
          :counterName="orderSummary?.totalOrder"
        >
          <template v-slot:svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="tag-price-discount">
                <path
                  id="Vector"
                  d="M2.5 10.3275V2.5H10.3275L17.0368 9.20933C17.6544 9.82683 17.6544 10.8282 17.0368 11.4458L11.4458 17.0368C10.8282 17.6544 9.82683 17.6544 9.20933 17.0368L2.5 10.3275Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M5.84692 5.84668L5.8335 5.83325"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </template>
        </DynamicDashCard>
        <DynamicDashCard
          cardName="Pending orders"
          :counterName="orderSummary?.pendingOrder"
        >
          <template v-slot:svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="ad-announcement-megaphone"
                clip-path="url(#clip0_5058_11477)"
              >
                <path
                  id="Vector"
                  d="M18.2788 13.0487L15.5318 2.81611C15.2331 1.70358 13.8658 1.29371 13.0023 2.05787L11.2709 3.59023C9.34417 5.29546 7.04614 6.52956 4.55874 7.19476C2.47664 7.75159 1.24269 9.89383 1.80058 11.9719C2.35848 14.05 4.50028 15.2894 6.58239 14.7326C9.06975 14.0673 11.6782 13.9892 14.2011 14.5046L16.4682 14.9676C17.5988 15.1985 18.5775 14.1612 18.2788 13.0487Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M6.43115 6.66675L9.58326 18.3334"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_5058_11477">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </template>
        </DynamicDashCard>
        <DynamicDashCard
          cardName="Shipped orders"
          :counterName="orderSummary?.shippedOrder"
        >
          <template v-slot:svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="shopping-bag">
                <path
                  id="Vector"
                  d="M2.5 7.49992C2.5 6.57944 3.24619 5.83325 4.16667 5.83325H15.8333C16.7538 5.83325 17.5 6.57944 17.5 7.49992V16.6666C17.5 17.5871 16.7538 18.3333 15.8333 18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6666V7.49992Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M6.6665 8.33341V5.00008C6.6665 3.15913 8.15889 1.66675 9.99984 1.66675C11.8408 1.66675 13.3332 3.15913 13.3332 5.00008V8.07408"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </template>
        </DynamicDashCard>
        <DynamicDashCard
          cardName="Delivered orders"
          :counterName="orderSummary?.deliveredOrder"
        >
          <template v-slot:svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="user-group-accounts">
                <path
                  id="Vector"
                  d="M7.49984 9.16667C9.34079 9.16667 10.8332 7.67428 10.8332 5.83333C10.8332 3.99238 9.34079 2.5 7.49984 2.5C5.65889 2.5 4.1665 3.99238 4.1665 5.83333C4.1665 7.67428 5.65889 9.16667 7.49984 9.16667Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M1.6665 17.5V14.1667C1.6665 13.2462 2.4127 12.5 3.33317 12.5H11.6665C12.587 12.5 13.3332 13.2462 13.3332 14.1667V17.5"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M13.3335 2.5C14.0505 2.68358 14.686 3.10058 15.1398 3.68526C15.5937 4.26993 15.84 4.98902 15.84 5.72917C15.84 6.46931 15.5937 7.1884 15.1398 7.77307C14.686 8.35775 14.0505 8.77475 13.3335 8.95833"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_4"
                  d="M15.8335 12.5H16.6668C17.5873 12.5 18.3335 13.2462 18.3335 14.1667V17.5"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </template>
        </DynamicDashCard>
      </div>
      <TableComp
        v-if="orders"
        heading=""
        :data="orders"
        :tableHeaders="tableHeaders"
        :showBtn="false"
      >
      </TableComp>
      <LoaderComponent v-if="false"/>
    </div>
  </MainLayout>
</template>
  
  <script>
import MainLayout from "/layouts/MainLayout.vue";
export default {
  layout: "dashboardview",
  components: { MainLayout },
  data() {
    return {
      rotate: false,
      showDropdown: false,
      displayText: "All",
      tabs: ["All", "Completed", "Pending", "Cancelled"],
      activeTabs: [0], // set the default active tab to be "All"
      tableHeaders: [
        "Product’s name",
        "Date",
        "Order ID",
        "Quantity",
        "Price",
        "Status",
      ],
      orders: null,
      orderSummary: null,
      loading: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        await Promise.all([this.fetchOrderSummary(), this.fetchAllOrders()]);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here, such as showing a user-friendly error message
      } finally {
        this.loading = false;
      }
    },
    async fetchOrderSummary() {
      try {
        const response = await this.$devInstance.get("/orders/orders-summary");
        this.orderSummary = response?.data?.data;
        console.log("all orderSummary", this.orderSummary);
      } catch (error) {
        console.error("Error fetching order summary:", error);
        // Handle errors here
      }
    },
    async fetchAllOrders() {
      try {
        const response = await this.$devInstance.get("/orders");
        this.orders = response?.data?.data?.orders;
        console.log("all orders", this.orders);
        console.log("all orders products", this.orders[0].products);
      } catch (error) {
        console.error("Error fetching all orders:", error);
        // Handle errors here
      }
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
      this.rotate = !this.rotate;
    },
    selectOption(option) {
      this.displayText = option;
      this.showDropdown = false;
    },
    toggleTab(index) {
      if (this.activeTabs.length === 1 && this.activeTabs.includes(index)) {
        // do nothing if the clicked tab is the last active tab
        return;
      } else if (this.activeTabs.includes(index)) {
        this.activeTabs = this.activeTabs.filter(
          (tabIndex) => tabIndex !== index
        );
      } else {
        this.activeTabs.push(index);
      }
    },
  },
};
</script>
  
  <style scoped>
.filter__header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
}
</style>