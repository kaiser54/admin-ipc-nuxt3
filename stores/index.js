import { defineStore } from "pinia";

const API_URL = "http://localhost:8000/api/v1";

export const useIPCStore = defineStore("IPCStore", {
  state: () => ({
    products: [],
    categories: [],
    totalProductCount: [],
    filteredProducts: [],
    customer: [],
    loading: false,
    searchQuery: "",
  }),

  getters: {
    searchTasks() {
      if (!this.searchQuery) {
        return this.products;
      }
      const query = this.searchQuery.toLowerCase();
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    },

    filteredProductsBySearch() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        return this.products;
      }

      return this.products.filter((product) => {
        return (
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        );
      });
    },
  },

  actions: {
    async fetchProducts() {
      this.loading = true;
      const res = await fetch(`${API_URL}/products/`);
      const data = await res.json();
      this.products = data?.data?.products;
      this.loading = false;
    },

    async fetchCategories() {
      this.loading = true;
      const res = await fetch(`${API_URL}/categories/`);
      const data = await res.json();

      this.categories = data?.data?.categories;
      this.loading = false;
    },

    async fetchProductsCount() {
      this.loading = true;
      const res = await fetch(
        `${API_URL}/products/total-product-count/`
      );
      const data = await res.json();

      this.totalProductCount = data?.data;
      this.loading = false;
    },

    // async fetchCustomerInfo() {
    //   this.loading = true;
    //   const res = await fetch(
    //     "https://api.ipc-africa.com/api/v1/products/total-product-count/"
    //   );
    //   const data = await res.json();

    //   this.totalProductCount = data?.data;
    //   this.loading = false;
    // },

    async fetchCustomerInfo(id) {
      this.loading = true;

      const res = await fetch(
        `${API_URL}/business-customers/${id}`
      );
      const firstSourceData = await res.json();

      if (firstSourceData?.data) {
        this.customer = firstSourceData.data.customer;
        console.log(this.customer);
        this.loading = false;
        return;
      }

      // const res2 = await fetch(
      //   `https://api.ipc-africa.com/api/v1/individual-customers/${id}`
      // );
      // const secondSourceData = await res2.json();

      // if (secondSourceData?.data) {
      //   this.customer = secondSourceData.data.customer;
      //   console.log(this.customer);
      // }

      this.loading = false;
    },

    updateSearchQuery(query) {
      this.searchQuery = query;
    },
  },
});
