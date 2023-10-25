<template>
  <div>
    <button @click="generateAndDownloadPDF">
      Save as PDF
    </button>
    <Invoice ref="myComponent" id="componentToSave" class="ttt" />
  </div>
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
  mounted() {
    this.createScript();
  },
  methods: {
    createScript() {
      // Create a new script element
      const popup = document.createElement("script");

      // Set the 'src' attribute to the URL of an external JavaScript file
      popup.setAttribute(
        "src",
        "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
      );

      // Set the 'async' attribute to true to load the script asynchronously
      popup.async = true;

      // Append the script element to the 'head' of the document
      document.head.appendChild(popup);
    },
    async generateAndDownloadPDF() {
      window.jsPDF = window.jspdf.jsPDF;
      var doc = new jsPDF();

      // Convert HTML content to PDF

      // Source HTMLElement or a string containing HTML.
      var elementHTML = document.querySelector("#componentToSave");

      doc.html(elementHTML, {
        callback: function (doc) {
          // Save the PDF
          doc.save("document-html.pdf");
        },
        margin: [10, 10, 10, 10],
        autoPaging: "text",
        x: 0,
        y: 0,
        width: 190, //target width in the PDF document
        windowWidth: 675, //window width in CSS pixels
      });
    },

    async generatePDF() {
      const pdf = new jsPDF();
      const element = document.getElementById("componentToSave");
      // Capture the HTML content of your component
      const component = this.$refs.myComponent; // Replace 'myComponent' with the ref name of your component
      const canvas = await html2canvas(element);

      // Add the captured content to the PDF
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 10);

      // Save the PDF or open it in a new tab
      pdf.save("my_component.pdf");
    },
  },
};
</script>

<style scoped>
.tt {
  position: absolute;
  top: -99%;
  z-index: -9999999999999999999999999;
}
</style>