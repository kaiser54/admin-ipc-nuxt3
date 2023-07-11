<template>
  <div>
    <div class="container zindex">
      <div class="branding">
        <nuxt-link :to="{ name: 'login' }">
          <img
            src="../assets/images/ipc-logo.png"
            alt="IPC Logo branding Independence purchasing company"
          />
        </nuxt-link>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}





.container {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  position: sticky;
  top: 0;
  left: 0;
}
.zindex {
  z-index: 99;
}
.branding {
  display: flex;
  width: 90%;
  padding: 24px 0;
}
.branding img {
  width: 90%;
}
.content {
    width: 90%;
    margin-top: 16px;
    margin-inline: auto;
}
@media (max-width: 750px) {
    .content {
      margin-top: 40px;
    }
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  max-width: 376px;
  width: 100%;
}
.header-text {
  color: var(--grey-grey1);
}

.header-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
}

.form-group {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 32px;

  width: 100%;
}
.form-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}
.input-field {
  width: 100%;
}
label {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: var(--grey-grey1);
}

@media (max-width: 550px) {
  h2 {
    font-size: 24px;
    line-height: 36px;
  }
}
</style>
