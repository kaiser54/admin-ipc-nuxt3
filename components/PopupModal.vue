<template>
  <div>
    <div class="logout-modal" style="z-index: 2">
      <div class="WH-auto animate__animated" :class="animate">
        <div class="modal">
          <div class="modal-msg">
            <div class="head-x">
              <h3 class="h3-medium">{{ title }}</h3>
              <svg
                @click="closeModal"
                class="circle"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.33301 12.6663L12.6663 3.33301M3.33301 3.33301L12.6663 12.6663L3.33301 3.33301Z"
                  stroke="#565C69"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="snippet" v-if="showSnippet">{{ snippet }}</p>
          </div>
          <slot name="selection" />
          <div class="button-grp">
            <button @click="closeModal" class="btn" :class="buttonClass">
              {{ buttonText }}
            </button>
            <button @click="okModal" class="btn" :class="buttonClass2">
              {{ buttonText2 }}
            </button>
          </div>
        </div>
        <div
          class="modalbg WH-auto logout-modal"
          ref="modalRef"
          @click="closeModal"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {
  props: {
    animate: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonText2: {
      type: String,
      required: true,
    },
    buttonClass: {
      type: String,
      required: true,
    },
    buttonClass2: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
    },
    showSnippet: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // Add a global click event listener
    window.addEventListener("click", this.handleOutsideClick);
  },
  beforeDestroy() {
    // Remove the global click event listener to avoid memory leaks
    window.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    handleOutsideClick(event) {
      const modalElement = this.$refs.modalRef;
      if (
        modalElement &&
        modalElement.contains &&
        modalElement.contains(event.target)
      ) {
        // Emit the event to close the modal
        this.$emit("closeModalBG");
      }
    },
    closeModal() {
      this.$emit("closeModal");
    },
    okModal() {
      this.$emit("okModal");
    },
  },
};
</script>

<style scoped>
.logout-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.WH-auto {
  width: 100%;
  height: 100%;
}
.modalbg {
  background: rgba(48, 50, 55, 0.3);
  position: relative;
  z-index: -1;
}
.modal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: flex-end; */
  padding: 24px;
  gap: 32px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 432px;
  width: 100%;
  /* height: 220px; */

  /* White */

  background: var(--white);
  /* Raised */

  box-shadow: 0px 138px 55px rgba(0, 2, 46, 0.01),
    0px 78px 47px rgba(0, 2, 46, 0.05), 0px 35px 35px rgba(0, 2, 46, 0.09),
    0px 9px 19px rgba(0, 2, 46, 0.1), 0px 0px 0px rgba(0, 2, 46, 0.1);
  border-radius: 16px;
}
.modal-msg {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
}
.head-x {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: flex-start; */
  padding: 0px;
  /* gap: 32px; */

  width: 100%;
}
.circle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  gap: 10px;

  width: 32px;
  height: 32px;

  /* Grey/Grey4 */

  border: 1px solid #bdc0ce;
  border-radius: 100px;
}
p.snippet {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */
  max-width: 353px;

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}
.button-grp {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}
.button-grp a {
  width: 100%;
}
.background {
  position: relative;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;

  z-index: 999999;

  /* Modal */

  background: rgba(48, 50, 55, 0.3);
}
@media (max-width: 950px) {
  .logout-modal {
    z-index: 2;
  }
  .modal {
    z-index: 3;
    max-width: 100%;
    height: auto;
    top: auto;
    bottom: 0px;
    transform: translate(-50%, -0%);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 16px;
  }
  .head-x h3 {
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    letter-spacing: -0.5px;
  }
}
</style>
