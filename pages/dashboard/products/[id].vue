<template>
  <MainLayout>
    <div :class="{ 'user-details-component': mobile }">
      <!-- back button -->
      <GoBackButton style="margin-top: 28px; margin-left: 16px" />
      <!-- ----------- -->

      <div class="product-detail-con" v-if="product">
        <div class="product__header__wrap">
          <h3>Product details</h3>
          <DynamicButton
            @clickButton="editProductByID"
            class="auto"
            buttonText="Edit product"
            size="standard"
            type="secondary"
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
                <g id="edit-write-alt">
                  <path
                    id="Vector"
                    d="M2.5 17.5H17.5"
                    stroke="#0009B3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M3.75033 11.25L12.0837 2.91669C12.774 2.22634 13.8933 2.22634 14.5837 2.91669C15.274 3.60705 15.274 4.72634 14.5837 5.41669L6.25033 13.75L2.91699 14.5834L3.75033 11.25Z"
                    stroke="#0009B3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </template>
          </DynamicButton>
        </div>
        <!-- product details page for desktop view -->
        <div class="product-details-wrapper">
          <div class="product-details-main">
            <div class="product-img-thumb">
              <!-- image container -->
              <div class="product-img zoom-container" ref="zoomContainer">
                <!-- <img :src="require(`~/assets/images/${product.images[productImage]}`)
                    " class="zoom-image" ref="zoomImage" /> -->
                <img
                  v-if="product"
                  :src="product?.data?.product?.images[`${productImage}`]?.url"
                  alt="Product Image"
                  class="zoom-image"
                  ref="zoomImage"
                />
                <!-- <img src="~/assets/images/p1.png" alt="" /> -->
              </div>
              <!-- --------------- -->

              <!-- product thumbnail under the main product image -->
              <div class="product-thumb">
                <div
                  class="thumb"
                  v-for="(image, index) in product?.data?.product?.images"
                  :key="index"
                  @click="changeImage(index)"
                >
                  <img :src="image?.url" alt="Product Image" />
                </div>
                <!-- -------------------------------------------- -->
              </div>
            </div>
            <div class="product-details-content">
              <div class="product-details-title-like">
                <!-- product title, brand name and like button -->
                <div class="product-details-title">
                  <h3 class="h3-small-medium">
                    {{ product?.data?.product?.name }}
                  </h3>
                  <p class="product-details-brand">
                    Brand: <span>{{ product?.data?.product?.brand }}</span>
                  </p>
                </div>
              </div>
              <!-- ------------------------------- -->

              <p class="product-details-snippet">
                {{ product?.data?.product?.description }}
              </p>
              <div class="product-details-price-grp">
                <h3 class="h3-bold">
                  <span class="naira">₦</span>
                  {{ product?.data?.product?.actualPrice }}
                </h3>
                <h3 class="slash">
                  <span class="naira">₦</span>
                  {{ product?.data?.product?.discountPrice }}
                </h3>
              </div>

              <!-- -------------------------------- -->
              <Guarantee />
            </div>
          </div>
        </div>
        <!-- ---------------------------------- -->
      </div>
      <LoaderComponent v-if="!product"/>
    </div>
  </MainLayout>
</template>
    

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const id = ref("");
const product = ref(null);

const { params } = useRoute();
const pathArray = params.id.split("~");
const lastSegment = decodeURIComponent(pathArray[pathArray.length - 1]);
id.value = lastSegment;


onMounted(async () => {
  if (params.id) {
    const uri = "https://api.ipc-africa.com/api/v1/products/" + id.value;

    try {
      const response = await fetch(uri);
      if (response.ok) {
        product.value = await response.json();
        console.log(product.value);
      } else {
        console.error("Failed to fetch data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
});

const router = useRouter();
const editProductByID = async () => {
  await router.push(`/dashboard/products/edit-product/${id.value}`);
};
</script>



<script>
import MainLayout from "/layouts/MainLayout.vue";
export default {
  components: { MainLayout },
  // Other component properties and methods
  data() {
    return {
      pageTitle: "IPC | Market",
      mobile: false,
      //   productId: null,
      //   productTitle: null,
      //   product: {},
      productImage: 0,
      currentPage: "",
      inCart: false,
      loading: false,
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  computed: {},
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
    const zoomLevel = 2; // Change this value to adjust the zoom level
    const addZoomListeners = () => {
      const zoomImage = this.$refs.zoomImage;
      const zoomContainer = this.$refs.zoomContainer;
      if (!zoomImage) {
        return;
      }
      zoomImage.addEventListener("mousemove", (e) => {
        const mouseX = e.offsetX / zoomContainer.offsetWidth;
        const mouseY = e.offsetY / zoomContainer.offsetHeight;
        zoomImage.style.transformOrigin = `${mouseX * 100}% ${mouseY * 100}%`;
        zoomImage.style.transform = `scale(${zoomLevel})`;
      });
      zoomImage.addEventListener("mouseleave", () => {
        zoomImage.style.transform = "scale(1)";
      });
    };
    addZoomListeners();
    this.zoomInterval = setInterval(() => {
      addZoomListeners();
    }, 1000 * 60); // Check every minute
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
    clearInterval(this.zoomInterval);
  },
  methods: {
    // editProductByID() {
    //   this.$router.push(`/dashboard/products/edit-product/${productId}`);
    // },
    checkScreenSize() {
      if (window.innerWidth <= 951) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    changeImage(index) {
      this.productImage = index;
    },
  },
};
</script>
    
<style scoped>
.zoom-container {
  position: relative;
  overflow: hidden;
}

.zoom-image {
  transition: transform 0.2s ease-in-out;
}

.product-detail-con {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 28px 16px;
}

.mobile-product-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.product-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}

.product-details-wrapper {
  display: flex;
  /* display: none !important; */
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 124px;
}
.product__header__wrap {
  display: flex;
  max-width: 990px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.product-details-main {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 51px;
}

.product-img-thumb {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 100%;
  max-width: 272px;
}

.product-img {
  width: 266.67px;
  height: 300px;

  /* Grey/Grey6 */

  background: #f4f5f8;
  border-radius: 8px;
}

.product-img img {
  object-fit: contain;
  height: inherit;
  margin-inline: auto;
}

.product-thumb {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 272px;
  height: 48px;
}

.thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: 48px;
  height: 48px;

  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 8px;
}

.thumb img {
  height: 90%;
}

.product-details-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  max-width: 359.55px;
}

.product-details-title-like {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  justify-content: space-between;
  gap: 16px;

  width: 100%;
  /* max-width: 359.55px; */

  position: relative;
}

.product-details-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 100%;
  /* max-width: 255.55px; */
}

.product-details-title h3 {
  color: var(--grey-grey1);
}

.product-details-brand {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.product-details-brand span {
  color: var(--primary-p300);
}

.counter-btn .circle {
  background: var(--primary-p300);
}

.counter-btn .circle svg path {
  stroke: var(--white) !important;
}

.circle {
  /* position: absolute; */
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  gap: 10px;

  width: 32px;
  height: 32px;

  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 100px;
}

p.product-details-snippet {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

.product-details-price-grp {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
}

.counter-btn {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 16px;
  max-width: 300px;
  width: 100%;
}

.counter-btn .circle {
  position: relative;
  /* Primary/P75 */

  border: 1px solid var(--primary-p75);
  width: 40px;
  height: 40px;
}

.counter {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
.slash {
  color: var(--grey-grey3, #7e8494);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
  /* text-decoration-line: strikethrough; */
  text-decoration-line: line-through;
}

@media (min-width: 950px) {
  .webskeleton {
    display: block;
  }

  .SkeletonLoader {
    display: none;
  }
}

@media (max-width: 950px) {
  .product-top-wrap {
    padding: 0;
    gap: 8px;
  }

  .webskeleton {
    display: none;
  }

  .SkeletonLoader {
    display: block;
  }
}
</style>
    
  <style>
.exact.nuxt-link-active .desktop-nav {
  background: var(--primary-p300);
}

.exact.nuxt-link-active .desktop-nav p {
  color: #fff;
}

.exact.nuxt-link-active .desktop-nav svg {
  stroke: #fff;
}

.exact.nuxt-link-active .desktop-nav .nav-content svg path {
  stroke: #fff !important;
}
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
    