<template>
  <div class="container">
    <div class="goback">
      <button class="goBack" @click="goBack">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6.38016 3.95312L2.3335 7.99979L6.38016 12.0465"
            stroke="#101928"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.6668 8H2.44678"
            stroke="#344054"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Go back</p>
      </button>
    </div>
    <div class="flexed-cont">
      <div class="header">
        <h3>Website Waitlist</h3>
      </div>
      <div class="table-container">
        <Waitlist-UserTable />
      </div>
    </div>
  </div>
</template>
 
 <script setup>
 import {  useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.push('/dashboard/customers');
};
</script>
 
 <style scoped>
 .goback{
    margin-bottom: 30px;
 }
.container {
  margin-top: 30px;
}
.header h3 {
  color: var(--grey-grey-1-base);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.2px;
}
.goBack{
display: inline-flex;
height: 32px;
padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 4px;
flex-shrink: 0;
border-radius: 100px;
border: 1px solid var(--grey-grey5);
background: var(--white);
box-shadow: 0px 1px 2px 0px rgba(47, 43, 67, 0.10);
cursor: pointer;
}
.goBack p{
color: var(--grey-grey-1-base);
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 14px;
}
.goBack:hover{
    background: var(--grey-grey6);
}
.goBack:active{
    background: var(--grey-grey5);
}
</style>