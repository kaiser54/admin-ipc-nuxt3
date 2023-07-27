<template>
  <div class="border cutomer__info">
    <div class="group">
      <div class="title">Account name</div>
      <div class="subject">Daniel Ayomide</div>
    </div>
    <div class="group">
      <div class="title">Date joined</div>
      <div class="subject">23-02-022</div>
    </div>
    <div class="group">
      <div class="title">Account type</div>
      <div class="subject flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
        >
          <circle cx="4.5" cy="4" r="4" fill="#20AF0B" />
        </svg>
        Business
      </div>
    </div>
    <div class="group">
      <div class="title">Total orders</div>
      <div class="subject">309</div>
    </div>
    <div class="group">
      <div class="title">Status</div>
      <div class="subject">Status</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cutomer__info {
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: space-between;
  align-items: flex-start;
}
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
.title {
  color: var(--grey-grey3, #7e8494);

  /* Body Small/Body Small Regular */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
}
.subject {
  color: var(--grey-grey1, #303237);

  /* Body Large/Body Large Medium */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}
.flex {
  align-items: center;
  gap: 7px;
}
</style>