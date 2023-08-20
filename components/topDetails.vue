<template>
  <section class="top-details">
    <p class="page__name">Dashboard</p>
    <div class="search-input">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_2006_2516)">
          <path
            d="M14.1667 14.1666L18.3334 18.3333L14.1667 14.1666ZM16.2501 8.95829C16.2501 12.9854 12.9855 16.25 8.95842 16.25C4.93134 16.25 1.66675 12.9854 1.66675 8.95829C1.66675 4.93122 4.93134 1.66663 8.95842 1.66663C12.9855 1.66663 16.2501 4.93122 16.2501 8.95829Z"
            stroke="#7E8494"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2006_2516">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <input
        class="input-search"
        type="search"
        name="search"
        id="search"
        placeholder="Search for products"
        v-model="searchQuery"
      />
    </div>
    <section class="dashboard-profile">
      <div class="profile-content">
        <div class="profile-image">
          <img src="../assets/images/avatar.png" alt="" />
        </div>
        <div class="profile-details">
          <p class="name">Chicken republic</p>
          <p class="email truncate">adminchickenrepublic@gmail.com</p>
        </div>
      </div>
    </section>
  </section>
</template>


<script setup>
import { useIPCStore } from "/stores/index";

const IPCStore = useIPCStore();

const searchQuery = ref("");

watch(searchQuery, (newValue) => {
  IPCStore.updateSearchQuery(newValue);
  console.log("Message changed:", newValue);
});
</script>


<style>
.top-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(100vw - 278px - 83px);
  width: 100%;
  gap: 16px;
}

.username-welcome {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  margin-left: 20px;
  max-width: 198px;
}
.page__name {
  color: var(--grey-grey-1, #303237);

  /* H2/Heading 2 Medium */
  font-size: 34px;
  font-weight: 500;
  letter-spacing: -1px;
  margin-left: 39px;
}
.username-welcome .welcome {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}

.username-welcome .welcome p {
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

.username-welcome .username {
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  /* identical to box height, or 105% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
  white-space: nowrap;
}

input {
  width: 100%;
}

.search-input {
  display: flex;
  position: relative;
  width: 100%;
  max-width: 373px;
}

.search-input svg {
  top: 14px;
  left: 16px;
  position: absolute;
}

.input-search {
  width: 100%;
  padding-left: 52px !important;
  /* max-width: 522px; */
  max-width: 100%;
}

.profile-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  max-width: 205px;
}

.profile-image {
  width: 40px;
  height: 40px;
}

.profile-image img {
  width: 40px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
}

.profile-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;

  max-width: 149px;
}

.profile-details .name {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}

.profile-details .email {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 149px;
  /* or any other value you want to set */
}
</style>
