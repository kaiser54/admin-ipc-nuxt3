<!-- CustomTag.vue -->
<template>
    <div :style="tagStyle">
      <span :style="textStyle">{{ tagText }}</span>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  const props = defineProps(['type']);
  
  const tagStyle = ref({});
  const textStyle = ref({});
  const tagText = computed(() => (props.type === 'business' ? 'B' : 'I'));
  
  onMounted(() => {
    // Set styles based on the type prop
    if (props.type === 'business') {
      tagStyle.value = {
        width: '16px',
        height: '16px',
        background: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
  
      textStyle.value = {
        color: 'white',
      };
    } else if (props.type === 'individual') {
      tagStyle.value = {
        width: '16px',
        height: '16px',
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
  
      textStyle.value = {
        color: 'white',
      };
    }
  });
  </script>
  