<template>
  <DynamicButton
    @clickButton="goBack"
    class="auto"
    buttonText="Go back"
    size="small"
    type="neutral"
    icon="icon-left"
  >
    <template v-slot:svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M10.6666 2.66699L5.33325 8.00033L10.6666 13.3337"
          stroke="#303237"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>
  </DynamicButton>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
</style>