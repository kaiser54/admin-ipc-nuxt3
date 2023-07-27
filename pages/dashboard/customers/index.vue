<template>
  <MainLayout>
    <div>
      <div class="dash__container">
        <div class="dash__card">
          <DynamicDashCard
            cardName="Total customers"
            :counterName="productsCount"
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
                    d="M5.84692 5.84692L5.8335 5.8335"
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </template>
          </DynamicDashCard>
          <DynamicDashCard cardName="Business" :counterName="categoriesCount">
            <template v-slot:svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="menu-hambuger">
                  <path
                    id="Vector"
                    d="M4.1665 5.8335H15.8332"
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M4.1665 10H15.8332"
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M4.1665 14.1665H15.8332"
                    stroke="#565C69"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </template>
          </DynamicDashCard>
          <DynamicDashCard cardName="Individual" :counterName="inStock">
            <template v-slot:svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow-bottom-left">
                  <path
                    id="Vector"
                    d="M4.69678 15.3034V7.0538M15.3034 4.69678L4.69678 15.3034L15.3034 4.69678ZM4.69678 15.3034L12.9464 15.3033L4.69678 15.3034Z"
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
          heading="New Customers"
          :tableData="tableData"
          :showBtn="false"
          :tableHeaders="tableHeaders"
        >
          <template v-slot:tableFilter>
            <div class="filter__tabs">
              <div
                v-for="(tab, index) in tabs"
                :key="index"
                class="tab tab-standard"
                @click="toggleTab(index)"
                :class="{ clicked: activeTab === index }"
              >
                {{ tab }}
              </div>
            </div>
          </template>
        </TableComp>
      </div>
    </div>
    <LoaderComponent v-if="loading" />
  </MainLayout>
</template>
    
  <script>
import MainLayout from "/layouts/MainLayout.vue";
import LoaderComponent from "/components/LoaderComponent.vue";
export default {
  components: { MainLayout, LoaderComponent },
  data() {
    return {
      products: [],
      categoriesCount: 0,
      productsCount: 0,
      inStock: 0,
      outOfStock: 0,
      loading: false,
      displayText: "All",
      tabs: ["All", "Business", "Individual"],
      activeTab: 0, // set the default active tab to be "All"
      tableHeaders: [
        "Product’s name",
        "Date",
        "Order ID",
        "Quantity",
        "Price",
        "Status",
      ],
      tableData: [
        {
          id: 1,
          name: "Mama’s pride rice",
          date: "2022-05-01",
          orderId: "12345",
          quantity: 2,
          price: 10.99,
          status: "Completed",
        },
      ],
    };
  },
  created() {
    this.fetchCategories();
    this.fetchProductsCount();
    this.fetchProducts();
  },
  methods: {
    toggleTab(index) {
      this.activeTab = index;
    },
    redirectToCreateProductPage() {
      this.$router.push("/dashboard/products/new-product");
    },
    fetchCategories() {
      this.$devInstance
        .get("/categories")
        .then((res) => (this.categoriesCount = res?.data?.results))
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
    fetchProductsCount() {
      this.loading = true;
      this.$devInstance
        .get("/products/total-product-count")
        .then((res) => {
          this.productsCount = res?.data?.data?.productsCount;
          this.inStock = res?.data?.data?.productCountInStock;
          this.outOfStock = res?.data?.data?.productCountNotInStock;
        })
        .catch((err) => consolee.log(err))
        .finally(() => (this.loading = false));
    },
    fetchProducts() {
      this.loading = true;
      this.$devInstance
        .get("/products")
        .then(
          (res) => (
            (this.products = res?.data?.data?.products),
            console.log(this.products)
          )
        )
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
  },
};
</script>
    
  <style scoped>
.dash__button {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-top: 16px;
  justify-content: flex-end;
  max-width: 1000px;
}

.dash__card {
  width: fit-content;
  gap: 20px;
}

.product__listing {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  align-items: flex-start;
  gap: 16px;
}
</style>