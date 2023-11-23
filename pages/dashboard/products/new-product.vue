<template>
  <MainLayout>
    <div>
      <AlertPrompt ref="alertPrompt" :message="alertMessage" :alertType="alertType" />
      <NewProductForm
        @nextEvent="nextEvent"
        v-show="!passed"
        headingText="Add new product"
        :categories="IPCStore.categories"
      />
      <NewProductDetails
        @buttonClick="postProduct"
        @back="goRoute"
        v-if="passed"
        icon="icon-right"
        size="standard"
        buttonText="Post product"
        type="primary"
        :showBtn="true"
        :dataProp="productData"
        :productImage="imageArray"
      >
        <template v-slot:svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow-top-right">
              <path
                id="Vector"
                d="M15.3029 4.69678V12.9463M4.69629 15.3034L15.3029 4.69678L4.69629 15.3034ZM15.3029 4.69678L7.0533 4.69679L15.3029 4.69678Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </template>
      </NewProductDetails>
    </div>
    <LoaderComponent v-if="IPCStore.loading || loading" />
  </MainLayout>
</template>

<script setup>
import { useIPCStore } from "/stores/index";

const IPCStore = useIPCStore();
IPCStore.fetchCategories();
</script>

<script>
import axios from "axios";
import { API_URL } from "@/plugins/axios.ts";
import MainLayout from "/layouts/MainLayout.vue";
import LoaderComponent from "/components/LoaderComponent.vue";
export default {
  components: { MainLayout, LoaderComponent },
  data() {
    return {
      passed: false,
      alertMessage: "",
      alertType: "",
      productData: null,
      imageArray: [],
      loading: false,
    };
  },

  methods: {
    nextEvent(data) {
      this.passed = !this.passed;
      this.productData = data;
      for (const image of data.selectedImages) {
        if (image) {
          const url = URL.createObjectURL(image);
          this.imageArray.push(url);
          console.log(this.imageArray, "image array");
          console.log(this.productData, "product Data");
        }
      }
    },

    async postProduct() {
      this.loading = true;

      const formdata = new FormData();
      formdata.append("name", this.productData.productName);
      formdata.append("discountPrice", this.productData.price);
      formdata.append("actualPrice", this.productData.slash);
      formdata.append("description", this.productData.description);
      formdata.append("brand", this.productData.brand);
      // formdata.append("statusValue", this.productData.statusValue);
      formdata.append("category", this.productData.categoryValue);
      formdata.append("unit", this.productData.weight);
      formdata.append("inStock", this.productData.statusValue);

      this.productData.selectedImages.forEach((image, index) => {
        formdata.append("image", image);
      });

      try {
        const response = await axios.post(`${API_URL}/products`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data", // Set the co  ntent type for FormData
          },
        });
        console.log(response.data);
        if (response.data.status === "success") {
          this.alertType = "success";
          this.alertMessage = "Product successfully uploaded";
          this.$refs.alertPrompt.showAlert(
            "Product data updated successfully",
            "success"
          );
          this.$router.push("/dashboard/products/");
        } else {
          this.alertType = "error";
          this.alertMessage = "Error uploading product";
          this.$refs.alertPrompt.showAlert("Error uploading product", "error");
        }
      } catch (error) {
        console.error("Error:", error);
        this.alertType = "error";
        this.alertMessage = "Error uploading product";
        this.$refs.alertPrompt.showAlert("Error uploading product", "error");
      } finally {
        this.loading = false;
      }
    },
    goRoute() {
      this.passed = !this.passed;
      this.imageArray = [];
    },
  },
};
</script>

<style scoped></style>
<style>
.innerProduct .desktop-nav {
  background: var(--primary-p300);
}

.innerProduct .desktop-nav p {
  color: #fff;
}

.innerProduct .desktop-nav svg {
  stroke: #fff;
}

.innerProduct .desktop-nav .nav-content svg path {
  stroke: #fff !important;
}
</style>
