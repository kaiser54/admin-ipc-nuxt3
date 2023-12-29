
<template>
    <div class="contain">
      <div class="bton">
        <button :disabled="isButtonDisabled" @click="$emit('showDots', props.itemId)" class="Approval"
          :class="{ disabled: isButtonDisabled}">
          {{ buttonText }}
        </button>
        <div class="action" v-if="show">
          <button @click="showDropDown" class="dotted-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div class="dropDown" v-if="showDrop">
            <div class="container">
              <!-- <button @click="revokeLink" class="revoke">Revoked Link</button> -->
              <button @click="revokeLinked" class="revoke" :class="{revoked: isButtonRevoked }">Revoke link</button>
              <button class="resend" @click="resendLink">Resend link</button>
              <button class="remove" @click="removeUser">Remove user</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script setup>
  import { ref, defineProps, defineEmits } from "vue";
  const props = defineProps({
    show: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: ""
    },
    showDrop: {
      type: Boolean,
      default: false
    },
    isButtonDisabled: {
      type: Boolean,
      default: false
    },
    isButtonRevoked: {
      type: Boolean,
      default: false
    },
    itemId: {
      type: Number,
      required: true
    },
  });
  
  const emit = defineEmits();
  
  const revokeLink = () => {
    emit('revokeLink', props.itemId);
  };
  const revokeLinked = () => {
    emit('revokeLinked', props.itemId);
  };
  
  const resendLink = () => {
    emit('resendLink', props.itemId);
  };
  
  const removeUser = () => {
    emit('removeUser', props.itemId);
  };
  
  const showDropDown = () => {
    emit('showDropDown', props.itemId);
  };
  </script>
    
  <style scoped>
  .contain{
    width: 150px;
    /* border: 1px solid red; */
    position: relative;
  }
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  
  .bton {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 4px;
  }
  
  .Approval {
    width: auto;
    height: 32px;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    background: var(--primary-p-300-base);
    color: var(--white);
    font-family: var(--primary-font);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
    cursor: pointer;
  }
  
  .Approval.disabled {
    background-color: #D0D5DD;
    cursor: not-allowed;
  }
  .revoked {
    display: none;
  }
  
  .dotted-btn {
    cursor: pointer;
    z-index: 1;
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    background:white;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1),
      0px 4px 9px 0px rgba(0, 0, 0, 0.1), 0px 14px 23px 0px rgba(0, 0, 0, 0.05),
      0px 67px 27px 0px rgba(0, 0, 0, 0.01), 0px 105px 29px 0px rgba(0, 0, 0, 0);
  
      position: absolute;
      z-index: 999;
  
      width: 145px;
  }
  
  .remove, .resend, .revoke {
    padding: 16px;
    color: #344054;
    width: 100%;
    cursor: pointer;
  }
  
  .remove:hover, .resend:hover, .revoke:hover {
    background: #f7f9fc;
  }
  
  button.remove {
    color: var(--negative-n-300-base, #d42620);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  
  .revoke {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  </style>
    