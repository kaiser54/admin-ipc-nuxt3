<template>
    <div class="category-card">
        <div class="category-card-visual">
            <div class="category-card-img">
            <img :src="image" alt="">
        </div>
        <div class="category-card-icon">
            <svg @click="toggleColor" :class="{Red : isRed}" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6304 21.8405L10.3843 16.3775C8.90659 14.8388 8.99964 12.3157 10.5863 10.8995C12.1604 9.49454 14.5471 9.76737 15.791 11.4945L16.0002 11.7848L16.2093 11.4945C17.4532 9.76737 19.8399 9.49454 21.414 10.8995C23.0007 12.3157 23.0938 14.8388 21.616 16.3775L16.3699 21.8405C16.1657 22.0531 15.8346 22.0531 15.6304 21.8405Z" :stroke="isRed ? '#FF0000' : '#565C69'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" :stroke="isRed? '#FF0000' : '#565C69'"/>
</svg>
        </div>

        </div>
        <div class="category-card-details">
            <div class="category-card-name">
            <p>{{ name }}</p>
            <!-- <p>Devon King's Pure Vegetable Oil <br> - 5 Litres</p> -->
        </div>
        <div class="category-card-prices">
            <div class="category-card-price">
                <p>{{ price }}</p>
                <!-- <p>#75,000</p> -->
            </div>
            <div class="category-card-slash">
                <p class="slash-price">{{ slash }}</p>
                <!-- <p class="slash-price">#80,000</p> -->
            </div>
        </div>
        </div>
   
    </div>
</template>

<script>
    export default {
        props:{
            image:{
                type: String,
                required: true
            },
            name:{
                type: String,
                required: true
            },
            price:{
                type: String,
                required: true
            },
           slash:{
                type: String,
                required: true
            },
        },
        data(){
            return{
                isRed: false
            }
        },
        methods:{
            toggleColor(){
                this.isRed = !this.isRed
            }
        }
    }
</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
;
}
.category-card{
    max-width: 230px;
    width: 100%;
    height: 269px;
    border-radius: 8px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 10px;
   padding: 10px;
   background-color: white;
}
.category-card-visual{
    /* max-width: 220px; */
    height: 161px;
    display: flex;
}
.category-card-visual img{
    width: 150px;
    height: 150px;
}
.category-card-details{
    width: 100%;
    /* height: 76px; */
    display: flex;
    flex-direction: column;
    gap: 5px;

}
.category-card-name p{
    color: rgba(86, 92, 105, 1);
    font-size: 14px;
    line-height: 21px;
    /* font-family: "Switzer", "DM Sans", "Inter", Arial, Helvetica, sans-serif; */
}
.category-card-price p{
    color: rgba(48, 50, 55, 1);
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    /* font-family: "Switzer", "DM Sans", "Inter", Arial, Helvetica, sans-serif; */
    
}
.category-card-slash p{
    color:rgba(126, 132, 148, 1) ;
    font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  /* font-family: "Switzer", "DM Sans", "Inter", Arial, Helvetica, sans-serif; */
  text-align: right;
  text-decoration-line: line-through;
}
.category-card-icon svg{

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 32px;
  height: 32px;
  border-radius: 100px;
 

}
.category-card-prices{
    display: flex;
    align-items: center;
    gap: 5px;
    /* border: 1px solid red; */
    width: 100%;
   
}
.red{
    cursor: pointer;
    stroke: red;
    fill: red;
}

</style>