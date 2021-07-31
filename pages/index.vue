<template>
  <div class="index">
    <loader v-if="loading" />
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
      }"
    />
    <header class="h-100">
      <navBar @myEvent="pushToSousService" class="nav-bar" />
      <headBg class="head-bg" />
    </header>
    <main role="main">
      <section class="notre-mission">
        <notre-mission />
      </section>
      <section class="qui-some-nous">
        <qui-somme-nous />
      </section>
      <section>
        <nos-services
          href="#"
          v-scroll-to="'#element'"
          @myEvent="pushToSousService"
          class="nos-services"
        />
      </section>
      <section class="sous-services">
        <sous-services id="element" :parentId="parentId" />
      </section>
      <section class="nos-convictions">
        <div class="w-100 s-convictions">
          <nos-convictions />
        </div>
      </section>
      <section class="">
        <nos-projets />
      </section>
      <section class="google-map mt-4">
        <google-map />
      </section>
      <section class="contactez-nous">
        <contactez-nous />
      </section>

      <section class="">
        <foot />
      </section>
    </main>
     <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
  </div>
</template>

<script>
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import contactezNous from "../components/contactez-nous.vue";

// Vue.use(VueScrollTo)

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

export default {
  components: { contactezNous },
  mounted() {
    setTimeout(() => this.finish(), 2000);
  },
  data() {
    return {
      parentId: 1,
      loading: true,
    };
  },
  computed: {
    change() {
      this.loading = false;
    },
  },
  methods: {
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

<style >
header {
  background:black;
}
.index {
  position: relative;
}
html, body {
    width: 100%;
    background-color:rgba(0, 0, 0, .0)!important;
}
main {
  background-color: black;
}
.notre-mission {
  background-color: rgba(0, 0, 0, 0);
  position: relative;
  z-index: 4;
}

#tsparticles {
  position: absolute;
  width: 100%;
  height: 100% !important;
  z-index: 4;
}

.contactez-nous {
  /* background: url("~/assets/img/background-color.svg") left bottom no-repeat; */
  background-size: 100% auto;
  position: relative;
  z-index: 4;
}

.index {
  height: 100%;
}
.head-bg {
  position: relative;
  z-index: 4;
  width: 100%;
  height: auto;
  background-color:black;
}
.nos-services {
  position: relative;
  z-index: 1;
  /* width: 100%; */
}
.nav-bar {
  position: relative;
  z-index: 2;
}
.qui-some-nous {
  position: relative;
  z-index: 4;
}
.s-convictions {
  /* background-color: #ffe100; */
  position: relative;
  top: 25px;
  position: relative;
  z-index: 4;
}
.nos-convictions {
  position: relative;
  position: relative;
  z-index: 4;
}
.google-map {
  position: relative;
  z-index: 4;
}
.sous-services {
  position: relative;
  z-index: 4;
}
.nos-services {
  position: relative;
  z-index: 4;
}
</style>
