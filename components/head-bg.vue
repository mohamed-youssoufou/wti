
<template>
  <div id="app">
    <div class="banner align-item-center">
      <div class="main1 d-flex align-items-center">
        <div class="big-circle">
          <div class="icon-block">
            <img src="images/accepted-worldwide.svg" alt="web design icon" />
          </div>
          <div class="icon-block">
            <img
              src="images/decentralised-currency.svg"
              alt="game design icon"
            />
          </div>
          <div class="icon-block">
            <img src="images/safe-and-secure.svg" alt="game dev icon" />
          </div>
          <div class="icon-block">
            <img src="images/5.png" alt="ui-ux icon" />
          </div>
        </div>
        <div class="circle">
          <div class="icon-block">
            <img src="images/fast-transaction.svg" alt="app icon" />
          </div>
          <div class="icon-block">
            <img src="images/bit4.png" alt="blockchain icon" />
          </div>
          <div class="icon-block">
            <img src="images/ico2.3-2048x2048.png" alt="ar-vr icon" />
          </div>
          <div class="icon-block">
            <img
              src="images/ico2-2048x2048.png"
              alt="artificial intelligence icon"
            />
          </div>
        </div>
        <div class="center-logo">
          <img src="images/egm_fly_icon.png" class="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.work {
  position: absolute;
  top: 20%;
  z-index: 5;
  height: 100%;
}
.banner {
  z-index: 1;
  overflow: hidden;
  position: relative;
  /* background: url(~assets/img/blockchainis.jpeg) no-repeat center center;  */
  /* background-color: rgb(19, 22, 26); */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100%;

  /* Set up proportionate scaling */
  width: 100%;

  /* Set up positioning */
  /* position: fixed;
  top: 0;
  left: 0; */
}

@media (max-width: 1440px) {
  #tsparticles {
    height: 821px !important;
  }
}
@media (max-width: 375px) {
  #tsparticles {
    height: 821px !important;
    width: 100%;
  }
}

@media (max-width: 1024px) {
  .banner:after {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    transform: rotate(0deg);
    border-radius: 0;
  }
}
</style>
