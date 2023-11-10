<template>
  <div
    class="border customer__info"
    style="flex-direction: column; gap: 58px; padding: 16px"
  >
    <div class="customer__info">
      <div class="group">
        <div class="title">Account name</div>
        <div class="subject">
          {{ customer?.firstName }} {{ customer?.lastName }}
        </div>
      </div>
      <div class="group">
        <div class="title">Phone number</div>
        <div
          class="subject"
          v-for="(phoneNumber, index) in customer?.phoneNumbers"
          :key="index"
        >
          {{ phoneNumber }}
        </div>
      </div>
      <div class="group">
        <div class="title">Date joined</div>
        <div class="subject">{{ formattedCreatedAt }}</div>
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
          {{ convertToTitleCase(customer.type) }}
        </div>
      </div>
      <div class="group">
        <div class="title">Email address</div>
        <div class="subject">{{ customer.email }}</div>
      </div>
    </div>
    <div class="customer__info" v-if="showMore">
      <div class="group" v-if="customer.type === 'BUSINESS'">
        <div class="title">Business Name</div>
        <div class="subject">
          {{ customer?.businessName }}
        </div>
      </div>
      <div class="group">
        <div class="title">Email verification</div>
        <DynamicTags
          tagText="Verified"
          size="small"
          type="positive"
          v-if="customer.verified === true"
        />
        <DynamicTags
          tagText="Not verified"
          size="small"
          type="negative"
          v-if="customer.verified === false"
        />
      </div>
      <div class="group">
        <div class="title">Street address</div>
        <div class="subject">
          {{ address?.streetAddress ? address.streetAddress : "Not set" }}
        </div>
      </div>
      <div class="group">
        <div class="title">State</div>
        <div class="subject">
          {{ address?.state ? address.state : "Not set" }}
        </div>
      </div>
      <div class="group">
        <div class="title">LGA</div>
        <div class="subject">{{ address?.lga ? address.lga : "Not set" }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customer: {
      required: true,
    },
    address: {
    },
    showMore: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    formattedCreatedAt() {
      return this.convertDateFormat(this.customer.createdAt);
    },
  },
  methods: {
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
/* .customer__info > * {
  flex: 1 1 139px;
} */
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