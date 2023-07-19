<template>
  <div>
    <InputImage @file-changed="handleImage" @previewImage="previewImage"/>
    <DisplayImage v-if="image" :src="url" />
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      image: null,
      url: "",
    };
  },
  methods: {
    handleImage(file) {
      this.image = file;
      console.log(file)
    },
    previewImage() {
      if (this.image) {
        const url = URL.createObjectURL(this.image);
        this.url = url;
      console.log(this.url)
      }
    },
  },
};
</script>