<template>
    <div>
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        :type="inputType"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button v-if="type === 'password'" @click="togglePasswordVisibility">
        {{ showPassword ? 'Hide' : 'Show' }}
      </button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
        required: true,
      },
      placeholder: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
        validator: (value) => ['text', 'password'].includes(value),
      },
      errorMessage: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        showPassword: false,
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
    },
  };
  </script>
  
  <style scoped>
  .error-message {
    color: red;
  }
  </style>
  