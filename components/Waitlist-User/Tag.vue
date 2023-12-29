<template>
    <div :class="getTagClass()">
    <div></div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['type']);
  
  const getTagClass = () => {
    return {
      'circular-tag': true,
      'green-tag': props.type === 'Business',
      'black-tag': props.type === 'Individual',
    };
  };
  </script>
  
  <style scoped>
  .circular-tag {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  
  .green-tag {
    background-color: green;
    color: white;
  }
  
  .black-tag {
    background-color: black;
    color: white;
  }
  </style>
  