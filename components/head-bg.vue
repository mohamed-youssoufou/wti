
<template>
  <div id="app">
    <div class="banner align-item-center">
      <div class="main1 d-flex align-items-center">
        <div class="big-circle">
          <div class="icon-block">
            <img src="~/assets/img/1.png" alt="web design icon" />
          </div>
          <div class="icon-block">
            <img src="~/assets/img/2.png" alt="game design icon" />
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
            <img src="~/assets/img/1.png" alt="artificial intelligence icon" />
          </div>
        </div>
        <div class="center-logo">
          <div id="animation_"></div>
          <img
            src="~/assets/img/logo_wealth_.png"
            height="100"
            width="100"
            class="logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var app = document.getElementById("animation_");

    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });

    typewriter
      .typeString("WEALTHTECH INNOVATIONS")
      .pauseFor(2500)
      .deleteChars(22)
      .pauseFor(2500)
      // .typeString("wealthtech innovations")
      // .deleteChars(22)
      // .pauseFor(1000)
      .start();
  },
};
</script>

<style>
#animation_ > .Typewriter__wrapper {
  color: #f8f8f8;
  font-size: 1.6em;
  padding-left: 2%;
}

@media only screen and (max-width: 1444px) {
  #animation_ > .Typewriter__wrapper {
    color: #ffffff;
    font-size: 1.2em;
    padding-left: 3%;
  }
  #animation_ {
    position: absolute;
    height: 95%;
  }
}

@media only screen and (max-width: 1024px) {
  #animation_ > .Typewriter__wrapper {
    color: #ffffff;
    font-size: 1.2em;
    padding-left: -10%;
  }
}
@media only screen and (max-width: 812px) {
  #animation_ > .Typewriter__wrapper {
    color: #ffffff;
    font-size: 1.2em;
    padding-left: -10%;
  }
}


@media only screen and (max-width: 600px) {
  .main1 {
    width: 280px;
    height: 280px;
  }
  #animation_ > .Typewriter__wrapper {
    color: #ffffff;
    font-size: 0.5em;
    padding-left: -10%;
  }
  #animation_ {
    position: absolute;
    height: 100%;
    transform: translate(-13%, -23%)
  }
}

#animation_ {
  position: absolute;
  height: 105%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#app {
  background-color: rgba(0, 0, 0, 0);
}

.banner {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
}

/* @media (max-width: 1440px) {
  #tsparticles {
    height: 821px !important;
  }
}
@media (max-width: 375px) {
  #tsparticles {
    height: 821px !important;
    width: 100%;
  }
} */

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
