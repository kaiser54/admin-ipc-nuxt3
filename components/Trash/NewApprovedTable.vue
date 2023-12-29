<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Activity</th>
            <th>Account Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in items"
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
                :show="showDots[item.id]"
                @showDots="showDots(item.id)"
                @revokeLink="revokeLink(item.id)"
                @resendLink="resendLink(item.id)"
                @suspendUser="suspendUser(item.id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="buttons">
        <button :disabled="selectedItems.length === 0" @click="revokeUser">
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
  import { ref } from "vue";
  
  const items = ref([
    {
      id: 1,
      email: "user1@example.com",
      date: "23-02-022",
      name: "User 1",
      activity: "Active",
    },
    {
      id: 2,
      email: "user2@example.com",
      date: "23-02-023",
      name: "User 2",
      activity: "Pending",
    },
    {
      id: 3,
      email: "user3@example.com",
      date: "23-02-024",
      name: "User 3",
      activity: "Pending",
    },
    // Add more items as needed
  ]);
  const type = ref("individual");
  const buttonText = ref({});
  const selectedItems = ref([]);
  
  const isButtonDisabled = (itemId) => selectedItems.length === 0 || !selectedItems.includes(itemId);
  
  const showDots = (itemId) => {
    showDots.value[itemId] = !showDots.value[itemId];
  };
  
  const revokeLink = (itemId) => {
    buttonText.value[itemId] = buttonText.value[itemId] === "Approved" ? "Approve" : "Revoked";
    showDots.value[itemId] = false;
  };
  
  const resendLink = () => {
    // Logic to handle resending links
  };
  
  const suspendUser = (itemId) => {
    selectedItems.forEach((selectedItemId) => {
      buttonText.value[selectedItemId] = "Suspend";
      showDots.value[selectedItemId] = false;
    });
  };
  
  const revokeUser = () => {
    selectedItems.forEach((selectedItemId) => {
      buttonText.value[selectedItemId] = "Approve";
      showDots.value[selectedItemId] = false;
    });
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
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
    width: 20px;
    height: 20px;
  }
  
  input[type="checkbox"]:checked {
    background-color: green;
  }
  
  input[type="checkbox"]:checked::before {
    content: "\2713";
    /* Checkmark symbol */
    color: white;
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  