<!-- ApprovedTable.vue -->
<template>
  <div class="filter-tabs">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="tab tab-standard"
      @click="toggleTab(index)"
      :class="{ clicked: activeTab === index }"
    >
      {{ tab }}
    </div>
  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              v-model="selectAll"
              @change="selectAllRows"
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Activity</th>
          <th>Account Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in filteredItems"
          :key="index"
          :class="{ 'selected-row': selectedItems.includes(item.id) }"
         
        >
          <td>
            <input type="checkbox" v-model="selectedItems" :value="item.id" />
          </td>
          <td>
            <TagStyle :type="type" />
            {{ item.name }}
          </td>
          <td>{{ item.email }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.activity }}</td>
          <td>
            <Approved
              :disabled="isButtonDisabled(item.id)"
              :buttonText="buttonText[item.id]"
              :itemId="item.id"
              :show="show[item.id]"
              :showDrop="showDrop[item.id]"
              :isButtonDisabled="isButtonDisable[item.id]"
              :isButtonRevoked="isButtonRevoked[item.id]"
              @showDots="showDots(item.id)"
              @revokeLinked="revokeLinked(item.id)"
              @resendLink="resendLink(item.id)"
              @removeUser="removeUser(item.id)"
              @showDropDown="showDropDown(item.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="buttons">
      <button :class="{rebuke: isTheButtonRevoked}" :disabled="selectedItems.length === 0" @click="revokeUser">
        Revoke User
      </button>
      <button :disabled="selectedItems.length === 0" @click="suspendUser">
        Suspend User
      </button>
      <button :disabled="selectedItems.length === 0" @click="resendLink">
        Resend Link
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const tabs = ref(["All", "Business", "Individual"]);

const items = ref([
  {
    id: 1,
    email: "user1@example.com",
    date: "23-02-022",
    name: "User 1",
    activity: "Active",
    type: "Business",
  },
  {
    id: 2,
    email: "user2@example.com",
    date: "23-02-023",
    name: "User 2",
    activity: "Pending",
    type: "Individual",
  },
  {
    id: 3,
    email: "user3@example.com",
    date: "23-02-024",
    name: "User 3",
    activity: "Active",
    type: "Business",
  },
  {
    id: 4,
    email: "user3@example.com",
    date: "23-02-024",
    name: "User 4",
    activity: "Pending",
    type: "Business",
  },
  {
    id: 5,
    email: "user3@example.com",
    date: "23-02-024",
    name: "User 5",
    activity: "Active",
    type: "Individual",
  },
  // Add more items as needed
]);
const type = ref("individual");
const buttonText = ref({});
const show = ref({});
const showDrop = ref({});
const isButtonDisable = ref({});
const isButtonRevoked = ref({});
const isTheButtonRevoked = ref(false);
const selectedItems = ref([]);
const disabledButtons = ref([]);
const selectAll = ref(false);
// let activeTab = 0;
const activeTab = ref(0)
const filteredItems = ref(items.value);

const toggleTab = (index) => {
  activeTab.value = index;
  console.log(index)
  filterItemsByType();
};

const filterItemsByType = () => {
  const selectedType = tabs.value[activeTab.value];
  filteredItems.value = selectedType === "All"
    ? items.value
    : items.value.filter(item => item.type === selectedType);
};


const isButtonDisabled = (itemId) => {
  return disabledButtons.value.includes(itemId);
};

const selectAllRows = () => {
  if (selectAll.value) {
    selectedItems.value = items.value.map((item) => item.id);
  } else {
    selectedItems.value = [];
  }
};

const initializeButtonText = () => {
  items.value.forEach((item) => {
    buttonText.value[item.id] = "Approve";
  });
};

initializeButtonText();

const toggleRowSelection = (itemId) => {
  const index = selectedItems.value.indexOf(itemId);
  if (index === -1) {
    selectedItems.value.push(itemId);
  } else {
    selectedItems.value.splice(index, 1);
  }
};

const showDots = (itemId) => {
  show.value[itemId] = true;
  isButtonDisable.value[itemId] = true;
  buttonText.value[itemId] = "Approved";
  items.value.forEach((item) => {
    if (item.id !== itemId) {
      showDrop.value[item.id] = false;
    }
  });
};

const showDropDown = (itemId) => {
  showDrop.value[itemId] = !showDrop.value[itemId];
  items.value.forEach((item) => {
    if (item.id !== itemId) {
      showDrop.value[item.id] = false;
    }
  });
};

const revokeLinked = (itemId) => {
  buttonText.value[itemId] = "Revoke Link"
  isButtonRevoked.value[itemId] = true;
  showDrop.value[itemId] = false;
  console.log(itemId)
};

const resendLink = (itemId) => {
  isButtonDisable.value[itemId] = true;
  buttonText.value[itemId] = "Approved";
  isButtonRevoked.value[itemId] = false;
  showDrop.value[itemId] = false;
};
const removeUser = (itemId) => {
  const indexToRemove = items.value.findIndex((item) => item.id === itemId);
  if (indexToRemove !== -1) {
    items.value.splice(indexToRemove, 1);
    selectedItems.value = selectedItems.value.filter((id) => id !== itemId);
  }
};

const removeSelectedUsers = () => {
  selectedItems.value.forEach((itemId) => {
    removeUser(itemId);
  });
};
const revokeUser = () => {
  selectedItems.value.forEach((itemId) => {
    
    if (!isButtonRevoked.value[itemId]) {
      show.value[itemId] = true;  
      buttonText.value[itemId] = "Revoke Link"
      isButtonRevoked.value[itemId] = true;
      isButtonDisable.value[itemId] = true;
      isTheButtonRevoked.value = true;
    }
  });
};





</script>

<style scoped>
.rebuke{
  display: none
}
.filter-tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.tab.clicked {
  border: 1px solid var(--secondary-s-300-base);
  background: var(--Secondary-S50);
}
.tab:hover.clicked {
  border: 1px solid var(--secondary-s-300-base);
  background: var(--Secondary-S50);
}

button {
  width: auto;
}
.tab {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--grey-grey6);
  border-radius: 100px;
  font-style: normal;
  font-weight: 500;
  color: var(--grey-grey2);
}
.tab:hover {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--grey-grey5);
  border-radius: 100px;
  font-style: normal;
  font-weight: 500;
  color: var(--grey-grey2);
}

.tab-standard {
  padding: 16px 24px;
  gap: 10px;
  font-size: 14px;
  line-height: 21px;
  height: 45px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  z-index: 1;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  padding: 8px;
  cursor: pointer;
}

.selected-row {
  background-color: #ccc;
}

.buttons {
  margin-top: 16px;
}

/* Styling for the select checkbox */
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  position: relative;
}

input[type="checkbox"]:checked {
  background-color: green;
}

input[type="checkbox"]:checked::before {
  content: "\2713";
  color: white;
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>



// @click="toggleRowSelection(item.id)"