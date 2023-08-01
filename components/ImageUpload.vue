<template>
  <div class="image-upload">
    <label class="upload-box" :class="{ 'has-image': imageUrl }">
      <input
        type="file"
        id="file"
        class="file-input"
        @change="handleFileUpload"
      />
      <div class="preview" v-if="hasImage">
        <img
          :src="imageUrl"
          alt="Uploaded Image"
          @mouseover="showDeleteIcon = true"
          @mouseleave="showDeleteIcon = false"
        />
        <div class="delete" v-if="showDeleteIcon">
          <div class="delete-icon" @click="deleteImage">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="trash-delete-bin">
                <path
                  id="Vector"
                  d="M6.66667 4.99984V3.33317C6.66667 2.4127 7.41286 1.6665 8.33333 1.6665H11.6667C12.5872 1.6665 13.3333 2.4127 13.3333 3.33317V4.99984M2.5 4.99984H17.5H2.5ZM4.16667 4.99984V16.6665C4.16667 17.587 4.91286 18.3332 5.83333 18.3332H14.1667C15.0872 18.3332 15.8333 17.587 15.8333 16.6665V4.99984H4.16667Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M11.6665 9.1665V14.1665"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M8.3335 9.1665V14.1665"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="upload-icon" v-else>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="add-plus">
            <path
              id="Vector"
              d="M5 12H19M12 5V19V5Z"
              stroke="#565C69"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div>
    </label>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <!-- <button @click="uploadImage" :disabled="hasError">Upload</button> -->
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      selectedFile: null,
      imageUrl: null,
      errorMessage: null,
      showDeleteIcon: false,
      hasImage: false,
    };
  },
  computed: {
    hasError() {
      return !!this.errorMessage;
    },
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const maxSize = 1000 * 1024; // Maximum size in bytes (300KB)

      if (file) {
        if (!allowedTypes.includes(file.type)) {
          // Show error message for unsupported file type
          this.errorMessage = "Only JPEG, PNG, and GIF images are allowed";
          this.selectedFile = null;
        } else if (file.size > maxSize) {
          // Show error message for oversized file
          this.errorMessage = "The image size should not exceed 1MB";
          this.selectedFile = null;
        } else {
          // Reset error message and store the selected file
          this.errorMessage = null;
          this.selectedFile = file;
          this.hasImage = true;

          // Read the selected file and generate a preview
          const reader = new FileReader();
          reader.onload = () => {
            this.imageUrl = reader.result;
          };
          reader.readAsDataURL(file);
          // Emit the image to the parent component
          this.$emit("image-selected", file);
          // console.log(file)
        }
      } else {
        // Reset error message and clear the selection
        this.errorMessage = null;
        this.selectedFile = null;
        this.imageUrl = null;
      }
    },
    deleteImage() {
      this.selectedFile = null;
      this.imageUrl = null;
      this.errorMessage = null;
      this.showDeleteIcon = false;
      this.hasImage = false;
      // Reset the file input value to allow selecting the same file again
      const fileInput = document.getElementById("file");
      if (fileInput) {
        fileInput.value = "";
      }
      console.log("deleted");
    },
    uploadImage() {
      // Add your API request logic here
      // ...
    },
  },
};
</script>
  
  <style scoped>
.image-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-box {
  position: relative;
  cursor: pointer;
  overflow: hidden;

  display: flex;
  width: 102px;
  height: 102px;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  border: 1px dashed var(--grey-grey4, #bdc0ce);
}

.upload-box.has-image {
  padding: 2px;
  border: 2.125px solid var(--grey-grey5, #e5e7ef);
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.preview {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 14px;
}
.delete {
  position: absolute;
  width: 101px;
  height: 101px;
  flex-shrink: 0;
  background: rgba(48, 50, 55, 0.3);
  z-index: 2;
}
.delete-icon {
  cursor: pointer;
  position: absolute;
  z-index: 5;
  display: flex;
  width: 40px;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 100px;
  border: 1px solid var(--grey-grey-4, #bdc0ce);
  background: #fff;
  transform: translate(-63%, 63%);
}

/* .upload-icon {
  font-size: 48px;
  color: #ccc;
} */

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
  