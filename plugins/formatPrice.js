// In your Nuxt.js component or utility file
export function formatPriceWithCommas(price) {
    // Use the toLocaleString method with appropriate options to add commas
    return price.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }
  