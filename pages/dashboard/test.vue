<template>
    <div>
        <h1>Download Page</h1>
        <button @click="downloadPDF">Download PDF</button>
        <Testcode @invoiceHeight="newInvoiceHeight" ref="invoice"/>
    </div>
</template>
  
<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


export default {
    data(){
        return{
          newHeight: 0,
        }
    },
    mounted(){
        this.newInvoiceHeight(this.newHeight)
    },
    methods: {
        newInvoiceHeight(invoiceHeight){
            this.newHeight = invoiceHeight
            console.log("newheight:", this.newHeight)
        },
        async downloadPDF() {

            const content = this.$refs.invoice.$el;
            console.log(content)
            // Customize the styling for the captured HTML (optional)
            content.style.margin = '30px';

            try {
                const canvas = await html2canvas(content, { useCORS: true });
                const imgData = canvas.toDataURL('image/jpeg');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, this.newHeight); // Set page size to A4 (210x297mm)

                // Define the PDF file name (customize as needed)
                const pdfName = 'testcode.pdf';

                // Save the PDF file
                pdf.save(pdfName);
            } catch (error) {
                console.error('Error capturing screenshot:', error);
            }
        },
    },
};
</script>
  
<style scoped>
/* Add page styles here */
button {
    cursor: pointer;
    border: 1px solid red;
    padding: 10px;
    border-radius: 10px;
}
  button:hover{
    background-color: red;
    color: white;
  }

  /* Add invoice styles here */
  .invoice {
    border: 1px solid #000;
    padding: 20px;
    margin: 20px;
  }
  
  .invoice-details {
    margin-bottom: 20px;
  }
  
  .invoice-items {
    width: 100%;
    border-collapse: collapse;
  }
  
  .invoice-items th,
  .invoice-items td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
  }
</style>
  