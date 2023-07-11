<template>
  <div class="image-upload">
    <label class="upload-box" :class="{ 'has-image': imageUrl }">
      <input type="file" class="file-input" @change="handleFileUpload" />
      <div class="preview" v-if="imageUrl">
        <img
          :src="imageUrl"
          alt="Uploaded Image"
          @mouseover="showDeleteIcon = true"
          @mouseleave="showDeleteIcon = false"
        />
        <div class="delete-icon" v-if="showDeleteIcon" @click="deleteImage">
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
    <button @click="uploadImage" :disabled="hasError">Upload</button>
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
      const maxSize = 300 * 1024; // Maximum size in bytes (300KB)

      if (file) {
        if (!allowedTypes.includes(file.type)) {
          // Show error message for unsupported file type
          this.errorMessage = "Only JPEG, PNG, and GIF images are allowed";
          this.selectedFile = null;
        } else if (file.size > maxSize) {
          // Show error message for oversized file
          this.errorMessage = "The image size should not exceed 300KB";
          this.selectedFile = null;
        } else {
          // Reset error message and store the selected file
          this.errorMessage = null;
          this.selectedFile = file;

          // Read the selected file and generate a preview
          const reader = new FileReader();
          reader.onload = () => {
            this.imageUrl = reader.result;
          };
          reader.readAsDataURL(file);
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
    },
    uploadImage() {
      // Add your API request logic here
      // ...
    },
  },
};
</script>
    
    <style>
.image-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-box {
  position: relative;
  width: 200px;
  height: 200px;
  border: 2px dashed #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.upload-box.has-image {
  border-color: #69c;
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
  position: relative;
  width: 100%;
  height: 100%;
}

.preview img {
  max-width: 100%;
  max-height: 100%;
}

.delete-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.delete-icon i {
  font-size: 16px;
}

.upload-icon {
  font-size: 48px;
  color: #ccc;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
    