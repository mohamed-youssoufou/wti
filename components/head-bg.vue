
<template>
  <div id="app">
    <div class="banner align-item-center">
      <Particles
        id="tsparticles"
        :options="{
          background: {
            color: {
              value: 'rgba(0, 0, 0, 0.0)',
            },
            opacity: {
              value: '0.5',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }"
      />
      <div class="container-fluid" style="z-index: 5">
        <!-- <div class="col-sm-12">
          <div class="main1 d-flex align-items-center">
            <div class="big-circle">
              <div class="icon-block">
                <img
                  src="images/accepted-worldwide.svg"
                  alt="web design icon"
                />
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.work {
  position: absolute;
  top: 20%;
  z-index: 5;
  height: 100%
}
.banner {
  z-index: 1;
  overflow: hidden;
  position: relative;
  background: url(~assets/img/blockchainis.jpeg) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100%;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  /* position: fixed;
  top: 0;
  left: 0; */
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 800px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
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
