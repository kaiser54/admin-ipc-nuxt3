<template>
    <div class="flexed-container">
      <h2>102</h2>
      <p class="users">New Waitlist Users</p>
      <button @click="directToWait">
        <p>See all</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M6.43994 13.2807L10.7866 8.93404C11.2999 8.4207 11.2999 7.5807 10.7866 7.06737L6.43994 2.7207"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();

const directToWait = () => {
  router.push('/dashboard/customers/waitlist');
};
</script>

<style scoped>
.flexed-container{
display: flex;
  max-width: 176px;
  width: 100%;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid var(--grey-grey5);
  background: #fff;
  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.1),
    0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;
}
.flexed-container h2{
color: var(--grey-grey1-base);
font-size: 34px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -1px;
}
.users{
color: var(--grey-grey3);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
}
button{
display: flex;
height: 32px;
width: 100%;
padding: 10px 12px;
justify-content: center;
align-items: center;
gap: 4px;
flex-shrink: 0;
align-self: stretch;
border-radius: 100px;
background: var(--primary-p-300-base);
 cursor: pointer;

}

button p{
color: var(--white);
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 18px;
}


</style>