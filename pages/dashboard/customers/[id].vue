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
      />
      <LoaderComponent v-if="IPCStore.loading" />
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
import MainLayout from "/layouts/MainLayout.vue";
export default {
  components: { MainLayout },
  layout: "dashboardview",
  data() {
    return {
      statusTagText: "Not verified",
      statusTagType: null,
    };
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
};
</script>
    
<style scoped>
.margin-bottom {
  margin-bottom: 62px;
}
</style>