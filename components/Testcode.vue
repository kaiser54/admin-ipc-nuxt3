<template>
    <div id="invoice" class="invoice" ref="invoice">
        <h2>Invoice</h2>
        <div class="invoice-details">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Address:</strong> 123 Main St</p>
            <!-- Add more details here -->
        </div>
        <table class="invoice-items">
            <thead  >
                <tr>
                    <th v-for="header in tableHeader" :key="header">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in tableData" :key="index">
                    <td>{{ data.item }}</td>
                    <td>{{ data.description }}</td>
                    <td>{{ data.unitPrice }}</td>
                    <td>{{ data.quantity }}</td>
                    <td>{{ data.total }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
export default {
    props:{
        tableHeader:{
            type: Array,
            required: true
        },
        tableData:{
            type: Array,
            required: true
        }
    },
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
@media screen and (max-width:750px) {
    *{
        font-size: 10 px;
    }
}
</style>
  