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
    <div class="form__wrapper">
      <!-- <div class="form__heading">{{ formHeading }}</div> -->
      <div class="form__heading border">Fill in the product details</div>
      <div class="form">
        <form action="">
          <div class="top flex">
            <div class="form__field">
              <InputField
                id="ProductName"
                label="Product's name"
                v-model="productName"
                type="text"
                placeholder="Ex: Mama’s pride rice"
                :required="true"
                :invalid="invalidName"
                :errorMessage="nameErrorMessage"
              />
            </div>
            <div class="form__field">
              <InputField
                id="price"
                label="IPC’s price"
                v-model="price"
                :value="priceValue"
                type="text"
                :required="true"
                placeholder="₦70,000"
                :invalid="invalidPrice"
                :errorMessage="priceErrorMessage"
              />
            </div>
            <div class="form__field">
              <InputField
                id="slash"
                label="Market slash price"
                v-model="slash"
                :value="slashValue"
                type="text"
                :required="true"
                placeholder="₦80,000"
                :invalid="invalidSlash"
                :errorMessage="slashErrorMessage"
              />
            </div>
          </div>
          <div class="second flex">
            <div class="form__field">
              <label for="description">Product’s name</label>
              <textarea
                class="input"
                name="description"
                id=""
                v-model="description"
                placeholder="Enter the product description"
              ></textarea>
            </div>
            <div class="form__field">
              <InputField
                id="brand"
                label="Brand’s name"
                type="text"
                v-model="brand"
                :value="brandValue"
                :required="true"
                placeholder="Mama’s rice"
                :invalid="invalidBrand"
                :errorMessage="brandErrorMessage"
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
              >
                <option disabled selected value="">
                  Please select a category
                </option>
                <option
                  v-for="option in categories"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
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
              <InputField
                id="weight"
                label="Weight (kg) (Optional)"
                type="nunmber"
                v-model="weight"
                :value="weightValue"
                :required="false"
                placeholder="5kg"
                :invalid="invalidWeight"
                :errorMessage="weightErrorMessage"
              />
            </div>
          </div>
          <div class="fourth">
            <div class="form__heading">Add product images</div>
            <div class="flex">
              <ImageUpload />
              <ImageUpload />
              <ImageUpload />
              <ImageUpload />
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
  },

  data() {
    return {
      productName: "", // Set initial values for data properties
      price: "",
      slash: "",
      description: "",
      brand: "",
      invalidName: false,
      nameErrorMessage: "",
      invalidPrice: false,
      priceErrorMessage: "",
      invalidSlash: false,
      slashErrorMessage: "",
      invalidBrand: false,
      brandErrorMessage: "",
      weight: "",
      invalidWeight: false,
      weightErrorMessage: "",

      status: [
        { label: "In stock", value: "option1" },
        { label: "Out of stock", value: "option2" },
      ],
      statusValue: "",

      categories: [
        { label: "Category 1", value: "option1" },
        { label: "Category 2", value: "option2" },
        { label: "Category 3", value: "option3" },
      ],
      categoryValue: "",
    };
  },
  computed: {
    productValue: {
      get() {
        return this.productName;
      },
      set(newValue) {
        this.productName = newValue;
      },
    },
    priceValue: {
      get() {
        return this.price;
      },
      set(newValue) {
        this.price = newValue;
      },
    },
    brandValue: {
      get() {
        return this.brand;
      },
      set(newValue) {
        this.brand = newValue;
      },
    },
    slashValue: {
      get() {
        return this.slash;
      },
      set(newValue) {
        this.slash = newValue;
      },
    },
    weightValue: {
      get() {
        return this.weight;
      },
      set(newValue) {
        this.weight = newValue;
      },
    },
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
      };
      console.log(data);
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

  color: var(--grey-grey3, #7e8494);

  background-image: url(../static/assets-chevron-down-arrow.png);
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 20px; /* Adjust as needed */

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
</style>