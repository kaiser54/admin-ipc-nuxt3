<template>
  <MainLayout> </MainLayout>
</template>

<script setup>
import MainLayout from "/layouts/MainLayout.vue";
</script>

<script>
export default {
  created() {
    this.$router.push('/dashboard'); // Corrected line
  },
};
</script>
