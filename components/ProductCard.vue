<template>
  <!-- product card container starts here -->

  <div class="product-card">
    <!-- <nuxt-link :to="{ name: 'product', params: { id: product.id, title: product.title } }"> -->
    <nuxt-link :to="`/dashboard/products/${product.name}~${product._id}`">
      <div class="product-img-grp">
        <!-- <img :src="product.image" alt="" /> -->

        <!-- product image -->
        <div class="image-container">
          <!-- <img :src="require(`~/assets/images/${product.image}`)" /> -->
          <!-- <img :src="product.image" alt="Product Image" /> -->
          <img :src="product?.images[1]?.url" alt="Product Image" />
        </div>
        <!-- -------------------------------- -->
      </div>
    </nuxt-link>

    <!-- product details here -->

    <div class="productcard-details">
      <div class="productcard-name text-container">
        <p>{{ product?.name }}</p>
      </div>
      <div class="productcard-price">
        <p>$ {{ product?.discountPrice }}</p>
        <p class="slashprice">$ {{ product?.actualPrice }}</p>
      </div>
    </div>

    <!-- ------------------------- -->

    <!-- edit card button  -->

    <DynamicButton buttonText="Edit product" size="small" type="secondary">
    </DynamicButton>

    <!-- -------------------------------- -->
  </div>
</template>
  
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    product: {
      //   type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {},
};
</script>
  
<style scoped>
a {
  width: 100%;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  gap: 8px;
  width: 100%;
  max-width: 227px;
  height: 309px;

  /* White */

  background: var(--white);
  border-radius: 8px;
  transition: all 0.2s ease-in;
}

.product-card:hover {
  /* Product card hover */

  box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
}

.product-img-grp {
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 206px;
  width: 100%;
  height: 100%;
  max-height: 161px;
  position: relative;

  /* White */

  background: var(--white);
  border-radius: 8px;
}

.circle {
  position: absolute;
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
  z-index: 1;
}

.circle .liked {
  fill: red;
}

.image-container {
  max-width: 139px;
  width: 100%;
  /* Set the desired width */
  height: 149px;
  /* Set the desired height */
  overflow: hidden;
  /* Hide any overflowing content */
  position: relative;
  /* Establish a positioning context for the child image */
}

.image-container img {
  width: 100%;
  /* Make the image fill the container */
  height: 100%;
  /* Maintain the image's aspect ratio */
  object-fit: contain;
  /* Clip the image to fit within the container */
  margin-inline: auto;
}

.productcard-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  max-width: 206px;
  height: 76px;
}

.productcard-name p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

.productcard-price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.productcard-price p {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: right;

  /* Grey/Grey1 */
  color: var(--grey-grey1);
}

.productcard-price .slashprice {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  text-align: right;
  text-decoration-line: line-through;

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

button p {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  /* Primary/P300 */

  color: var(--primary-p300);
}

.counter-btn {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 16px;
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

@media (max-width: 950px) {
  .image-container {
    height: 118px;
  }

  .product-card {
    width: 167px;
    /* height: 287px; */
    justify-content: space-between;
  }

  .product-img-grp img {
    max-width: 100px;
    width: 100%;
  }

  .productcard-details {
    max-width: 141px;
    width: 100%;
  }

  .productcard-name p {
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
  }

  button svg {
    display: none;
  }

  .counter-btn svg {
    display: block;
  }
}

@media (max-width: 374px) {
  .product-card {
    max-width: 150px;
    width: 100%;
  }

  .productcard-name p {
    width: 100px;
  }

  .productcard-price {
    gap: 0;
    flex-direction: column;
  }
}

@media (max-width: 339px) {
  .product-card {
    max-width: 120px;
    width: 100%;
  }

  .productcard-name p {
    width: 100px;
  }

  .product-card {
    height: auto;
  }
}
</style>
  