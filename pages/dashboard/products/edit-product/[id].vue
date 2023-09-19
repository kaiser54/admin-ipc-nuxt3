<template>
  <MainLayout>
    <div>
      <AlertPrompt
        ref="alertPrompt"
        :message="alertMessage"
        :alertType="alertType"
      />
      <EditProductForm
        @updateProduct="nextEvent"
        @deleteProduct="deleteProduct"
        v-show="!passed"
        headingText="Edit product"
        :categories="categories"
        :editMode="true"
      />
      <ProductDetails
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
      </ProductDetails>
    </div>
    <LoaderComponent v-if="loading" />
    <transition name="modal-fade">
      <!-- enter the PopModal an add router push to the button and remove the nuxt link -->
      <PopupModal
        v-if="showDelete"
        :showSnippet="true"
        :animate="animate"
        title="Delete product?"
        snippet="Are you sure you want to delete this product?"
        buttonText="Don’t delete"
        buttonText2="Confirm"
        buttonClass="neutral-btn"
        buttonClass2="negative-btn"
        @okModal="deleteProductByID"
        @closeModal="changeOrderStatus"
        @closeModalBG="changeOrderStatus"
      >
      </PopupModal>
    </transition>
  </MainLayout>
</template>
  
  
  
  <script>
// import axios from "plugins/axios";
import MainLayout from "/layouts/MainLayout.vue";
export default {
  components: { MainLayout },
  data() {
    return {
      passed: false,
      alertMessage: "",
      alertType: "",
      productData: null,
      imageArray: [],
      categories: [],
      loading: false,
      showDelete: false,
      animate: null,
      productID: null,
    };
  },
  async created() {
    this.productID = this.$route.params.id; // Assuming the parameter is named "id"
    await this.fetchCategories();
  },
  methods: {
    nextEvent({formData, previewImages}) {
      this.passed = !this.passed;
      this.productData = formData;
      console.log("new form data:", this.productData);
      // for (const image of previewImages) {
      //   if (image) {
      //     const url = URL.createObjectURL(image);
      //     this.imageArray.push(url);
      //     console.log(this.imageArray);
      //   }
      // }
      this.imageArray = previewImages
    },

    async postProduct() {
      this.loading = true;
      const formdata = new FormData();
      const productData = this.productData;

      // PLEASE TRY ADDING ALL THE DATA FILES HERE 🙏🏾
console.log(this.productData)
      formdata.append("name", this.productData.name);
      formdata.append("description", this.productData.description);
      formdata.append("actualPrice", this.productData.actualPrice);
      formdata.append("discountPrice", this.productData.discountPrice);
      formdata.append("inStock", this.productData.inStock);
      formdata.append("brand", this.productData.brand);
      formdata.append("unit", this.productData.weight);
      formdata.append("category", this.productData.category);
      this.productData.images.forEach((image, index) => {
        formdata.append("image", image);
      });
      console.log(this.productData)
      let config = {
        method: "PUT",
        maxBodyLength: Infinity,
        url: `/products/${this.productID}`,
        data: formdata,
      };

      this.$devInstance(config)
        .then((res) => {
          // Handle the success response here or update the component state as needed
          this.alertType = "success";
          this.alertMessage = "Successfully added to the product list";
          this.$refs.alertPrompt.showAlert(
            "product data uploaded successfully",
            "success"
          );
          this.$router.push("/dashboard/products/");
          console.log(res)
        })
        .catch((err) => {
          console.error("Error uploading product data:", err);

          // Handle the error response here or update the component state as needed
          this.alertType = "error";
          this.alertMessage =
            "Error uploading product data. Please try again later.";
          this.$refs.alertPrompt.showAlert(
            "Error uploading product data",
            "error"
          );
        })
        .finally(() => (this.loading = false));
    },

    goRoute() {
      this.passed = !this.passed;
      this.imageArray = [];
    },

    async fetchCategories() {
      this.loading = true;
      this.$devInstance
        .get("/categories")
        .then((res) => (this.categories = res?.data?.data?.categories))
        .finally(() => (this.loading = false));
    },
    deleteProduct() {
      this.showDelete = !this.showDelete;
      this.animate = "animate__zoomIn";
    },
    changeOrderStatus() {
      this.showDelete = !this.showDelete;
    },
    async deleteProductByID() {
      this.loading = true;
      
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `/products/${this.productID}`,
        // data: formdata,
      };

      this.$devInstance(config)
        .then((res) => {
          // Handle the success response here or update the component state as needed
          this.alertType = "success";
          this.alertMessage = "Successfully added to the product list";
          this.$refs.alertPrompt.showAlert(
            "product data uploaded successfully",
            "success"
          );
          this.$router.push("/dashboard/products/");
        })
        .catch((err) => {
          console.error("Error uploading product data:", err);

          // Handle the error response here or update the component state as needed
          this.alertType = "error";
          this.alertMessage =
            "Error uploading product data. Please try again later.";
          this.$refs.alertPrompt.showAlert(
            "Error uploading product data",
            "error"
          );
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
  
  <style  scoped></style>
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