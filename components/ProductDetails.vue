<template>
  <div>
    <!-- back button -->
    <GoBackButton style="margin-top: 28px; margin-left: 16px" v-if="!showBtn" />
    <DynamicButton
      style="margin-top: 28px; margin-left: 16px"
      @clickButton="$emit('back')"
      class="auto"
      buttonText="Go back"
      size="small"
      type="neutral"
      icon="icon-left"
      v-if="showBtn"
    >
      <template v-slot:svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M10.6666 2.66699L5.33325 8.00033L10.6666 13.3337"
            stroke="#303237"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
    </DynamicButton>
    <!-- ----------- -->

    <div class="product-detail-con">
      <div class="product__header__wrap">
        <h3>Product details</h3>
        <DynamicButton
          @clickButton="$emit('buttonClick')"
          class="auto"
          :buttonText="buttonText"
          :size="size"
          :type="type"
          :icon="icon"
        >
          <template v-slot:svg>
            <slot name="svg" />
          </template>
        </DynamicButton>
      </div>
      <!-- product details page for desktop view -->
      <div class="product-details-wrapper">
        <div class="product-details-main">
          <div class="product-img-thumb">
            <!-- image container -->
            <div class="product-img zoom-container" ref="zoomContainer">
              <img
                :src="mainImage"
                alt="Product Image"
                class="zoom-image"
                ref="zoomImage"
              />
            </div>
            <!-- --------------- -->

            <!-- product thumbnail under the main product image -->
            <div class="product-thumb">
              <div class="thumb" v-for="(image, index) in productImage" :key="index">
                <img :src="image" @click="replaceProductImage(image)" />
              </div>
              <!-- -------------------------------------------- -->
            </div>
          </div>
          <div class="product-details-content">
            <div class="product-details-title-like">
              <!-- product title, brand name and like button -->
              <div class="product-details-title">
                <h3 class="h3-small-medium">
                  {{ dataProp.productName }}
                </h3>
                <p class="product-details-brand">
                  Brand: <span>Mama’s Choice</span>
                </p>
              </div>
            </div>
            <!-- ------------------------------- -->

            <p class="product-details-snippet">
              {{ dataProp.description }}
            </p>
            <div class="product-details-price-grp">
              <h3 class="h3-bold"># {{ dataProp.price }}</h3>
            </div>

            <!-- -------------------------------- -->
            <Guarantee />
          </div>
        </div>
      </div>
      <!-- ---------------------------------- -->
    </div>
  </div>
</template>
    
<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  showBtn: {
    type: Boolean,
    default: false,
  },
  buttonText: {
    type: String,
  },
  size: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  dataProp: {
    type: Object,
  },
  productImage: {
    type: Array,
  },
});
</script>

<script>
export default {
  data() {
    return {
      mainImage: "", // Initially empty or provide a default image URL
    };
  },
  created() {
    if (this.productImage.length > 0) {
      this.mainImage = this.productImage[0]; // Set the first thumbnail as the initial product image
    }
  },
  methods: {
    replaceProductImage(image) {
      this.mainImage = image;
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