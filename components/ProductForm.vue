<template>
  <div
    style="
      max-width: 990px;
      margin-left: 21px;
      margin-top: 16px;
      margin-bottom: 50px;
    "
  >
    <GoBackButton style="margin-bottom: 24px" />
    <div class="heading flex">
      <h3>{{ headingText }}</h3>
      <div class="" style="display: flex; align-items: center; gap: 16px;">
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
      <DynamicButton
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
      </DynamicButton>
      </div>
    </div>
    <div class="form__wrapper">
      <!-- <div class="form__heading">{{ formHeading }}</div> -->
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
                    :class="{ 'input-error': invalid }"
                    type="text"
                    id=""
                    placeholder="Ex: Mama’s pride rice"
                    required
                    v-model="productName"
                  />
                </div>
              </div>
            </div>
            <div class="form__field">
              <div class="input-field">
                <label for="price">IPC’s price</label>
                <div class="input-container">
                  <input
                    class="input"
                    :class="{ 'input-error': invalid }"
                    type="text"
                    name="price"
                    id=""
                    placeholder="₦70,000"
                    required
                    v-model="price"
                  />
                </div>
              </div>
            </div>
            <div class="form__field">
              <div class="input-field">
                <label for="slash">Market slash price</label>
                <div class="input-container">
                  <input
                    class="input"
                    :class="{ 'input-error': invalid }"
                    type="text"
                    name="slash"
                    id=""
                    placeholder="₦80,000"
                    required
                    v-model="slash"
                  />
                </div>
              </div>
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
              ></textarea>
            </div>
            <div class="form__field">
              <div class="input-field">
                <label for="brand">Brand’s name</label>
                <div class="input-container">
                  <input
                    class="input"
                    :class="{ 'input-error': invalid }"
                    type="text"
                    name="brand"
                    id=""
                    placeholder="Mama’s rice"
                    required
                    v-model="brand"
                  />
                </div>
              </div>
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
              >
                <option disabled selected value="">
                  Please select a category
                </option>
                <option
                  v-for="option in categories"
                  :key="option?._id"
                  :value="option?.name"
                >
                  {{ option?.name }}
                </option>
              </select>
            </div>
            <div class="form__field">
              <label for="status">Status</label>
              <select class="input" name="status" id="" v-model="statusValue">
                <option disabled selected value="">
                  Please select a status
                </option>
                <option
                  v-for="option in status"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div class="form__field">
              <div class="input-field">
                <label for="weight">Measurement (Optional)</label>
                <div class="input-container">
                  <input
                    class="input"
                    :class="{ 'input-error': invalid }"
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
              <p>
                <strong>NOTE: </strong>Only maximum of 4 images to be selected
              </p>
              <input
                type="file"
                ref="fileInput"
                multiple
                @change="handleFileChange"
              />
              <!-- <button @click="uploadImages">Upload Images</button> -->
            </div>
            <!-- <div class="flex">
              <ImageUpload @image-selected="handleImageSelected" />
              <ImageUpload @image-selected="handleImageSelected" />
              <ImageUpload @image-selected="handleImageSelected" />
              <ImageUpload @image-selected="handleImageSelected" />
            </div> -->
            <div v-if="previewImages.length" class="flex">
              <div
                v-for="image in previewImages"
                :key="image.name"
                class="upload-box"
              >
                <img :src="image.url" :alt="image.name" />
              </div>
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
      productName: "", // Set initial values for data properties
      price: "",
      slash: "",
      description: "",
      brand: "",
      weight: "",
      invalid: false,

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
      previewImages: [], // Array to store image previews
    };
  },
  methods: {
    emitFunction() {
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
      // console.log(data.selectedImages);
    },
    emitDelete() {
      this.$emit("deleteProduct");
    },
    // handleImageSelected(file) {
    //   // Push the selected image data into the array
    //   this.selectedImages.push(file);
    //   // console.log("Selected images:", this.selectedImages);
    // },
    handleFileChange(event) {
      const maxImages = 4;
      this.selectedFiles = Array.from(event.target.files).slice(0, maxImages);
      this.previewImages = []; // Clear previous previews

      for (const file of this.selectedFiles) {
        // Create a preview URL for each selected image
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImages.push({ url: e.target.result, name: file.name });
        };
        reader.readAsDataURL(file);
      }
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
  align-items: center;
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
  border: 1px solid var(--grey-grey-4, #bdc0ce);
  background: var(--white, #fff);

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
</style>