<template>
  <div class="filter-dates">
    <div class="datepicker-toggle">
      <p>From</p>
      <!-- <span class="datepicker-toggle-button"></span> -->
      <button class="">
        <!-- <span v-if="startDate">{{ startDate }}</span> -->
        <input
          type="date"
          name=""
          id=""
          class="input datepicker-toggle-button"
          v-model="startDate"
        />
        <span class="btn-dsp" style="display: none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M3 4.9987C3 4.07822 3.74619 3.33203 4.66667 3.33203H16.3333C17.2538 3.33203 18 4.07822 18 4.9987V16.6654C18 17.5859 17.2538 18.332 16.3333 18.332H4.66667C3.74619 18.332 3 17.5859 3 16.6654V4.9987Z"
              stroke="#303237"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 8.33203H18"
              stroke="#303237"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.834 1.66797V5.0013"
              stroke="#303237"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.16602 1.66797V5.0013"
              stroke="#303237"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>YYYY-MM-DD</p>
        </span>
      </button>
      <!-- <input type="date" class="input datepicker-input" v-model="startDate" /> -->
    </div>
    <div class="datepicker-toggle">
      <p>To</p>
      <!-- <span class="datepicker-toggle-button"></span> -->
      <button class="">
        <!-- <span v-if="endDate">{{ endDate }}</span> -->
        <input
          type="date"
          name=""
          id=""
          class="input datepicker-toggle-button"
          v-model="endDate"
        />
        <span class="btn-dsp" style="display: none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M3 4.9987C3 4.07822 3.74619 3.33203 4.66667 3.33203H16.3333C17.2538 3.33203 18 4.07822 18 4.9987V16.6654C18 17.5859 17.2538 18.332 16.3333 18.332H4.66667C3.74619 18.332 3 17.5859 3 16.6654V4.9987Z"
              stroke="#303237"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 8.33203H18"
              stroke="#303237"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.834 1.66797V5.0013"
              stroke="#303237"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.16602 1.66797V5.0013"
              stroke="#303237"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>YYYY-MM-DD</p>
        </span>
      </button>
      <!-- <input
              type="date"
              name=""
              id=""
              class="input datepicker-toggle-button"
              v-model="endDate"
            /> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filter-dates {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  position: relative;
}
.datepicker-toggle {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  position: relative;
}

.datepicker-toggle-button {
  /* position: absolute;
  left: 0;
  top: 0; */

  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px; */
  /* gap: 8px; */

  max-width: 160px;
  /* min-width: 155px; */
  /* width: 100%; */
  height: 48px;

  /* White */

  background: var(--white);
  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 100px;
}
.btn-dsp {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.btn-dsp p {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
</style>