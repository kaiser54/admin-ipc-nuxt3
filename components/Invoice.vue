<template>
  <div class="" id="invoice" ref="invoice">
    <div class="w-[100%] container mx-auto py-8 px-9 bg-white">
      <img
        src="https://ipc-admin.ipc-africa.com/_nuxt/ipc-logo.192b84d7.png"
        alt=""
      />
      <div class="flex justify-end">
        <div class="mb-6">
          <p class="text-xs mb-3 text-[#7E8494]">Bill to:</p>
          <p class="text-sm text-[#303237] mb-1 font-medium">
            {{ customer?.businessName }}
          </p>
          <p class="text-xs text-[#7E8494]">{{ customer?.email }}</p>
          <div
            class="w-fit h-7 text-[#057E45] bg-[#E6F8EF] rounded-[100px] flex items-center justify-center text-xs px-3 font-medium mt-3"
          >
            <span>Business</span>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-xl text-[#303237] font-medium">
          Thank you for your order!
        </h3>
        <p class="text-sm text-[#7E8494]">
          Your order has been confirmed and will be shipped soon
        </p>
      </div>
      <div>
        <div class="grid grid-cols-4">
          <div>
            <p class="text-xs text-[#7E8494] mb-3">Order Date</p>
            <p class="text-xs text-[#303237] font-medium">31 Jul, 2023</p>
          </div>
          <div>
            <p class="text-xs text-[#7E8494] mb-3">Order Time</p>
            <p class="text-xs text-[#303237] font-medium">07:52 PM</p>
          </div>
          <div>
            <p class="text-xs text-[#7E8494] mb-3">Delivery Date</p>
            <p class="text-xs text-[#303237] font-medium">1 Aug, 2023</p>
          </div>
          <div>
            <p class="text-xs text-[#7E8494] mb-3">Payment Method</p>
            <div class="flex gap-1 items-center">
              <img
                alt=""
                class="w-16px"
                src="https://gosource.app/paystack.png"
              />
              <span class="text-xs text-[#303237] font-medium">{{
                orders?.paymentMethod || "xxx xxxx xxxx 1234"
              }}</span>
            </div>
          </div>
        </div>
        <hr class="my-5" />
        <div class="grid grid-cols-4">
          <div>
            <p class="text-xs text-[#7E8494] mb-3">Invoice No.</p>
            <p class="text-xs text-[#303237] font-medium">IPC-000927</p>
          </div>
          <div>
            <p class="text-xs text-[#7E8494] mb-3">Order Id</p>
            <p class="text-xs text-[#303237] font-medium">{{ orders?._id }}</p>
          </div>
          <div>
            <p class="text-xs text-[#7E8494] mb-3">No. of orders</p>
            <p
              class="text-xs text-[#303237] font-medium"
              style="margin-left: 40px"
            >
              {{ orders?.products.length }}
            </p>
          </div>
          <div>
            <p class="text-xs text-[#7E8494] mb-3">Delivery Address</p>
            <p class="text-xs text-[#303237] font-medium">
              {{ orders?.address.streetAddress }}, {{ orders?.address.lga }},
              {{ orders?.address.state }}.
            </p>
          </div>
        </div>
      </div>

      <div class="my-10">
        <table class="table-auto w-full border-spacing-10">
          <thead class="text-sm text-[#303237] bg-[#F4F5F8]">
            <tr class="text-left">
              <th class="py-3 pl-3">#</th>
              <th class="px-3 py-3">Item & Description</th>
              <th class="text-center px-3 py-3">Qty</th>
              <th class="text-center px-3 py-3">Rate</th>
              <th class="text-right px-3 py-3">Amount</th>
            </tr>
          </thead>
          <tbody class="text-xs w-full text-left">
            <tr class="border-b border-b-[#E5E7EF]" v-for="(order, index) in orders.products" :key="index">
              <th class="pl-3">{{ index + 1 }}</th>
              <td class="py-4 px-3">
                <div class="flex items-center gap-x-1">
                  <img
                    alt=""
                    :src="order?.product?.images[0]?.url"
                    />
                  <p class="#565C69 font-medium">[{{ order?.product?.brand }}], {{ order?.product?.name }}</p>
                </div>
              </td>
              <td class="py-4 px-3">
                <div class="flex flex-col items-center justify-center">
                  <p>{{ order.quantity }}</p>
                  <p>Pcs</p>
                </div>
              </td>
              <td class="text-[#565C69] text-center td-img"># {{ formatPriceWithCommas(order?.product?.actualPrice) }}</td>
              <td class="text-[#303237] text-right font-medium td-img">
                # {{ formatPriceWithCommas(order?.totalPrice) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pl-3 mb-10">
        <div class="border-b border-b-[#E5E7EF] pb-4">
          <div class="flex items-center justify-between pb-4">
            <p class="text-[#565C69] text-xs">Subtotal</p>
            <p class="text-sm text-[#303237] font-medium td-img">
              # {{ formatPriceWithCommas(orders?.subtotal) }}
            </p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-[#565C69] text-xs">Delivery fee</p>
            <p class="text-sm text-[#303237] font-medium td-img">
              # {{ formatPriceWithCommas(orders?.deliveryFee) }}
            </p>
          </div>
        </div>
        <div
          class="border-b border-b-[#E5E7EF] flex items-center justify-between py-5"
        >
          <p class="text-[#565C69] text-sm">Total</p>
          <p class="text-base text-[#303237] font-medium td-img">
            # {{ formatPriceWithCommas(orders?.totalPrice) }}
          </p>
        </div>
      </div>

      <footer class="text-xs">
        <div class="mb-6">
          <p class="text-[#7E8494] mb-1">Note</p>
          <p class="text-[#565C69]">
            Independent Purchasing Company, 1025100872, United Bank of Africa
          </p>
        </div>
        <div>
          <p class="text-[#7E8494] mb-1">Terms & Conditions</p>
          <p class="text-[#565C69]">
            Please note that all goods received in good conditions are not
            eligible for return. All defected goods should not be tampered with
            as we would withdraw them for replacement.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orders: {
      type: Object,
      required: true,
    },
    customer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    formatPriceWithCommas(price) {
      // Use the toLocaleString method with appropriate options to add commas
      return price.toLocaleString(undefined, { maximumFractionDigits: 2 });
    },
  },
};
</script>

<style scoped>
#invoice {
  width: 100%;
}
*,
::before,
::after {
  box-sizing: border-box;

  border-width: 0;

  border-style: solid;

  border-color: #e5e7eb;
}

::before,
::after {
  --tw-content: "";
}

html {
  line-height: 1.5;

  -webkit-text-size-adjust: 100%;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
}

body {
  margin: 0;

  line-height: inherit;
}

hr {
  height: 0;

  color: inherit;

  border-top-width: 1px;
}

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;

  font-size: 1em;
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  text-indent: 0;

  border-color: inherit;

  border-collapse: collapse;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;

  font-feature-settings: inherit;

  font-variation-settings: inherit;

  font-size: 100%;

  font-weight: inherit;

  line-height: inherit;

  color: inherit;

  margin: 0;

  padding: 0;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  /* -webkit-appearance: button; */

  background-color: transparent;

  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  /* -webkit-appearance: textfield; */

  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;

  font: inherit;
}

summary {
  display: list-item;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

dialog {
  padding: 0;
}

textarea {
  resize: vertical;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;

  color: #9ca3af;
}

button,
[role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;

  /* vertical-align: middle; */
}

img,
video {
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none;
}

*,
::before,
::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
}

.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.my-10 {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mb-10 {
  margin-bottom: 2.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.flex {
  display: flex;
}

.table {
  display: table;
}

.grid {
  display: grid;
}

.h-\[18px\] {
  height: 18px;
}

.h-8 {
  height: 2rem;
}

.h-6 {
  height: 1.5rem;
}

.h-7 {
  height: 1.75rem;
}

.w-\[595px\] {
  width: 595px;
}

.w-\[58px\] {
  width: 58px;
}

.w-16 {
  width: 4rem;
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.w-full {
  width: 100%;
}

.table-auto {
  table-layout: auto;
}

.table-fixed {
  table-layout: fixed;
}

.border-spacing-10 {
  --tw-border-spacing-x: 2.5rem;
  --tw-border-spacing-y: 2.5rem;
  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-1 {
  gap: 0.25rem;
}

.gap-x-1 {
  -moz-column-gap: 0.25rem;
  column-gap: 0.25rem;
}

.rounded-\[100px\] {
  border-radius: 100px;
}

.border {
  border-width: 1px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-b-\[\#E5E7EF\] {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(229 231 239 / var(--tw-border-opacity));
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-\[\#E6F8EF\] {
  --tw-bg-opacity: 1;
  background-color: rgb(230 248 239 / var(--tw-bg-opacity));
}

.bg-\[\#F4F5F8\] {
  --tw-bg-opacity: 1;
  background-color: rgb(244 245 248 / var(--tw-bg-opacity));
}

.p-1 {
  padding: 0.25rem;
}

.p-4 {
  padding: 1rem;
}

.px-9 {
  padding-left: 2.25rem;
  padding-right: 2.25rem;
}

.py-7 {
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}

.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.pl-3 {
  padding-left: 0.75rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pl-2 {
  padding-left: 0.5rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.font-medium {
  font-weight: 500;
}

.text-\[\#7E8494\] {
  --tw-text-opacity: 1;
  color: rgb(126 132 148 / var(--tw-text-opacity));
}

.text-\[\#303237\] {
  --tw-text-opacity: 1;
  color: rgb(48 50 55 / var(--tw-text-opacity));
}

.text-\[\#057E45\] {
  --tw-text-opacity: 1;
  color: rgb(5 126 69 / var(--tw-text-opacity));
}

.text-\[\#565C69\] {
  --tw-text-opacity: 1;
  color: rgb(86 92 105 / var(--tw-text-opacity));
}
.w-16px {
  width: 16px;
}
td img {
  max-width: 49px !important;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif !important;
}
.td-img img,
p img {
  display: inline;
  width: 10px;
  margin-right: 5px;
}
</style>