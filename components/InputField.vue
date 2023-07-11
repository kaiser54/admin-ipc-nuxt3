<template>
  <div class="input-field">
    <label :for="id">{{ label }}</label>
    <div class="input-container" :class="{ password: type === 'password' }">
      <input class="input" :class="{ 'input-error': invalid }" :type="inputType" :id="id" :name="id" :value="value"
        :placeholder="placeholder" :required="required" @input="$emit('input', $event.target.value)" />
      <span v-if="type === 'password'" class="toggle-password" @click="togglePasswordVisibility">
        <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
          <path
            d="M480 744q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.596 0-259.798-78.5T48 576q55-131 172.202-209.5T480 288q142.596 0 259.798 78.5T912 576q-55 131-172.202 209.5T480 864Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127 576q51 100 146 158t207 58Z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
          <path
            d="m637 631-62-62q4-38-23-65.5T487 480l-62-62q13-5 27-7.5t28-2.5q70 0 119 49t49 119q0 14-2.5 28t-8.5 27Zm133 133-52-52q36-28 65.5-61.5T833 576q-49-101-144.5-158.5T480 360q-26 0-51 3t-49 10l-58-58q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912 576q-22 57-58.5 103.5T770 764Zm-2 202L638 836q-38 14-77.5 21t-80.5 7q-143 0-261.5-77.5T48 576q22-57 58-104t84-85L90 287l51-51 678 679-51 51ZM241 439q-35 28-65 61.5T127 576q49 101 144.5 158.5T480 792q26 0 51-3.5t50-9.5l-45-45q-14 5-28 7.5t-28 2.5q-70 0-119-49t-49-119q0-14 3.5-28t6.5-28l-81-81Zm287 89Zm-96 96Z" />
        </svg>
      </span>
    </div>
    <div v-if="invalid" class="error">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_2260_9969)">
          <path d="M8 5.33334V8" stroke="#FF3B2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 10.6797V10.6667" stroke="#FF3B2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
            stroke="#FF3B2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2260_9969">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      // required: true,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      showPassword: false,
      inputType: this.type,
      value: this.value,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.inputType = this.showPassword ? "text" : "password";
    },
  },
};
</script>

<style scoped>
.password {
  position: relative;
}

.password span svg {
  position: absolute;
  right: 16px;
  top: 14px;
  fill: var(--grey-grey3);
}
</style>
