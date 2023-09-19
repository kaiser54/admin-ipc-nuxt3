<template>
  <div style="max-width: 990px; margin-left: 21px; margin-top: 16px; margin-bottom: 50px">
    <GoBackButton style="margin-bottom: 24px" />
    <div class="heading flex">
      <h3>{{ headingText }}</h3>
      <div class="" style="display: flex; align-items: center; gap: 16px">
        <DynamicButton
          v-if="showButton"
          @clickButton="emitDelete"
          class="auto"
          buttonText="Delete product"
          size="standard"
          type="neutral"
          icon="icon-left"
        >
          <template v-slot:svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.66667 4.99984V3.33317C6.66667 2.4127 7.41286 1.6665 8.33333 1.6665H11.6667C12.5872 1.6665 13.3333 2.4127 13.3333 3.33317V4.99984M2.5 4.99984H17.5H2.5ZM4.16667 4.99984V16.6665C4.16667 17.587 4.91286 18.3332 5.83333 18.3332H14.1667C15.0872 18.3332 15.8333 17.587 15.8333 16.6665V4.99984H4.16667Z"
                stroke="#565C69"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.667 9.1665V14.1665"
                stroke="#303237"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.33301 9.1665V14.1665"
                stroke="#303237"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
        </DynamicButton>
        <DynamicBtn
          @clickButton="emitFunction"
          class="auto"
          buttonText="Continue"
          size="standard"
          type="primary"
          icon="icon-right"
          
        >
          <template v-slot:svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="arrow-right">
                <path
                  id="Vector"
                  d="M17.5 9.99984L11.6667 15.8332M2.5 9.99984H17.5H2.5ZM17.5 9.99984L11.6667 4.1665L17.5 9.99984Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </template>
        </DynamicBtn>
      </div>
    </div>
    <div class="form__wrapper">
      <div class="form__heading border">Fill in the product details</div>
      <div class="form">
        <form action="">
          <div class="top flex">
            <div class="form__field">
              <div class="input-field">
                <label for="id">Product's name</label>
                <div class="input-container">
                  <input
                    class="input"
                    :class="{ 'input-error': continueClicked && !productName }"
                    type="text"
                    id=""
                    placeholder="Ex: Mama’s pride rice"
                    required
                    v-model="productName"
                  />
                </div>
              </div>
              <ErrorMsg
                v-if="continueClicked && !productName"
                description="Please enter the product's name"
              />
            </div>

            <div class="form__field">
              <div class="input-field">
                <label for="price">IPC’s price</label>
                <div class="input-container">
                  <input
                    class="input"
                    :class="{ 'input-error': continueClicked && !price }"
                    type="number"
                    name="price"
                    id=""
                    placeholder="₦70,000"
                    required
                    v-model="price"
                  />
                </div>
              </div>
              <ErrorMsg
                v-if="continueClicked && !price"
                description="Please enter the product's price"
              />
            </div>
            <div class="form__field">
              <div class="input-field">
                <label for="slash">Market slash price</label>
                <div class="input-container">
                  <input
                    class="input"
                    :class="{
                      'input-error':
                        continueClicked &&
                        (!slash || slashError || priceGreaterThanSlashError),
                    }"
                    type="number"
                    name="slash"
                    id=""
                    @input="handleSlashInput"
                    placeholder="₦80,000"
                    required
                    v-model="slash"
                  />
                </div>
              </div>
              <ErrorMsg
                v-if="continueClicked && !slash"
                description="Please enter a slash price"
              />
              <ErrorMsg
                v-if="slashError"
                description="Slash price must be higher than price"
              />
            </div>
          </div>
          <div class="second flex">
            <div class="form__field">
              <label for="description">Product’s description</label>
              <textarea
                class="input"
                name="description"
                id=""
                v-model="description"
                placeholder="Enter the product description"
                :class="{ 'input-error': continueClicked && !description }"
              ></textarea>
              <ErrorMsg
                v-if="continueClicked && !description"
                description="Please enter description"
              />
            </div>
            <div class="form__field">
              <div class="input-field">
                <label for="brand">Brand’s name</label>
                <div class="input-container">
                  <input
                    class="input"
                    :class="{ 'input-error': continueClicked && !brand }"
                    type="text"
                    name="brand"
                    id=""
                    placeholder="Mama’s rice"
                    required
                    v-model="brand"
                  />
                </div>
              </div>
              <ErrorMsg
                v-if="continueClicked && !brand"
                description="Please enter a brand name"
              />
            </div>
          </div>
          <div class="third flex">
            <div class="form__field">
              <label for="category">Category</label>
              <select
                class="input"
                name="category"
                id=""
                v-model="categoryValue"
                :class="{ 'input-error': continueClicked && !categoryValue }"
              >
                <option disabled selected value="">Please select a category</option>
                <option
                  v-for="option in categories"
                  :key="option?._id"
                  :value="option?.value"
                >
                  {{ option?.name }}
                </option>
              </select>
              <ErrorMsg
                v-if="continueClicked && !categoryValue"
                description="Please select a category"
              />
            </div>
            <div class="form__field">
              <label for="status">Status</label>
              <select
                class="input"
                name="status"
                id=""
                v-model="statusValue"
                :class="{ 'input-error': continueClicked && !statusValue }"
              >
                <option disabled selected value="">Please select a status</option>
                <option
                  v-for="option in status"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
              <ErrorMsg
                v-if="continueClicked && !statusValue"
                description="Please enter a status"
              />
            </div>
            <div class="form__field">
              <div class="input-field">
                <label for="weight">Measurement (Optional)</label>
                <div class="input-container">
                  <input
                    class="input"
                    type="text"
                    name="weight"
                    id=""
                    placeholder="5kg"
                    required
                    v-model="weight"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="fourth">
            <div class="form__heading">Add product images</div>
            <div class="imgg">
              <p><strong>NOTE: </strong> Total size of Images should not exceed 1MB</p>
              <input type="file" ref="fileInput" @change="handleFileChange" />
              <!-- <button @click="uploadImages">Upload Images</button> -->
            </div>
            <div v-if="previewImages.length" :key="updateKey" class="flex ">
                
                  <div v-for="image in previewImages" :key="image.id" class="flexed-image">
                <div @click="handleImageClick(image)" class="upload-box">
                  <img v-if="image.url" :src="image.url" :alt="image.name" />
                  <img v-else src="@/assets/images/avatar.png" alt="upload image" />
                </div>
                <p v-if="image.name"> {{ `${image.size / 1000}kb` }}</p>
              </div>
                </div>
                <div class="Error">
                <ErrorMsg
                v-if="maxSizeExceeded"
                description="Total image size exceeds 1MB. Please select smaller images."
              />
              <ErrorMsg
                v-if="continueClicked && !selectedFiles.length"
                description="Please add product images"
              />
              </div>
            
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headingText: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    showButton: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      updateKey: 0,
      productName: "", // Set initial values for data properties
      price: "",
      slash: "",
      description: "",
      brand: "",
      weight: "",
      invalid: false,
      continueClicked: false,
      slashError: false,
      priceGreaterThanSlashError: false,
      clickedImage: null,
      maxOfFour: false,
      maxSizeExceeded: false,

      status: [
        { label: "In stock", value: "option1" },
        { label: "Out of stock", value: "option2" },
      ],
      statusValue: "",

      // categories: [
      //   { label: "Category 1", value: "option1" },
      //   { label: "Category 2", value: "option2" },
      //   { label: "Category 3", value: "option3" },
      // ],
      categoryValue: "",
      selectedImages: [],
      selectedFiles: [],
      totalSize: 0,
      previewImages: [
        {
          id: 0,
          size: 0,
        },
        {
          id: 1,
          size: 0,
        },
        {
          id: 2,
          size: 0,
        },
        {
          id: 3,
          size: 0,
        },
      ], // Array to store image previews
    };
  },
  computed: {
    // allFieldsValid() {
    //   if (!this.productName && !this.price && !this.slash && !selectedFiles.length) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // },
    allFieldsValid() {
      if (
        !this.productName &&
        !this.price &&
        !this.slash &&
        !this.description &&
        !this.brand &&
        !this.categoryValue &&
        !this.statusValue &&
        !this.selectedFiles
      ) {
        return false;
      } else {
        return true;
      }
    },
    // isSlashGreaterThanPrice() {
    //   if (this.price === "" || this.slash === "") {
    //     // If either price or slash is empty, no need to validate
    //     return true;
    //   }
    //   return parseFloat(this.slash) > parseFloat(this.price);
    // },
  },

  methods: {
    emitFunction() {
      this.continueClicked = true;
      if (!this.allFieldsValid) {
        return;
      }
      // Validate slash price
      if (!this.slash) {
        this.slashError = true;
        return;
      }
      if (parseFloat(this.price) >= parseFloat(this.slash)) {
        this.priceGreaterThanSlashError = true;
        return;
      }

      // Reset error flags
      this.slashError = false;
      this.priceGreaterThanSlashError = false;

      // Emit the inputted data to the parent component
      const data = {
        productName: this.productName,
        price: this.price,
        slash: this.slash,
        description: this.description,
        brand: this.brand,
        statusValue: this.statusValue,
        categoryValue: this.categoryValue,
        weight: this.weight,
        selectedImages: this.selectedFiles,
      };
      this.$emit("nextEvent", data);
    },

    handleSlashInput() {
      // Reset error flags
      this.slashError = false;
      this.priceGreaterThanSlashError = false;
      // Check for slash price validity
      if (parseFloat(this.price) >= parseFloat(this.slash)) {
        this.slashError = true;
      }
    },
    emitDelete() {
      this.$emit("deleteProduct");
    },

    getTotalImageSize(files) {
      let totalSize = 0;
      for (const file of files) {
        totalSize += file.size;
      }
      return totalSize;
    },

    handleFileChange(event) {
      console.log(event)
      this.maxSizeExceeded = false;
      this.updateKey++;
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.selectedFiles[this.clickedImageIndex] = selectedFile;
        let size = 0;
        size = this.totalSize + selectedFile.size / 1000;
        console.log(size);
        if (size > 1024) {
          this.maxSizeExceeded = true;
          return;
        }
        this.totalSize = size;
        this.previewImages[this.clickedImageIndex] = {
          url: URL.createObjectURL(selectedFile),
          name: selectedFile.name,
          size: selectedFile.size,
          id: this.clickedImageIndex,
        };
      }
    },

    handleImageClick(image) {
      if (image) {
        this.clickedImage = image;
      }
      this.clickedImageIndex = image.id;
      // Open the file input dialog by clicking on it programmatically
      this.$refs.fileInput.click();
    },
  },
};
</script>

<style scoped>
h3 {
  color: var(--grey-grey1, #303237);
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.5px;
}

.heading {
  margin-bottom: 32px;
}

.flex {
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* align-items: center; */
  
}
.flex div p {
  width: 100px;
  font-size: 12px;
  text-align: center;
}
.form__wrapper {
  max-width: 987px;
  /* height: 775px; */

  border-radius: 16px;
  border: 1px solid var(--grey-grey5, #e5e7ef);
  background: #fff;
}

.form__heading {
  color: var(--grey-grey1, #303237);

  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.5px;
}

.border {
  width: 100%;
  padding-left: 32px;
  padding-top: 32px;
  padding-bottom: 25px;
  border-bottom: 1px solid var(--grey-grey5, #e5e7ef);
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  max-width: 914px;
  margin-top: 40px;
  margin-inline: auto;
}

.input-field {
  width: 100%;
}

.form__field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 8px; */
  flex: 1 0 0;
}

form .flex {
  gap: 24px;
}

label {
  color: var(--grey-grey1, #303237);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  /* line-height: 21px; */
}

textarea {
  display: flex;
  height: 96px;
  max-width: 600px;

  padding: 16px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  border-radius: 8px;

  /* Neutral Button shadow */
  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.1),
    0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;
  resize: none;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  color: var(--grey-grey1);

  background: url(/assets-chevron-down-arrow.png);
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 20px;
  /* Adjust as needed */

  /* Previous CSS properties */
  background-size: 20px;
}

option {
  color: var(--grey-grey1, #7e8494);

  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
}

.fourth {
  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
}

.imgg {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  padding: 5px;

  border-radius: 16px;
  border: 1px dashed var(--grey-grey4, #bdc0ce);
}

input[type="file"] {
  display: none;
}

.error-message p {
  color: red;
}

.error-message {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>
