<template>
  <div class="table-container" style="width:100%">
    <table style="width:100%">
      <thead>
        <tr>
          <th v-for="header in tableHeaders" :key="header"> 
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id" @click="toHistoryDetails">
          <td style="display: flex; align-items: center; gap: 5px">
            <div class="img">
              <img src="@/assets/images/p1.png" alt="" />
            </div>{{ item.name }}
          </td>
          <td>{{ item.date }}</td>
          <td>{{ item.orderId }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
          <td style="text-align: -webkit-right;">
            <span v-if="item.status === 'Pending'" :class="['tag', 'pending']">{{ item.status }}</span>
            <span v-else :class="['tag', 'verified']">{{ item.status }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    activeTabs: {
      type: Array,
      required: true,
    },
    tableHeaders: {
      type: Array,
      required: true,
    },
    tableData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      startDate: "",
      endDate: "",
    };
  },
  methods: {
    toHistoryDetails() {
      // const baseURL = "/dashboard/track orders/";
      // const baseURL = `/dashboard/track orders/${value}`;
      // this.$router.push(baseURL + value)
      // this.$router.push(`/dashboard/track orders/${value}`)
      this.$router.push(`/dashboard/track_orders/lol`)
      // console.log(window.location.origin + "/")
    },
  },
};
</script>

<style scoped>
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
  background-color: #efefef;
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
}</style>
