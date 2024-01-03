<template>
    <div v-if="visible" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h2>{{ title }}</h2>
          <span @click="closeModal" class="close-button">&times;</span>
          <div class="container">
              <button @click="revokeLinked" class="revoke" :class="{revoked: isButtonRevoked }">Revoke link</button>
              <button class="resend" @click="resendLink">Resend link</button>
              <button class="remove" @click="removeUser">Remove user</button>
            </div>
        </div>
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps(['visible', 'title']);
  const emit = defineEmits();
  
  const closeModal = () => {
    emit('update:visible', false);
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 10px;
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
  .close-button {
    cursor: pointer;
    font-size: 20px;
    color: #aaa;
  }
  
  .close-button:hover {
    color: #000;
  }
  </style>
  