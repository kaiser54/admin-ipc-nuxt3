<template>
  <MainLayout>
    <div>
      <AlertPrompt ref="alertPrompt" :message="alertMessage" :alertType="alertType" />
      <ProductForm @nextEvent="nextEvent" v-if="!passed" headingText="Add new product" :categories="categories" />
      <ProductDetails @buttonClick="postProduct" @back="goRoute" v-else icon="icon-right" size="standard"
        buttonText="Post product" type="primary" :showBtn="true" :product="product" :formData="formData">
        <template v-slot:svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="arrow-top-right">
              <path id="Vector"
                d="M15.3029 4.69678V12.9463M4.69629 15.3034L15.3029 4.69678L4.69629 15.3034ZM15.3029 4.69678L7.0533 4.69679L15.3029 4.69678Z"
                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
const productData = ref(null)
// const categories = ref([])
const alert = reactive({
  passed: false,
  alertMessage: "",
  alertType: "",
})

const uri = "https://fakestoreapi.com/products/" + productID;

// fetching the products
const { data: product } = await useFetch(uri);

const nextEvent = (formData) => {
  productData.value = formData;
  console.log(productData.value);
  passed = !passed;
};

async function fetchCategories() {
  try {
    const res = await this.$axios.get("http://localhost:8000/api/v1/categories")
    if (res?.data) {
      console.log(res, "hjnjhknjk")
    }
  } catch (err) {
    alert.alertType = "error";
    alert.alertMessage = `${err.message || err}`;
    alert.$refs.alertPrompt.showAlert("This is an example alert.", "error");
  }
}

onMounted(() => {
  fetchCategories()
})

const postProduct = async () => {
  try {
    // Set the loader to true before the api call

    const res = await this.$axios.post("http://localhost:8000/api/v1/products", { ...productData })
    if (res) {
      alert.alertType = "success";
      alert.alertMessage = "Successfully added to product list";
      alert.$refs.alertPrompt.showAlert("This is an example alert.", "success");
    }
  } catch (err) {
    alert.alertType = "error";
    alert.alertMessage = `${err.message || err}`;
    alert.$refs.alertPrompt.showAlert("This is an example alert.", "error");
  } finally {
    // Runs the code in this block whether or not there is an error or success
  }
}

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
      categories: [],
    };
  },
  mounted() {
    // this.fetchProducts();
    this.fetchCategories()
  },
  methods: {
    postProduct() {
      this.alertType = "success";
      this.alertMessage = "Successfully added to product list";
      this.$refs.alertPrompt.showAlert("This is an example alert.", "success");
    },
    goRoute() {
      this.passed = !this.passed;
    },

    fetchCategories() {
      this.$axios.get("http://localhost:8000/api/v1/categories").then((res) => {
        console.log(res)
        this.categories = res?.data?.data?.categories
      }).catch((err) => console.log(err))
      // try {
      //   const res = await this.$axios.get("http://localhost:8000/api/v1/categories")
      //   if (res?.data) {
      //     console.log(res)
      //     // categories.value = res?.data?.categories
      //   }
      // } catch (err) {
      //   alert.alertType = "error";
      //   alert.alertMessage = `${err.message || err}`;
      //   alert.$refs.alertPrompt.showAlert("This is an example alert.", "error");
      // }
    }
  },
};

// const formChange = (e) => {
//   setLoading(true);
//   const data = new FormData();
//   data.append("file", e.target.files[0]);
//   data.append("upload_preset", "assetmanagement");
//   fetch("https://api.cloudinary.com/v1_1/hammy06/image/upload", {
//     method: "post",
//     mode: "cors",
//     body: data,
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.secure_url);
//       setFormData({
//         ...formData,
//         [e.target.name]: data.secure_url,
//       });
//       // console.log(formData);
//     })
//     .catch((err) => {
//       setLoading(false);
//       toast.error(`${err}`);
//     })
//     .finally(() => setLoading(false));
// };
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