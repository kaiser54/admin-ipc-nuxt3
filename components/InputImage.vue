<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <button v-if="image" @click="previewImage">Preview Image</button>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      image: null,
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      this.image = file;
      this.$emit("file-changed", file);
    },
    previewImage() {
      this.$emit("previewImage");
    },
  },
};
</script>