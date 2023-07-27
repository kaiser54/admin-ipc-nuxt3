<template>
  <MainLayout>
    <div
    style="
      max-width: 990px;
      margin-left: 21px;
      margin-top: 16px;
      margin-bottom: 50px;
    "
  >
    <GoBackButton style="margin-bottom: 24px" />
    <div class="heading flex">
      <h3>Customer information</h3>
    </div>
  </div>
  </MainLayout>
</template>
    
    <script>
import MainLayout from "/layouts/MainLayout.vue";
export default {
  components: { MainLayout },
  layout: "dashboardview",
};
</script>
    
    <style scoped>
</style>