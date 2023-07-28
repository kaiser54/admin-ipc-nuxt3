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
      <CustomerInfo :tagText="statusTagText" :type="statusTagType" />
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
      <div class="dash__button flex__row">
        <OrderProduct :tagText="tagText" :size="size" :type="type" />
        <UserInfo
          :data="data"
          style="max-width: 387px; width: 100%; margin-left: 20px"
        >
          <template v-slot:button>
            <div class="dash__button bdr">
              <DynamicTags :tagText="tagText" :size="size" :type="type"/>
              <!-- <div class="order__processing">Order Processing</div> -->
              <DynamicButton
                @clickButton="changeOrderStatus"
                size="small"
                type="ghost"
                buttonText="Change"
                class="auto"
              ></DynamicButton>
            </div>
          </template>
        </UserInfo>
      </div>
      <transition name="modal-fade">
        <!-- enter the PopModal an add router push to the button and remove the nuxt link -->
        <PopupModal
          v-if="orderSatatus"
          :animate="animate"
          title="Change order status"
          snippet="We have sent a secured reset link to your email. Click on the link to verify your email."
          buttonText="Cancel"
          buttonText2="Change"
          buttonClass="neutral-btn"
          buttonClass2="primary-btn"
          @okModal="okOrderStatus"
          @closeModal="changeOrderStatus"
          @closeModalBG="changeOrderStatus"
        >
          <template v-slot:selection>
            <div class="content-select">
              <div
                class="list-select border"
                :class="{ clicked: selectedItem === index }"
                v-for="(item, index) in listSelect"
                :key="index"
                @click="selectItem(index)"
              >
                <div class="list-select-header">
                  <DynamicTags
                    :tagText="item.title"
                    :size="item.size"
                    :type="item.type"
                  >
                  </DynamicTags>
                  <label>
                    <input
                      type="radio"
                      :value="item.title"
                      v-model="selectedItem"
                      hidden
                    />
                    <svg
                      :class="{ selected: selectedItem === index }"
                      viewBox="0 0 25 25"
                      width="25"
                      height="25"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        v-if="selectedItem === index"
                        d="M8.5,12l2.5,2.5L15.5,10"
                        fill="none"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </template>
        </PopupModal>
      </transition>
    </div>
  </MainLayout>
</template>
  
  <script>
import MainLayout from "/layouts/MainLayout.vue";
export default {
  components: { MainLayout },
  layout: "dashboardview",
  data() {
    return {
      data: {
        loll: "loading",
      },
      orderSatatus: false,
      animate: null,
      selectedItem: null,
      selectedIndex: 0,
      statusTagText: 'Active',
      statusTagType: null,
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
  computed: {
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
      if (this.statusTagText === 'In Active') {
        return 'warning';
      } else {
        return 'info';
      }
    },
  },
  methods: {
    changeOrderStatus() {
      this.animate = "animate__zoomIn";
      this.orderSatatus = !this.orderSatatus;
    },
    okOrderStatus() {
      this.selectedIndex = this.selectedItem;
      this.orderSatatus = false;
    },
    selectItem(value) {
      this.selectedItem = value;
    },
  },
};
</script>
  
  <style scoped>
.wrapper {
  margin: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 38px;
}
.dash__button {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.flex__row {
  flex-direction: row !important;
  align-items: flex-start;
}
.content-select {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
.list-select {
  cursor: default;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;

  /* max-width: 400px; */
  width: 100%;

  /* White */

  background: #ffffff;
  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 16px;
}

.clicked,
.list-select:hover {
  background: var(--grey-grey6, #f4f5f8);
}

.list-select-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-select-header label {
  margin-bottom: 0 !important;
}
svg circle {
  stroke: var(--grey-grey4);
  stroke-width: 2px;
  fill: none;
}

/* Checked styling */
.selected circle {
  stroke: none;
  fill: var(--primary-p300);
}
.title {
  /* Body Micro/Body Micro Regular */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
}
</style>