<template>
  <MainLayout>
    <div class="wrapper">
      <div class="dash__button">
        <h3>Customer information</h3>
        <DynamicButton
          class="auto"
          buttonText="View customer info"
          size="standard"
          type="neutral"
          icon="icon-right"
          :disabled="false"
        >
          <template v-slot:svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-right-arrow">
                <path
                  id="Vector"
                  d="M6.66699 3.33325L13.3337 9.99992L6.66699 16.6666"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </template>
        </DynamicButton>
      </div>
      <CustomerInfo></CustomerInfo>
      <div class="dash__button">
        <h3>Order details</h3>
        <DynamicButton
          class="auto"
          buttonText="Download invoice"
          size="standard"
          type="neutral"
          icon="icon-left"
          :disabled="false"
        >
          <template v-slot:svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2.5 11.6667V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V11.6667"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99967 14.1667L14.1663 9.62967M9.99967 2.5V14.1667V2.5ZM9.99967 14.1667L5.83301 9.62958L9.99967 14.1667Z"
                stroke="#303237"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
        </DynamicButton>
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
.wrapper {
  margin: 40px 20px;
}
.dash__button {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
</style>