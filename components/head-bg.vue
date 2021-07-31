
<template>
  <div id="app">
    <div class="banner align-item-center">
      <div class="main1 mt-4 d-flex align-items-center">
        <div class="big-circle">
          <div class="icon-block">
            <img src="~/assets/img/1.png" alt="web design icon" />
          </div>
          <div class="icon-block">
            <img
              src="~/assets/img/2.png"
              alt="game design icon"
            />
          </div>
          <div class="icon-block">
            <img src="~/assets/img/1.png" alt="game dev icon" />
          </div>
          <div class="icon-block">
            <img src="~/assets/img/2.png" alt="ui-ux icon" />
          </div>
        </div>
        <div class="circle">
          <div class="icon-block">
            <img src="~/assets/img/2.png" alt="app icon" />
          </div>
          <div class="icon-block">
            <img src="~/assets/img/1.png" alt="blockchain icon" />
          </div>
          <div class="icon-block">
            <img src="~/assets/img/2.png" alt="ar-vr icon" />
          </div>
          <div class="icon-block">
            <img
              src="~/assets/img/1.png"
              alt="artificial intelligence icon"
            />
          </div>
        </div>
        <div class="center-logo">
          <img src="~/assets/img/logo_wealth.png" height="200" width="100" class="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  

};
</script>

<style scoped>

#app{
  background-color:rgba(0, 0, 0, 0);
}

.banner {
  overflow: hidden;
  position: relative;
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:rgba(0, 0, 0, 0);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 1000px;
  width: 100%;
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
