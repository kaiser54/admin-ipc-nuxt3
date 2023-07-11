<template>
  <div>
    <section>
      <div class="f-d-r">
        <img src="../assets/images/ipc-bg.png" alt="" />
      </div>
      <nuxt class="register-slot" />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.register-slot {
  width: 60%;
}
@media (max-width: 1200px) {
  .register-slot {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
::-webkit-scrollbar {
  display: none;
}

.f-d-r {
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  max-width: 40%;
  position: fixed;
  right: 0px;
  top: 0px;
  align-self: flex-start;
  /* flex: 1 1 0%; */
}
@media (max-width: 1200px) {
  .f-d-r {
    display: none;
  }
}
section {
  /* width: 100%; */
  /* height: 100vh; */
  /* background: #fff; */
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
}
.f-d-r img {
  position: sticky;
  top: 0;
}
/* .individual {
  flex: 1.7 1 0%;
  height: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-left: auto;
  max-width: 100%;
} */






.center {
  max-width: 491px;
  margin: 48px 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
@media (max-width: 750px) {
  .center {
    width: 90%;
    margin-inline: 0px;
  }
}
.switch-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;

  /* max-width: 265px; */
  margin-inline: auto;
  height: 40px;

  /* Grey/Grey6 */

  background: var(--grey-grey6);
  border-radius: 8px;
}
.switch-link button {
  background: transparent;
}
.switch-link p {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
