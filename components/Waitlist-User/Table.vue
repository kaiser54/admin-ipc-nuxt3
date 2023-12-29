<template>
<div class="total">
    <div class="table-container">
    <div class="top-container">
      <div class="filter-tabs">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab"
          @click="toggleTabLocal(index)"
          :class="{ clicked: activeTab === index }"
        >
          {{ tab }}
        </div>
      </div>
      <div class="warning">
        <p class="note">NOTE:</p>
        <div class="flexed">
          <Waitlist-UserTag :type="type2" />
          <p class="tagText">Business account</p>
        </div>
        <div class="flexed">
          <Waitlist-UserTag :type="type" />
          <p class="tagText">Individual account</p>
        </div>
      </div>
    </div>
    <div class="table__wrapper">
      <table style="width: 100%">
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
              <Waitlist-UserTag :type="item.type" />
              {{ item.name }}
            </td>
            <td>{{ item.email }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.activity }}</td>
            <td>
              <Waitlist-UserButton
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
    </div>

  </div>
  <div class="button-container">
    <button class="approve" :class="{ active: activeButton === 'approve' }" :disabled="selectedItems.length === 0" @click="setActiveButton('approve'); ApproveLink()">
      Approve
    </button>
    <button class="revuke" :class="{ active: activeButton === 'revoke' }" :disabled="selectedItems.length === 0" @click="setActiveButton('revoke'); RevokeUserLink()">
      Revoke Link
    </button>
    <button class="resent" :class="{ active: activeButton === 'resend' }" :disabled="selectedItems.length === 0" @click="setActiveButton('resend'); resendUserLink()">
      Resend Link
    </button>
    <button class="remove" :class="{ active: activeButton === 'remove' }" :disabled="selectedItems.length === 0" @click="setActiveButton('remove'); removeUsersLink()">
      Remove User
    </button>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";
import {
  toggleTab,
  filterItemsByTypes,
  selectAllRowsLocal,
  showDot,
  revokeLinkSent,
  initializeButtonTexts,
  showDropDowns,
  isButtonsDisabled,
  resendLinks,
  removeUsers,
  revokeUserFunction,
  approveUserFunction,
  removeSelectedUsers,
  resendUserFunction
} from "/utils/myFunction.js";
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
    email: "user4@example.com",
    date: "23-02-024",
    name: "User 4",
    activity: "Pending",
    type: "Business",
  },
  {
    id: 5,
    email: "user5@example.com",
    date: "23-02-024",
    name: "User 5",
    activity: "Active",
    type: "Individual",
  },
  // Add more items as needed
]);
const type = ref("Individual");
const type2 = ref("Business");
const buttonText = ref({});
const show = ref({});
const showDrop = ref({});
const isButtonDisable = ref({});
const isButtonRevoked = ref({});
const selectedItems = ref([]);
const disabledButtons = ref([]);
const selectAll = ref(false);
const activeTab = ref(0);
const filteredItems = ref(items.value);
const activeButton = ref(null);

const setActiveButton = (button) => {
  activeButton.value = button;
};

const toggleTabLocal = (index) =>
  toggleTab(index, activeTab, filterItemsByType);
const filterItemsByType = () =>
  filterItemsByTypes(tabs, activeTab, filteredItems, items);
const selectAllRows = () => selectAllRowsLocal(selectAll, selectedItems, filteredItems);
const showDots = (itemId) =>
  showDot(itemId,filteredItems, show, isButtonDisable, showDrop, buttonText);
const revokeLinked = (itemId) =>
  revokeLinkSent(itemId, buttonText, showDrop, isButtonRevoked);
const initializeButtonText = () => initializeButtonTexts(filteredItems, buttonText);
const showDropDown = (itemId) => showDropDowns(showDrop, filteredItems, itemId);
const resendLink = (itemId) =>
resendLinks(isButtonDisable, buttonText, isButtonRevoked, showDrop, itemId);
const isButtonDisabled = (itemId) => isButtonsDisabled(itemId, disabledButtons);
const removeUser = (itemId) =>  removeUsers (itemId, filteredItems, selectedItems)
initializeButtonText();
const RevokeUserLink = () =>revokeUserFunction(selectedItems,  showDrop, show, buttonText, isButtonDisable, isButtonRevoked)
const ApproveLink = () => approveUserFunction(selectedItems, showDrop, show, buttonText, isButtonDisable, isButtonRevoked);


const removeUsersLink = () =>  removeSelectedUsers(filteredItems,  selectedItems)
const resendUserLink = () => resendUserFunction(selectedItems,  isButtonDisable, buttonText, isButtonRevoked, showDrop)
</script>

<style scoped>
.button-container{
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
background: var(--White, #FFF);
margin: 17px auto;
box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 4px 9px 0px rgba(0, 0, 0, 0.10), 0px 14px 23px 0px rgba(0, 0, 0, 0.05), 0px 67px 27px 0px rgba(0, 0, 0, 0.01), 0px 105px 29px 0px rgba(0, 0, 0, 0.00);
}
.revokeLink{
    display: none;
}
.button-container button{
display: flex;
height: 48px;
padding: 16px;
flex-direction: column;
justify-content: center;
gap: 16px;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
cursor: pointer;
}
.approve, .revuke, .resent{
color: var(--grey-grey2);
}
.approve:hover, .revuke:hover, .remove:hover, .resent:hover{
    background: var(--grey-grey6);
}
.approve:disabled, .revuke:disabled, .resent:disabled{
    cursor: not-allowed;
    color: var(--grey-grey4);
}
.remove, .remove:disabled{
    color: var(--negative-n-300-base);
}

.button-container button.active {
  background: var(--grey-grey6);
}








.top-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 29px;
}
.note {
  color: var(--grey-grey2);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
}
.tagText {
  color: var(--grey-grey-1-base);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
}
.warning {
  display: flex;
  align-items: center;
  gap: 16px;
}
.flexed {
  display: flex;
  align-items: center;
  gap: 8px;
}
.table-container {
  margin-top: 29px;
  display: flex;
  gap: 64px;
  flex-direction: column;
}
.table__wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 16px;
  border: 1px solid var(--grey-grey5);
  background: var(--white);
}

table,
th,
td {
  border: none;
  border-collapse: collapse;
}

th,
td {
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-right: 32px;
  text-align: left;
}

td:nth-child(2) {
  display: flex;
  align-items: center;
  gap: 16px;
}
tr {
  border-bottom: 1px solid var(--grey-grey5);
}
th{
color: var(--grey-grey-1-base);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
}
td{
color: var(--grey-grey-1-base);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px; 
}
tbody tr {
  transition: all 0.1s ease-in-out;
  cursor: pointer;
}

tbody tr:hover {
  background-color: var(--grey-grey6);
}

.filter-tabs {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.tab {
  cursor: pointer;
  display: flex;
  width: 100px;
  height: 40px;
  padding: 16px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--grey-grey6);
  border-radius: 100px;
  font-size: 14px;
  line-height: 21px;
  font-style: normal;
  font-weight: 500;
  color: var(--grey-grey2);
}

.tab:hover {
  background: var(--grey-grey5);
}

.tab.clicked {
  border: 1px solid var(--secondary-s-300-base);
  background: var(--Secondary-S50);
}

.tab:hover.clicked {
  border: 1px solid var(--secondary-s-300-base);
  background: var(--Secondary-S50);
}
.selected-row {
  background-color: var(--grey-grey6);
}

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
  position: relative;
}
input[type="checkbox"]:checked {
  border: 2px solid green;
}
input[type="checkbox"]:checked:before {
  content: "\2714";
  color: white;
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

input[type="checkbox"]:checked::before {
  display: block;
}
</style>