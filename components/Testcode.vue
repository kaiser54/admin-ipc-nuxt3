<template>
    <div id="invoice" class="invoice" ref="invoice">
        <h2>Invoice</h2>
        <div class="invoice-details">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Address:</strong> 123 Main St</p>
            <!-- Add more details here -->
        </div>
        <table class="invoice-items">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Product 1</td>
                    <td>Description for Product 1</td>
                    <td>20</td>
                    <td>3</td>
                    <td>60</td>
                </tr>
                <tr>
                    <td>Product 2</td>
                    <td>Description for Product 2</td>
                    <td>15</td>
                    <td>2</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>Product 3</td>
                    <td>Description for Product 3</td>
                    <td>25</td>
                    <td>4</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Service A</td>
                    <td>Description for Service A</td>
                    <td>50</td>
                    <td>1</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Service B</td>
                    <td>Description for Service B</td>
                    <td>40</td>
                    <td>2</td>
                    <td>80</td>
                </tr>
                <tr>
                    <td>Service D</td>
                    <td>Description for Service D</td>
                    <td>45</td>
                    <td>4</td>
                    <td>180</td>
                </tr>
                <tr>
                    <td>Service E</td>
                    <td>Description for Service E</td>
                    <td>40</td>
                    <td>10</td>
                    <td>400</td>
                </tr>
                <tr>
                    <td>Service F</td>
                    <td>Description for Service E</td>
                    <td>40</td>
                    <td>30</td>
                    <td>1200</td>
                </tr>
                <tr>
                    <td>Service G</td>
                    <td>Description for Service G</td>
                    <td>10</td>
                    <td>20</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Service H</td>
                    <td>Description for Service H</td>
                    <td>50</td>
                    <td>2</td>
                    <td>100</td>
                </tr>
               
                <!-- Add more invoice items here -->
            </tbody>
        </table>
    </div>
</template>
  
<script>
export default {
    // Component logic here
    mounted(){
    this.getHeight()
    },
    methods:{
        getHeight(){
            const invoiceHeight = this.$refs.invoice.clientHeight
            const pxToMm = 0.24658
            const newHeight = invoiceHeight * pxToMm
            console.log(newHeight)
            this.$emit("invoiceHeight", newHeight)
        }
    }
};
</script>
  
<style scoped>
/* Add component styles here */
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
  