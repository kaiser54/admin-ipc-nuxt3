<template>
    <div class="guarantee-grp">
        <div class="guarantee" v-for="(text, index) in guarantee" :key="index">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M2.25 9.5L6.75 14L15.75 5" stroke="#20AF0B" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            guarantee: ["100% happiness guarantee", "Fast delivery under 24hours", "Enjoy low delivery fee"]
        }
    }
}
</script>

<style scoped>
.guarantee-grp {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
}

.guarantee {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;
}

.guarantee p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */


    /* Grey/Grey1 */

    color: var(--grey-grey1);
}
</style>