<template>
  <button @click="emitFunction" class="btn" :class="buttonClasses" :style="buttonStyles" :disabled="disabled">
    <div class="">{{ buttonText }}</div>
    <slot name="svg"></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return {
        // Button size
        small: this.size === "small",
        standard: this.size === "standard",
        // Button type
        primary: this.type === "primary",
        secondary: this.type === "secondary",
        ghost: this.type === "ghost",
        neutral: this.type === "neutral",
        // icon position
        "icon-left": this.icon === "icon-left",
        "icon-right": this.icon === "icon-right",
      };
    },
    buttonStyles() {
      return {
        // Define your CSS styles based on size
      };
    },
  },
  methods: {
    emitFunction() {
      this.$emit("clickButton");
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 100px;
  transition: 0.3s;
}

button.standard {
  display: flex;
  height: 48px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

button.small {
  display: flex;
  height: 32px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
}

button.primary {
  color: var(--white, #fff);
  background: var(--primary-p300, #0009b3);
}

button.primary:hover {
  color: var(--white, #fff);
  background-color: var(--primary-p400);
}

button.primary:focus,
button.primary:active {
  background-color: var(--primary-p500);
}

button.primary:disabled {
  background-color: var(--primary-p75);
}

button.secondary {
  color: var(--primary-p-300, #0009b3);
  border: 1px solid var(--primary-p75, #969ae0);
}

button.secondary:hover {
  background-color: var(--primary-p50);
}

button.secondary:active,
button.secondary:focus {
  background-color: var(--primary-p75);
}

button.secondary:disabled {
  border-color: var(--primary-p100);
  color: var(--primary-p100);
  background-color: var(--white);
}

button.ghost {
  color: var(--primary-p-300, #0009b3);
}

button.ghost:hover {
  color: var(--primary-p400);
}

button.ghost:active,
button.ghost:focus {
  color: var(--primary-p500);
}

button.ghost:disabled {
  color: var(--primary-p100);
}

button.neutral {
  color: var(--grey-grey-1, #303237);
  border: 1px solid var(--grey-grey4, #bdc0ce);
  background: var(--white, #fff);
  /* Neutral Button shadow */
  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.1),
    0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;
}

button.neutral:hover {
  background-color: var(--grey-grey6);
  border: 1px solid var(--grey-grey6);
}

button.neutral:active,
button.neutral:focus {
  background-color: var(--grey-grey5);
  border: 1px solid var(--grey-grey5);
}

button.neutral:disabled {
  color: var(--grey-grey4);
  background-color: var(--white);
  border: 1px solid var(--grey-grey4);
}

button.negative {
  color: var(--white, #fff);
  background: var(--negative-n-300, #ff3b2d);
}

button.negative:hover {
  background-color: var(--negative-n400);
}

button.negative:active,
button.negative:focus {
  background-color: var(--negative-n500);
}

button.negative:disabled {
  background-color: var(--negative-n75);
}

button.icon-right {
  flex-direction: row;
}

button.icon-left {
  flex-direction: row-reverse;
}</style>