<template>
  <form @submit.prevent="handleSubmit">
    <label for="name">Name:</label>
    <input type="text" v-model="formData.name" required />

    <label for="description">Description:</label>
    <textarea v-model="formData.description" required></textarea>

    <label for="images">Upload Images:</label>
    <!-- <input
      type="file"
      v-for="(image, index) in images"
      :key="index"
      @change="handleImageChange(index)"
    /> -->
    <input
      type="file"
      ref="fileInput"
      @click="handleClick"
      @change="handleImageChange"
      multiple
      accept="image/*"
    />

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        description: "",
      },
      images: [null, null, null],
    };
  },
  methods: {
    // handleImageChange(index) {
    //   const file = event.target.files[0];
    //   // Validate the file if needed
    //   this.images.splice(index, 1, file);
    // },

    handleClick(event) {
      const fileInput = this.$refs.fileInput;
      const files = event.target.files;
      
      // Check if the selected file is not an image and cancel the event
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith('image/')) {
          event.preventDefault();
          fileInput.value = null; // Reset the input value
          alert('Please select only image files.');
          return;
        }
      }
    },

    async handleSubmit() {
      try {
        // const formData = new FormData();
        // formData.append("name", this.formData.name);
        // formData.append("description", this.formData.description);

        // this.images.forEach((image, index) => {
        //   if (image) {
        //     formData.append(`image${index + 1}`, image);
        //   }
        // });
        console.log(this.images);
        // Replace 'your_backend_api_url' with your actual backend API URL
        // const response = await axios.post("your_backend_api_url", formData);

        // Handle the response from the API if needed
        // console.log(response.data);

        // Clear the form and images array after successful submission
        // this.formData.name = "";
        // this.formData.description = "";
        // this.images = [null, null, null];
      } catch (error) {
        // Handle errors if needed
        console.error(error);
      }
    },
  },
};
</script>
