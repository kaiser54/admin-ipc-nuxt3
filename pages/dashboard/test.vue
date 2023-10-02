<template>
    <div>
        <h1>Download Page</h1>
        <button @click="downloadPDF">Download PDF</button>
        <Testcode :tableHeader="tableHeader"
        :tableData="tableData"
         @invoiceHeight="newInvoiceHeight" ref="invoice"/>
    </div>
</template>
  
<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


export default {
    data(){
        return{
          newHeight: 0,
          tableHeader:[
            "Item", "Description", "Unit Price", "Quantity", "Total"
          ],
          tableData:[
            
  {
    item: "Product 1",
    description: "Description for Product 1",
    unitPrice: 20,
    quantity: 3,
    total: 60,
  },
  {
    item: "Product 2",
    description: "Description for Product 2",
    unitPrice: 15,
    quantity: 2,
    total: 30,
  },
  {
    item: "Product 3",
    description: "Description for Product 3",
    unitPrice: 25,
    quantity: 4,
    total: 100,
  },
  {
    item: "Service A",
    description: "Description for Service A",
    unitPrice: 50,
    quantity: 1,
    total: 50,
  },
  {
    item: "Service B",
    description: "Description for Service B",
    unitPrice: 40,
    quantity: 2,
    total: 80,
  },
  {
    item: "Product 4",
    description: "Description for Product 4",
    unitPrice: 18,
    quantity: 5,
    total: 90,
  },
  {
    item: "Service C",
    description: "Description for Service C",
    unitPrice: 60,
    quantity: 3,
    total: 180,
  },
  {
    item: "Product 5",
    description: "Description for Product 5",
    unitPrice: 22,
    quantity: 2,
    total: 44,
  },
  {
    item: "Service D",
    description: "Description for Service D",
    unitPrice: 35,
    quantity: 1,
    total: 35,
  },
  {
    item: "Product 6",
    description: "Description for Product 6",
    unitPrice: 28,
    quantity: 3,
    total: 84,
  },
  {
    item: "Product 6",
    description: "Description for Product 6",
    unitPrice: 28,
    quantity: 3,
    total: 84,
  },
  {
    item: "Product 6",
    description: "Description for Product 6",
    unitPrice: 28,
    quantity: 3,
    total: 84,
  },


          ]
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
            content.style.margin = '30px';

            try {
                const canvas = await html2canvas(content, { useCORS: true });
                const imgData = canvas.toDataURL('image/jpeg');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, this.newHeight);

                const pdfName = 'testcode.pdf';

                pdf.save(pdfName);
            } catch (error) {
                console.error('Error capturing screenshot:', error);
            }
        },
    },
};
</script>
  
<style scoped>
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
  