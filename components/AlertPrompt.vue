<template>
    <div class="top">
        <transition name="slide" enter-active-class="slide-enter-active" leave-active-class="slide-leave-active">
            <div v-if="visible" class="alert__prompt" :class="alertType" @click="hideAlert">
                <div class="icon">
                    <!-- Success svg -->

                    <svg v-if="alertType === 'success'" xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                        viewBox="0 0 25 24" fill="none">
                        <path d="M3.5 12L9.5 18L21.5 6" stroke="#167A08" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <!-- ----------- -->

                    <!-- warning svg -->

                    <svg v-if="alertType === 'warning'" xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                        viewBox="0 0 25 24" fill="none">
                        <path d="M12.5 8V12" stroke="#B38820" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12.5 16.0195V16" stroke="#B38820" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                            stroke="#B38820" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <!-- ------------ -->

                    <!-- error svg -->

                    <svg v-if="alertType === 'error'" xmlns="http://www.w3.org/2000/svg" width="25" height="24"
                        viewBox="0 0 25 24" fill="none">
                        <path d="M5.5 19L19.5 5M5.5 5L19.5 19L5.5 5Z" stroke="#B3291F" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <!-- ---------- -->
                </div>
                <div class="message">{{ message }}</div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
        alertType: {
            type: String,
            default: 'success',
        },
    },
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        showAlert() {
            this.visible = true;
            setTimeout(this.hideAlert, 3000); // Hide the alert after 4 seconds
        },
        hideAlert() {
            this.visible = false;
        },
    },
    mounted() {
        this.showAlert();
    },
};
</script>

<style scoped>
.slide-enter-active {
    animation: slide-in 1s ease;
}

.slide-leave-active {
    animation: slide-out .5s ease;
}

@keyframes slide-in {
    from {
        transform: translateY(-200px);
    }

    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-200px);
    }
}

.top {
    top: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    /* Update to horizontally center the box */
    z-index: 99;
    /* position: relative; */
}

.alert__prompt {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* Add this line to center horizontally */
    padding: 16px;
    gap: 8px;
    border-radius: 16px;
    width: 343px;
    height: 64px;
}

.message {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}

.success {
    /* Positive/P50 */

    background: var(--positive-p50);
    /* Positive/P100 */

    border: 1px solid var(--positive-p100);
    /* Product card hover */

    box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
}

.success .message {
    /* Positive/P400 */
    color: var(--positive-p400);
}

.warning {
    background: var(--warning-w50);
    /* Warning/W75 */

    border: 1px solid var(--warning-w75);
    /* Product card hover */

    box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
}

.warning .message {
    /* Warning/W400 */

    color: var(--warning-w400);
}

.error {
    /* Negative/N50 */

    background: var(--negative-n50);
    /* Negative/N75 */

    border: 1px solid var(--negative-n75);
    /* Product card hover */

    box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
}

.error .message {
    /* Negative/N400 */

    color: var(--negative-n400);
}
</style>