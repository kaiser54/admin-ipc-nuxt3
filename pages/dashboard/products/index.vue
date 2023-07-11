<template>
  <MainLayout>
    <div>
      <div class="dash__button">
        <DynamicButton
          class="auto"
          buttonText="Create new category"
          size="standard"
          type="neutral"
          icon="icon-left"
          :disabled="true"
        >
          <template v-slot:svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="add-plus">
                <path
                  id="Vector"
                  d="M4.1665 9.99984H15.8332M9.99984 4.1665V15.8332V4.1665Z"
                  stroke="#BDC0CE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </template>
        </DynamicButton>
        <DynamicButton
          @clickButton="redirectToCreateProductPage"
          class="auto"
          buttonText="Add new product"
          size="standard"
          type="primary"
          icon="icon-left"
        >
          <template v-slot:svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="add-plus">
                <path
                  id="Vector"
                  d="M4.1665 9.99984H15.8332M9.99984 4.1665V15.8332V4.1665Z"
                  stroke="#BDC0CE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </template>
        </DynamicButton>
      </div>
      <div class="dash__container">
        <div class="dash__card">
          <DynamicDashCard cardName="Total products" counterName="1,298">
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
          <DynamicDashCard
            cardName="Categories"
            counterName="24"
            :active="true"
          >
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
          <DynamicDashCard cardName="Instock" counterName="102">
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
          <DynamicDashCard cardName="Out of stock" counterName="8">
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
                    d="M15.3034 4.69678V12.9463M4.69678 15.3034L15.3034 4.69678L4.69678 15.3034ZM15.3034 4.69678L7.05379 4.69679L15.3034 4.69678Z"
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
        <div class="product__listing">
          <ProductCard
            :product="product"
            v-for="product in products"
            :key="product.id"
          ></ProductCard>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
  
  <script>
import MainLayout from "/layouts/MainLayout.vue";
export default {
  components: { MainLayout },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      // const response = await fetch("https://fakestoreapi.com/products");
      const response = await fetch("https://dummyjson.com/products");
      if (response.ok) {
        const data = await response.json();
        this.products = data.products;
        // console.log(data.products);
      } else {
        console.error("Failed to fetch products:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },
  methods: {
    redirectToCreateProductPage() {
      this.$router.push("/dashboard/products/new-product");
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
  margin-top: 40px;
}
.product__listing {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  align-items: flex-start;
  gap: 16px;
}
</style>