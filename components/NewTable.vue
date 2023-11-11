<template>
  <div class="table__container">
    <div class="table__header">
      <h3>{{ heading }}</h3>

      <DynamicButton
        v-if="showBtn"
        class="d__btn"
        buttonText="View all"
        icon="icon-right"
        size="small"
        type="neutral"
        @clickButton="goToRoutePage"
      >
        <template v-slot:svg>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="chevron-right-arrow">
              <path
                id="Vector"
                d="M5.3335 3.16666L10.6668 8.49999L5.3335 13.8333"
                stroke="#303237"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </template>
      </DynamicButton>
    </div>
    <slot name="tableFilter" />
    <div class="table__wrapper">
      <table style="width: 100%">
        <thead>
          <tr>
            <th v-for="header in tableHeaders" :key="header">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td
              @click="$emit('goUserRoute', item._id)"
              style="display: flex; align-items: center; gap: 16px"
            >
              <RandomAvatar :name="item.businessName" />
              {{item.businessName}}
            </td>
            <td @click="$emit('goUserRoute', item._id)">
              <!-- {{ truncateEmail(item.email, 18) }} -->
              {{ item.email }}
            </td>
            <!-- <td
              @click="$emit('goUserRoute', item._id)"
              style="display: flex; align-items: center; gap: 16px"
            >
              <RandomAvatar :name="`${item?.firstName} ${item?.lastName}`" />
              {{ item?.firstName }} {{ item?.lastName }}
            </td> -->
            <td @click="$emit('goUserRoute', item._id)">
              {{ convertDateFormat(item.createdAt) }}
            </td>
            <!-- <td @click="$emit('goUserRoute', item._id)">
              {{ item?.orders ? item?.orders : 0 }}
            </td> -->
            <td @click="$emit('goUserRoute', item._id)">
              {{ convertToTitleCase(item.type) }}
            </td>
            <td @click="$emit('goUserRoute', item._id)"><span class="naira">₦</span>450,000</td>
            <td
              @click="$emit('goUserRoute', item._id)"
              style="text-align: -webkit-right"
            >
              <DynamicTags tagText="Active" size="small" type="positive" />
            </td>
            <td>
              <SwitchToggle
                v-if="SwitchToggle"
                :customerID="item._id"
                :canBuyOnCredit="item.canBuyOnCredit"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    tableHeaders: {
      type: Array,
    },
    tableData: {
      type: Array,
      required: true, // just incase the table headers are different accross each pages
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
    SwitchToggle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    formattedCreatedAt() {
      return this.convertDateFormat(this.item.createdAt);
    },
  },
  methods: {
    userRoute(value) {
      this.$router.push("/dashboard/orders/2");
    },
    goToRoutePage() {
      this.$router.push("/dashboard/orders/2");
    },
    convertDateFormat(inputDate) {
      if (inputDate) {
        const date = new Date(inputDate);
        const year = date.getFullYear().toString().substr(-2); // Extract the last 2 digits of the year
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
        const day = date.getDate().toString().padStart(2, "0");

        return `${year}-${month}-${day}`;
      }
    },
    convertToTitleCase(inputString) {
      if (inputString) {
        return (
          inputString.charAt(0).toUpperCase() +
          inputString.slice(1).toLowerCase()
        );
      }
    },
    truncateEmail(email, maxLength) {
      if (!email) {
        return ""; // Return an empty string if id is undefined or null
      }

      if (email.length > maxLength) {
        return email.substring(0, maxLength) + "...";
      }

      return email;
    },
  },
  computed: {},
};
</script>
  
  <style scoped>
.table__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
}
.table__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.d__btn {
  width: auto;
}
.table__wrapper {
  display: flex;
  width: 1200px;
  padding: 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  border-radius: 16px;
  border: 1px solid var(--grey-grey5, #e5e7ef);
  background: var(--white, #fff);
}
table,
th,
td {
  border: none;
  border-collapse: collapse;
}
th,
td {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  /* padding-right: 40px; */
  text-align: left;
}

th,
td {
  border-bottom: 1px solid var(--grey-grey5);
}

tr {
  transition: all 0.1s ease-in-out;
  cursor: pointer;
}

tr:hover {
  background-color: var(--grey-grey6);
}

thead tr:hover {
  background-color: none !important;
}
th:last-child {
  text-align: center;
}

span.tag {
  width: 105px;
}

.img {
  width: 32px;
  height: auto;
}

/* 
  .sticky-header {
    position: sticky;
    top: 134px;
    background: var(--white);
    z-index: 2;
  } */

@media (max-width: 1300px) {
  .sticky-header {
    top: 192px;
  }
}

@media (max-width: 1040px) {
  .sticky-header {
    top: 213px;
  }
}
</style>