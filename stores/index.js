import { defineStore } from "pinia";

export const useIPCStore = defineStore("IPCStore", {
  state: () => ({
    products: [],
    categories: [],
    totalProductCount: [],
    filteredProducts: [],
    loading: false,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true;
      const res = await fetch("http://localhost:8000/api/v1/products/");
      const data = await res.json();
      this.products = data?.data?.products;
      this.loading = false;
    },

    async fetchCategories() {
      this.loading = true;
      const res = await fetch("http://localhost:8000/api/v1/categories/");
      const data = await res.json();

      this.categories = data?.data?.categories;
      this.loading = false;
    },

    async fetchProductsCount() {
      this.loading = true;
      const res = await fetch(
        "http://localhost:8000/api/v1/products/total-product-count/"
      );
      const data = await res.json();

      this.totalProductCount = data?.data;
      this.loading = false;
    },
  },
});
