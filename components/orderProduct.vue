<template>
  <div class="order-wrapper">
    <div class="order-product">
      <div class="product_image_group">
        <div
          class="product-images"
          v-for="(image, index) in getProductImages(order?.products)"
          :key="index"
        >
          <img :src="image?.url" alt="Product Image" />
        </div>
      </div>
      <div class="order-product-details">
        <div class="order-content">
          <!-- <div class="title"> product name </div> -->
          <div class="title">{{ getProductNames(order?.products) }}</div>
          <div class="order-id-price">
            <div class="order-id">Order ID : {{ order?._id }}</div>
            <div class="order-qty">Qty: {{ getProductQuantity(order?.products) }}</div>
          </div>
          <div class="order-price">₦ {{ formatPriceWithCommas(order?.totalPrice) }}</div>
          <DynamicTags :tagText="tagText" :size="size" :type="type" />
        </div>

        <div class="price-qty">
          <div class="order-price">₦ {{ formatPriceWithCommas(order?.totalPrice) }}</div>
          <div class="order-qty">Qty: {{ getProductQuantity(order?.products) }}</div>
        </div>
      </div>
      <svg
        v-if="showSvg"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          d="M13.334 11.168L18.6673 16.5013L13.334 21.8346"
          stroke="#565C69"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
    },
    showSvg: {
      type: Boolean,
      default: true,
    },
    tagText: {
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
  },
  computed: {
    order() {
      //   return this.data.data.orders;
      return this.data;
    },
  },
  methods: {
    formatPriceWithCommas(price) {
      // Use the toLocaleString method with appropriate options to add commas
      return price.toLocaleString(undefined, { maximumFractionDigits: 2 });
    },
    userRoute(value) {
      this.$router.push(`/dashboard/orders/${value}`);
    },
    getProductImages(products) {
      // Use the `map` function to create a new array
      const images = products.slice(0, 3).map((product, index) => {
        // Access the `images` property of each product (assuming it's an array)
        const productImages = product.images;

        // Log the chosen products
        if (index < 3) {
          console.log(`Chosen Product ${index + 1}:`, product);
        }

        // Return the first image URL
        return productImages ? productImages[0] : product.product.images[0] || null;
      });

      // Log the chosen images to the console
      console.log("Chosen Images:", images);

      return images;
    },
    getProductQuantity(products) {
      let totalQuantity = 0;
      for (const product of products) {
        if (product.quantity) {
          totalQuantity += product.quantity;
        }
      }

      return totalQuantity;
    },
    getProductNames(products) {
      const number = products.length;
      if (number === 0) {
        return "No products";
      } else if (number === 1) {
        return products[0]?.product?.name;
      } else {
        const firstProductName =
          products[0].product.name.length > 16
            ? products[0].product.name.substring(0, 16) + "..."
            : products[0].product.name;
        const additionalProductCount = number - 1;
        return `${firstProductName} and ${additionalProductCount} more`;
      }
    },
    goToRoutePage() {
      // this.$router.push('/dashboard/orders/'`${value}`);
      this.$router.push("/dashboard/orders/2");
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month, zero-padded
      const day = String(date.getDate()).padStart(2, "0"); // Day, zero-padded
      return `${day}-${month}-${year}`;
    },
  },
};
</script>

<style scoped>
a {
  width: 100%;
  color: inherit;
}

.order-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  /* max-width: 784px; */
  width: 100%;
}

.order-product {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  gap: 16px;

  width: 100%;

  /* Grey/Grey5 */

  border: 1px solid var(--grey-grey5);
  border-radius: 16px;
}

.product_image_group {
  max-width: 146px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: -23px;
}

.product-images {
  width: 64px;
  height: 64px;
  border-radius: 50%; /* Makes the div circular */
  overflow: hidden; /* Clips content that goes beyond the circular boundary */

  border: 4px solid var(--white, #fff);
  background: var(--grey-grey-6, #f4f5f8);
}
.product-images img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintains aspect ratio while covering the circular container */
}

.order-product-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  max-width: 579px;
  width: 100%;
}

.order-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
}

.order-content .title {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.order-content .order-id-price .order-qty {
  display: none;
}

/* .order-content .order-id {
  display: none;
} */
.order-content .order-price {
  display: none;
}

.price-qty {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: auto;
}

.price-qty .order-price {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  white-space: nowrap;

  text-align: right;

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.price-qty .order-qty {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

@media (max-width: 950px) {
  .order-content {
    width: 100%;
  }

  .order-product-details {
    justify-content: flex-start;
    width: auto;
    max-width: fit-content;
  }

  .order-product {
    gap: 8px;
    align-items: flex-start;
  }

  .price-qty {
    display: none;
  }

  .order-content .title {
    white-space: nowrap;
    overflow: hidden;
    /* Hides overflowing text */
    text-overflow: ellipsis;
    /* Adds ellipsis (...) when text overflows */
    max-width: 300px;
    width: 100%;
    /* Adjust the width as needed */
  }

  .order-content .order-id-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .order-content .order-id {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    /* Grey/Grey2 */

    color: var(--grey-grey2);
  }

  .order-content .order-id-price .order-qty,
  .order-content .order-price {
    display: flex;
  }

  @media (max-width: 451px) {
    .order-content .title {
      max-width: 150px;
    }
    .order-product-details {
      width: 100%;
      max-width: 200px;
    }
  }

  @media (max-width: 450px) {
    .order-content {
      max-width: 190px;
    }

    .order-content .title {
      max-width: 150px;
    }
  }
}
</style>
