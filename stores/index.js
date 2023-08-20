import { defineStore } from "pinia";

export const useIPCStore = defineStore("IPCStore", {
  state: () => ({
    products: [],
    categories: [],
    totalProductCount: [],
    filteredProducts: [],
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

      const filteredProducts = this.products.filter((product) => {
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

    updateSearchQuery(query) {
      this.searchQuery = query;
    },
  },
});
