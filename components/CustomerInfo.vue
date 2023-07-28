<template>
  <div
    class="border customer__info"
    style="flex-direction: column; gap: 58px; padding: 16px"
  >
    <div class="customer__info">
      <div class="group">
        <div class="title">Account name</div>
        <div class="subject">Daniel Ayomide</div>
      </div>
      <div class="group">
        <div class="title">Phone number</div>
        <div class="subject">09156581205</div>
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
        <div class="title">Email address</div>
        <div class="subject">daniel@gmail.com</div>
      </div>
    </div>
    <div class="customer__info">
      <div class="group">
        <div class="title">Email verification</div>
        <!-- <div class="subject">Status</div> -->
        <DynamicTags :tagText="tagText" size="small" :type="type" />
      </div>
      <div class="group">
        <div class="title">Street address</div>
        <div class="subject">91, ayetoro road</div>
      </div>
      <div class="group">
        <div class="title">State</div>
        <div class="subject">Lagos</div>
      </div>
      <div class="group">
        <div class="title">LGA</div>
        <div class="subject">Ikeja</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tagText: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.customer__info {
  display: flex;
  width: 100%;
  /* padding: 16px; */
  /* justify-content: space-between; */
  align-items: flex-start;
  gap: 84px;
  /* gap: 16px; */
  flex-wrap: wrap;
}
.customer__info > * {
  /* flex: 1 1 139px; */
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