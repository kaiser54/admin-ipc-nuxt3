<template>
    <div class="categories">
        <div class="recommend">
           <div class="recommended-text">
            <h3>
                Recommended for you
            </h3>
           </div>
           <div class="recommended-svg">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.666 13.3359L23.3327 20.0026L16.666 26.6693" stroke="#303237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#969AE0"/>
</svg>
           </div>
            
        </div>
        <div class="Category-page">
        <CategoryCard v-for="card in Cards" :key="card"
            :name = "card.name"
            :price = "card.price"
            :slash = "card.slash"
            :image= "card.image"
        />
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                Cards:[
                    {
                        price: '#75,000',
                        slash: '#80,000',
                        name: "Mama's Choice Nigerian Perboiled Rice 25kg",
                        image: require('~/assets/images/image(1a).png')
                    },
                    {
                        price: '#75,000',
                        slash: '#80,000',
                        name: "Devon King's Pure Vegetable Oil  - 5 Litres",
                        image: require('~/assets/images/image(1).png')
                    },
                    {
                        price: '#75,000',
                        slash: '#80,000',
                        name: "Portable 32 Pieces Egg Create",
                        image: require('~/assets/images/image(2b).png')
                    },
                    {
                        price: '#75,000',
                        slash: '#80,000',
                        name: "Binatone 1.5L Multipurpose Blender with Grinder - BLG 452",
                        image: require('~/assets/images/image(3).png')
                    },
                    {
                        price: '₦1,600',
                        slash: '₦2,000',
                        name: "Chat Foods Spice Dried Red Pepper 250G Jar (Chat Foods)",
                        nickname:"Chat Foods Spice Dried ...",
                        image: require('~/assets/images/image(7).png')
                    },
                ]
            }
        }
    }
</script>

<style scoped>
.categories{
    width: 55%;
    background-color: rgba(189, 192, 206, 1);
    padding: 15px;
    border-radius: 8px;
}
.Category-page{
    display: flex;
    /* flex-wrap: wrap; */
    margin-top: 10px;
    gap: 10px;
    width: 100%;
   
}
.recommended-text h3{
    font-size: 24px;
    line-height: 36px;
    font-family: var(--primary-font);
    margin: 0px;
 
}
.recommend{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>