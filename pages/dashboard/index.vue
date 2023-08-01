<template>
  <MainLayout>
    <div class="dash__container">
      <div class="dash__card">
        <DynamicDashCard cardName="Total sales" counterName="10,543">
          <template v-slot:svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="ad-announcement-megaphone" clip-path="url(#clip0_4964_11174)">
                <path id="Vector"
                  d="M18.2788 13.0486L15.5318 2.81605C15.2331 1.70352 13.8658 1.29365 13.0023 2.05781L11.2709 3.59017C9.34417 5.2954 7.04614 6.5295 4.55874 7.1947C2.47664 7.75153 1.24269 9.89377 1.80058 11.9719C2.35848 14.0499 4.50028 15.2894 6.58239 14.7325C9.06975 14.0673 11.6782 13.9892 14.2011 14.5045L16.4682 14.9675C17.5988 15.1984 18.5775 14.1611 18.2788 13.0486Z"
                  stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Vector_2" d="M6.43115 6.66669L9.58326 18.3334" stroke="#565C69" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4964_11174">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </template>
        </DynamicDashCard>
        <DynamicDashCard cardName="New orders" counterName="205" :active="true">
          <template v-slot:svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="shopping-bag">
                <path id="Vector"
                  d="M2.5 7.49998C2.5 6.5795 3.24619 5.83331 4.16667 5.83331H15.8333C16.7538 5.83331 17.5 6.5795 17.5 7.49998V16.6666C17.5 17.5871 16.7538 18.3333 15.8333 18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6666V7.49998Z"
                  stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Vector_2"
                  d="M6.6665 8.33335V5.00002C6.6665 3.15907 8.15889 1.66669 9.99984 1.66669C11.8408 1.66669 13.3332 3.15907 13.3332 5.00002V8.07402"
                  stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </template>
        </DynamicDashCard>
        <DynamicDashCard cardName="Customers" counterName="328">
          <template v-slot:svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="user-group-accounts">
                <path id="Vector"
                  d="M7.49984 9.16667C9.34079 9.16667 10.8332 7.67428 10.8332 5.83333C10.8332 3.99238 9.34079 2.5 7.49984 2.5C5.65889 2.5 4.1665 3.99238 4.1665 5.83333C4.1665 7.67428 5.65889 9.16667 7.49984 9.16667Z"
                  stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Vector_2"
                  d="M1.6665 17.5V14.1667C1.6665 13.2462 2.4127 12.5 3.33317 12.5H11.6665C12.587 12.5 13.3332 13.2462 13.3332 14.1667V17.5"
                  stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Vector_3"
                  d="M13.3335 2.5C14.0505 2.68358 14.686 3.10058 15.1398 3.68526C15.5937 4.26993 15.84 4.98902 15.84 5.72917C15.84 6.46931 15.5937 7.1884 15.1398 7.77307C14.686 8.35775 14.0505 8.77475 13.3335 8.95833"
                  stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Vector_4" d="M15.8335 12.5H16.6668C17.5873 12.5 18.3335 13.2462 18.3335 14.1667V17.5"
                  stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </template>
          <template v-slot:selector>
            <div style="position: relative">
              <DynamicButton @clickButton="toggleDropdown" :buttonText="displayText" size="small" type="neutral"
                icon="icon-right">
                <template v-slot:svg>
                  <svg :class="{ rotate: rotate }" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="chevron-down-arrow">
                      <path id="Vector" d="M2.6665 5.33331L7.99984 10.6666L13.3332 5.33331" stroke="#303237"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                  </svg>
                </template>
              </DynamicButton>
              <div :class="{
                'dropdown-menu': true,
                'slide-in': showDropdown,
                'slide-out': !showDropdown,
              }">
                <ul>
                  <li v-for="option in tabs" :key="option" @click="selectOption(option)">
                    {{ option }}
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </DynamicDashCard>
        <DynamicDashCard cardName="Total products" counterName="1,298">
          <template v-slot:svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="tag-price-discount">
                <path id="Vector"
                  d="M2.5 10.3275V2.5H10.3275L17.0368 9.20933C17.6544 9.82683 17.6544 10.8282 17.0368 11.4458L11.4458 17.0368C10.8282 17.6544 9.82683 17.6544 9.20933 17.0368L2.5 10.3275Z"
                  stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Vector_2" d="M5.84692 5.84674L5.8335 5.83331" stroke="#565C69" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </template>
        </DynamicDashCard>
      </div>
      <TableComp heading="New orders" :tableData="tableData" :tableHeaders="tableHeaders" />
      <TableComp heading="New Customers" :tableData="tableData" :tableHeaders="tableHeaders">
        <template v-slot:tableFilter>
          <div class="filter__tabs">
            <div v-for="(tab, index) in tabs" :key="index" class="tab tab-standard" @click="toggleTab(index)"
              :class="{ clicked: activeTab === index }">
              {{ tab }}
            </div>
          </div>
        </template>
      </TableComp>
      <ImageUpload />
      <div>
        <MyInput id="username" label="Username" placeholder="Enter your username" :modelValue="username"
          @update:modelValue="username = $event" :error-message="usernameError" />

        <MyInput id="password" label="Password" placeholder="Enter your password" :modelValue="password"
          @update:modelValue="password = $event" type="password" :error-message="passwordError" />

        <button @click="login">Login</button>
      </div>
    </div>
  </MainLayout>
</template>
  
<script>
import MainLayout from "/layouts/MainLayout.vue";
export default {
  // layout: "dashboardview",
  components: { MainLayout },
  data() {
    return {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",

      rotate: false,
      showDropdown: false,
      displayText: "All",
      tabs: ["All", "Business", "Individual"],
      activeTab: 0, // set the default active tab to be "All"
      tableHeaders: [
        "Product’s name",
        "Date",
        "Order ID",
        "Quantity",
        "Price",
        "Status",
      ],
      tableData: [
        {
          id: 1,
          name: "Mama’s pride rice",
          date: "2022-05-01",
          orderId: "12345",
          quantity: 2,
          price: 10.99,
          status: "Completed",
        },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
      this.rotate = !this.rotate;
    },
    selectOption(option) {
      this.displayText = option;
      this.showDropdown = false;
    },
    toggleTab(index) {
      this.activeTab = index;
    },
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      console.log(data);
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  cursor: pointer;
  margin-top: 8px;
  position: absolute;
  top: 100%;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, transform 0.3s;

  display: flex;
  width: 135px;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 8px;
  background: var(--white, #fff);

  /* Select shadow */
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1),
    0px 4px 9px 0px rgba(0, 0, 0, 0.1), 0px 14px 23px 0px rgba(0, 0, 0, 0.05),
    0px 67px 27px 0px rgba(0, 0, 0, 0.01), 0px 105px 29px 0px rgba(0, 0, 0, 0);
}

.dropdown-menu ul {
  list-style: none;
  width: 100%;
}

.dropdown-menu ul li {
  display: flex;
  width: 100%;
  height: 48px;
  padding: 16px;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  color: var(--grey-grey2, #565c69);

  /* Body Small/Body Small Regular */
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  transition: 0.5s;
}

.dropdown-menu ul li:hover {
  background: var(--grey-grey6);
}

.slide-in {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.slide-out {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
}

.rotate {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}
</style>
  