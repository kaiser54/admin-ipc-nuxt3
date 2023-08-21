<template>
  <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Order ID</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(order) in orders" :key="order._id">
        <td>
          <div class="product-info">
            <img :src="getProductImage(order.products)" alt="Product Image" />
            <span class="product-name">{{
              getProductNames(order.products)
            }}</span>
          </div>
        </td>
        <td>{{ order._id }}</td>
        <td>{{ order.totalPrice }}</td>
        <td>{{ order.status || "PROCESSING" }}</td>
      </tr>
    </tbody>
  </table>
</template>
  
  <script>
export default {
  props: {
    data: {
    //   type: Object,
      required: true,
    },
  },
  computed: {
    orders() {
    //   return this.data.data.orders;
      return this.data;
    },
  },
  methods: {
    getProductImage(products) {
      if (products.length === 0) {
        return ""; // Return a default image URL
      } else if (products.length === 1) {
        return products[0].images[0].url;
      } else {
        return products.map((product) => product.images[0].url).join(",");
      }
    },
    getProductNames(products) {
      if (products.length === 0) {
        return "No products";
      } else if (products.length === 1) {
        return products[0].name;
      } else {
        const truncatedNames = products
          .map((product) => product.name)
          .join(", ")
          .substring(0, 30); // Adjust the character limit as needed
        return truncatedNames;
      }
    },
  },
};
</script>
  
  <style scoped>
/* Add your styling here */
.product-info {
  display: flex;
  align-items: center;
}
.product-info img {
  max-width: 50px;
  margin-right: 10px;
}
.product-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
  