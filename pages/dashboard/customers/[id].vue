<template>
  <MainLayout>
    <div
      style="
        max-width: 990px;
        margin-left: 21px;
        margin-top: 16px;
        margin-bottom: 50px;
      "
    >
      <GoBackButton style="margin-bottom: 24px" />
      <div class="heading flex margin-bottom">
        <h3>Customer information</h3>
      </div>
      <CustomerInfo
        :tagText="statusTagText"
        :type="statusTagType"
        :customer="IPCStore.customer"
        :address="address"
      />
      <div class="heading flex" style="margin-top: 32px;">
        <h3>Customer Order history</h3>
      </div>
      <TableComp
        v-if="orders"
        heading=""
        :data="orders"
        :tableHeaders="tableHeaders"
        :showBtn="false"
      />
      <LoaderComponent v-if="IPCStore.loading && loading" />
    </div>
  </MainLayout>
</template>



<script setup>
import { useIPCStore } from "/stores/index";

const IPCStore = useIPCStore();
const route = useRoute();
// const id = "64c7b861ecadf0ac675a0d50";
const id = route.params.id;
IPCStore.fetchCustomerInfo(id);
</script>
    
<script>
import axios from "axios";
import MainLayout from "/layouts/MainLayout.vue";
import { API_URL } from "@/plugins/axios.ts";
export default {
  components: { MainLayout },
  layout: "dashboardview",
  data() {
    return {
      statusTagText: "Not verified",
      // statusTagType: null,
      address: null,
      orders: null,
      loading: false,
      tableHeaders: [
        "Product’s name",
        "Date",
        "Order ID",
        "Quantity",
        "Price",
        "Status",
      ],
    };
  },
  created() {
    this.fetchAllOrders()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Assuming you're using Vue Router and the customer ID is available in route.params
    var customerId = this.$route.params.id;

    var raw = JSON.stringify({
      customerId: customerId,
    });

    axios
      .get(`${API_URL}/addresses/`, {
        params: {
          customerId: customerId,
        },
      })
      .then((response) => {
        // Handle the response data here
        const addresses = response.data.data.addresses[0];
        this.address = addresses;
        console.log("address", addresses);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  },
  computed: {
    statusTagType() {
      if (this.statusTagText === "Not verified") {
        return "negative";
      } else {
        return "positive";
      }
    },
  },
  methods: {
    async fetchAllOrders() {
      this.loading = true; // Set loading to true

      var customerId = this.$route.params.id;
      try {
        const response = await this.$devInstance.get("/orders/customer/" + customerId);
        this.orders = response?.data?.data?.orders;
        console.log("all orders", this.orders);
        console.log("all orders products", this.orders[0].products);
      } catch (error) {
        console.error("Error fetching all orders:", error);
        // Handle errors here
      } finally {
        this.loading = false; // Set loading to false, whether the request succeeds or fails
      }
    },
  }
};
</script>
    
<style scoped>
.margin-bottom {
  margin-bottom: 62px;
}
</style>