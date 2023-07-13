<template>
  <MainLayout>
    <div>
      <AlertPrompt
        ref="alertPrompt"
        :message="alertMessage"
        :alertType="alertType"
      />
      <ProductForm
        @nextEvent="nextEvent"
        v-if="!passed"
        headingText="Add new product"
      />
      <ProductDetails
        @buttonClick="postProduct"
        @back="goRoute"
        v-else
        icon="icon-right"
        size="standard"
        buttonText="Post product"
        type="primary"
        :showBtn="true"
        :product="product"
        :formData="formData"
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
      <!-- in this code, ive created a new product details component, so ill save all the inputed data in an array inside the product from before sending it to this parent page, then the product details will pick up the said array into the product details component, now i need to edit the dynamic _product page in the pages folder to use the productdetails component-->
    </div>
  </MainLayout>
</template>


<script setup>
const productID = Math.floor(Math.random() * 20) + 1;
const formData = ref(null);

const uri = "https://fakestoreapi.com/products/" + productID;

// fetching the products
const { data: product } = await useFetch(uri);

// const nextEvent = (formData) => {
//   // Access the submitted data from the child component
//   console.log("Form Data:", formData);
//   // Perform further actions with the data
// };
</script>


<script>
import MainLayout from "/layouts/MainLayout.vue";
export default {
  components: { MainLayout },
  data() {
    return {
      passed: false,
      alertMessage: "",
      alertType: "",
    };
  },
  methods: {
    nextEvent(formData) {
      this.passed = !this.passed;
      this.formData = formData;
      // Access the submitted data from the child component
      console.log("Form Data:", formData);
      // Perform further actions with the data
    },
    postProduct() {
      this.alertType = "success";
      this.alertMessage = "Successfully added to product list";
      this.$refs.alertPrompt.showAlert("This is an example alert.", "success");
    },
    goRoute() {
      this.passed = !this.passed;
    },
  },
};
</script>

<style  scoped>
</style>
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