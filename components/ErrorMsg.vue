<template>
    <div class="error-message">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_2260_9969)">
                <path d="M8 5.33334V8" stroke="#FF3B2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 10.6797V10.6667" stroke="#FF3B2D" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                    stroke="#FF3B2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_2260_9969">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        description: {
            type: String,
            default: () => ''
        }
    }
}
</script>
<style scoped>
.input-error{
    border:1px solid red;
}
.error-message p {
    color: red;
    font-size:12px;
    font-weight: 400;
    line-height: 16,
}

.error-message {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

}
</style>