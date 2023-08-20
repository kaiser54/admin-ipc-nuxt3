<template>
  <div class="dash__wrapper">
    <div class="icon__name">
      <div class="circle">
        <slot name="svg"></slot>
      </div>
      <div class="name">{{ cardName }}</div>
    </div>
    <div class="dash__counter">
      <div class="name__active">
        <h2>
          {{ counterName }}
        </h2>
        <div class="active" v-if="active"></div>
      </div>
      <slot name="selector"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardName: {
      type: String,
      required: true,
    },
    counterName: {
      // type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.dash__wrapper {
  display: flex;
  max-width: 235px;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;

  border-radius: 16px;
  border: 1px solid var(--grey-grey5, #e5e7ef);
  background: #fff;

  /* Neutral Button shadow */
  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.1),
    0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;
}
.icon__name {
  display: flex;
  align-items: center;
  gap: 12px;
}
.circle {
  display: flex;
  width: 40px;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 100px;
  border: 1px solid var(--grey-grey4, #bdc0ce);
  background: #fff;

  /* Neutral Button shadow */
  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.1),
    0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;
}
.name {
  color: var(--grey-grey2, #565c69);

  /* Body Large/Body Large Medium */
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.dash__counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.name__active {
  display: flex;
  align-items: center;
  gap: 8px;
}
h2 {
  color: var(--grey-grey1, #303237);

  /* H2/Heading 2 Medium */
  font-size: 34px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1px;
}
.active {
  width: 13px;
  height: 13px;

  border-radius: 50%;
  background: var(--positive-p300, #20af0b);
}
</style>