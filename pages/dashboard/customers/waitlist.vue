<template>
   <div class="container">
        <MainLayout>
            <div class="dash__container">
                <Waitlist-UserMain/>
            </div>
        </MainLayout>
   </div>
</template>

<script setup>
import MainLayout from "/layouts/MainLayout.vue";
</script>

<style scoped>
.router-link-exact-active .desktop-nav {
  background: var(--primary-p300);
}
</style>