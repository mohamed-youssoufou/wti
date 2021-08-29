<template>
  <div id="home" class="index">
    <loader v-show="loading" />
    <!-- <Particles id="tsparticles" :options="options" /> -->
    <div class="flou"></div>
    <header>
      <navBar class="nav-bar" />
    </header>
    <main role="main">
      <section class="nos-lexique ">
        <nos-definition />
      </section>
      <section class="footer">
        <foot />
      </section>
    </main>
    <!-- <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script> -->
  </div>
</template>

<script>
import Vue from "vue";
import VueScrollTo from "vue-scrollto";


export default {
  mounted() {
    setTimeout(() => this.finish(), 2000);
  },
  data() {
    return {
      parentId: 1,
      loading: true,
       options: {
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
            enable: false,
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
      }
    };
  },
  computed: {
    change() {
      this.loading = false;
    },
  },
  methods: {
    // gtag() {
    //   dataLayer.push(arguments);
    // },
    // loadScript() {
    //   window.dataLayer = window.dataLayer || [];

    //   this.gtag("js", new Date());

    //   this.gtag("config", "G-7LPSCGVLHZ");
    // },
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
    pushToSousService(id) {
      this.parentId = id;
    },
  },
};
</script>

<style scoped>
.nos-lexique{
    min-height: 100vh;
    padding-top: 100px;
    color: white;
    position: relative;
    z-index: 3;
}
.flou {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
header {
  background: black;
}
.index {
  position: relative;
}
html,
body {
  width: 100%;
  background-color: rgba(0, 0, 0, 0) !important;
}
main {
  background-color: black;
}
.notre-mission {
  background-color: rgba(0, 0, 0, 0);
  position: relative;
  z-index: 4;
  min-height: 100vh;
}

#tsparticles {
  position: absolute;
  width: 100%;
  height: 100% !important;
  z-index: 3;
}

.contactez-nous {
  /* background: url("~/assets/img/background-color.svg") left bottom no-repeat; */
  background-size: 100% auto;
  position: relative;
  z-index: 4;
  min-height: 100vh;
}

.index {
  height: 100%;
}
.head-bg {
  position: relative;
  z-index: 4;
  width: 100%;
  height: 100%;
  background-color: black;
}
.nos-services {
  position: relative;
  z-index: 1;
}
.nav-bar {
  position: relative;
  z-index: 5;
}
.qui-some-nous {
  position: relative;
  z-index: 4;
  min-height: 100vh;
}
.s-convictions {
  /* background-color: #ffe100; */
  position: relative;
  top: 25px;
  position: relative;
  z-index: 4;
  min-height: 100vh;
}
.nos-projets {
  margin-bottom: 10px;
}
.nos-convictions,
.google-map,
.nos-projets,
.notre-mission {
  position: relative;
  z-index: 4;
  min-height: 100vh;
}
.sous-services,
.nos-services {
  position: relative;
  z-index: 4;
}
.footer {
  position: relative;
  z-index: 4;
}
</style>
