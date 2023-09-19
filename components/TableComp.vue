<template>
  <div class="table__container">
    <div class="table__header">
      <h3>{{ heading }}</h3>

      <DynamicButton
        v-if="showBtn"
        class="d__btn"
        buttonText="View all"
        icon="icon-right"
        size="small"
        type="neutral"
        @clickButton="goToRoutePage"
      >
        <template v-slot:svg>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="chevron-right-arrow">
              <path
                id="Vector"
                d="M5.3335 3.16666L10.6668 8.49999L5.3335 13.8333"
                stroke="#303237"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </template>
      </DynamicButton>
    </div>
    <slot name="tableFilter" />
    <div class="table__wrapper">
      <table style="width: 100%">
        <thead>
          <tr>
            <th v-for="header in tableHeaders" :key="header">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="order in orders"
            :key="order._id"
            @click="userRoute(order._id)"
          >
            <!-- <td style="display: flex; align-items: center; gap: 5px" v-for="product in item.products"
            :key="product.id">
              <div class="img">
                <img src="@/assets/images/p1.png" alt="" />
              </div>
              {{ product?.name }}
            </td> -->
            <td>
              <div class="product-info">
                <div class="product_image_group">
                  <div
                    class="product-images"
                    v-for="(image, index) in getProductImages(order.products)"
                    :key="index"
                  >
                    <img :src="image?.url" alt="Product Image" />
                  </div>
                </div>
                <span class="product-name">{{
                  getProductNames(order.products)
                }}</span>
              </div>
            </td>
            <td>{{ formatDate(order.date) || "22-22-22" }}</td>
            <td>{{ order._id }}</td>
            <td>{{ order.products.length }}</td>
            <td>{{ order.totalPrice }}</td>
            <td style="text-align: -webkit-right">
              <!-- <span
                v-if="item.status === 'Pending'"
                :class="['tag', 'pending']"
                >{{ item.status }}</span
              >
              <span v-else :class="['tag', 'verified']">{{ item.status }}</span> -->
              <DynamicTags
                :tagText="order.status"
                :size="size"
                :type="getTagType(order.status)"
              />
              <!-- <DynamicTags :tagText="tagText" :size="size" :type="type"/> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    tableHeaders: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true, // just incase the table headers are different accross each pages
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selectedIndex: 2,
      listSelect: [
        {
          title: "Order procesing",
          type: "warning",
          size: "small",
        },
        {
          title: "Shipped",
          type: "info",
          size: "small",
        },
        {
          title: "Delivered",
          type: "positive",
          size: "small",
        },
      ],
    };
  },
  methods: {
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
        return productImages ? productImages[0] : product.product.images[0];
      });

      // Log the chosen images to the console
      console.log("Chosen Images:", images);

      return images;
    },
    getProductNames(products) {
  if (products.length === 0) {
    return "No products";
  } else if (products.length === 1) {
    return products[0]?.name || products[0]?.product.name || "No name";
  } else {
    const truncatedNames =
      products
        .map((product) => product?.name || product?.product.name || "No name")
        .join(", ")
        .substring(0, 5) + "..."; // Adjust the character limit as needed
    return truncatedNames;
  }
}
,
    getTagType(status) {
      if (status === "PROCESSING") {
        return "warning";
      } else if (status === "SHIPPED") {
        return "info";
      } else if (status === "DELIVERED") {
        return "positive";
      } else {
        return ""; // Handle any other cases if needed
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
  computed: {
    orders() {
      //   return this.data.data.orders;
      return this.data;
    },
    tagText() {
      return this.listSelect[this.selectedIndex].title;
    },
    type() {
      return this.listSelect[this.selectedIndex].type;
    },
    size() {
      return this.listSelect[this.selectedIndex].size;
    },
    statusTagType() {
      if (this.statusTagText === "In Active") {
        return "warning";
      } else {
        return "info";
      }
    },
  },
};
</script>

<style scoped>
.table__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
}
.table__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.d__btn {
  width: auto;
}
.table__wrapper {
  display: flex;
  width: 100%;
  padding: 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  border-radius: 16px;
  border: 1px solid var(--grey-grey5, #e5e7ef);
  background: var(--white, #fff);
}
table,
th,
td {
  border: none;
  border-collapse: collapse;
}
th,
td {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  /* padding-right: 40px; */
  text-align: left;
}

th,
td {
  border-bottom: 1px solid var(--grey-grey5);
}

tr {
  transition: all 0.1s ease-in-out;
  cursor: pointer;
}

tr:hover {
  background-color: var(--grey-grey6);
}

thead tr:hover {
  background-color: none !important;
}
th:last-child {
  text-align: center;
}

span.tag {
  width: 105px;
}

.img {
  width: 32px;
  height: auto;
}

.product_image_group {
  display: flex;
  align-items: flex-start;
  max-width: 73px;
  width: 100%;
  gap: -11.5px;
}

.product-images {
  width: 36px;
  height: 36px;
  border-radius: 50%; /* Makes the div circular */
  overflow: hidden; /* Clips content that goes beyond the circular boundary */
}
.product-images img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintains aspect ratio while covering the circular container */
}

.product-info {
  display: flex;
  align-items: center;
  gap: 5px;
}

@media (max-width: 1300px) {
  .sticky-header {
    top: 192px;
  }
}

@media (max-width: 1040px) {
  .sticky-header {
    top: 213px;
  }
}
</style>