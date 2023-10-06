<template>
  <div>
    <!-- <button @click="generateAndDownloadPDF">Save as PDF</button> -->
    <button @click="openPrintDialog">Save as PDF</button>
    <Invoice
      @invoiceHeight="newInvoiceHeight"
      ref="invoice"
      id="componentToSave"
    />
  </div>
</template>

<script setup>

</script>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import $ from 'jquery';

// import html2pdf from "html2pdf";

export default {
  data() {
    return {
      invoiceWidth: 0,
      invoiceHeight: 0,
    };
  },
  mounted() {
    // Create a new script element
    const popup = document.createElement("script");

    // Set the 'src' attribute to the URL of an external JavaScript file
    popup.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"
    );
    popup.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    );
    popup.setAttribute(
      "src",
      "/printThis.js"
    );

    // Set the 'async' attribute to true to load the script asynchronously
    popup.async = true;

    // Append the script element to the 'head' of the document
    document.head.appendChild(popup);

    // =================================

    // Get the div element by its ID
    const invoiceElement = document.getElementById("componentToSave");

    // Check if the element exists
    if (invoiceElement) {
      // Get the width and height of the invoice
      this.invoiceWidth = invoiceElement.clientWidth; // Width without padding and border
      this.invoiceHeight = invoiceElement.clientHeight; // Height without padding and border

      console.log(`Width: ${this.invoiceWidth}px`);
      console.log(`Height: ${this.invoiceHeight}px`);
    }
  },
  methods: {
    openPrintDialog() {
        $(".componentToSave").printThis({
          base: "https://jasonday.github.io/printThis/",
        });





        // const invoice = document.getElementById("componentToSave");
        //     console.log(invoice);
        //     console.log(window);
        //     var opt = {
        //         margin: 1,
        //         filename: 'myfile.pdf',
        //         image: { type: 'svg', quality: 1.0 },
        //         html2canvas: { scale: 0.9 },
        //         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        //     };
        //     html2pdf().from(invoice).set(opt).save();





      //   // Generate a dynamic PDF name based on the current date and time
      //   const pdfName = "kaiser rr";

      //   // Open the print dialog with the dynamic PDF name
      //   const printOptions = {
      //     filename: pdfName,
      //   };
      //   window.print(printOptions);
    //   const Element = document.getElementById("componentToSave");
    //   html2pdf().from(Element).save();
    },

    async generateAndDownloadPDF() {
      // Get the element you want to save as PDF
      const Element = document.getElementById("componentToSave");

      // Use html2canvas to capture the component as an image
      const canvas = await html2canvas(Element);
      const fullQuality = canvas.toDataURL("image/jpeg", 1.0);

      console.log("canvas:", canvas);
      //   console.log("fullQuality:", fullQuality);

      // Create a PDF document
      const pdf = new jsPDF("p", "px", "a4");

      // Calculate the aspect ratio to fit the content on the page
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      const position = 0;

      // Add the captured image to the PDF
      pdf.addImage(
        canvas.toDataURL("image/jpeg", 1.0),
        "JPEG",
        0,
        position,
        imgWidth,
        imgHeight
      );

      // Save the PDF with a specific name (e.g., 'myComponent.pdf')
      pdf.save("myComponent.pdf");
    },
  },
};
</script>


<style scoped>
</style>