<template>
  <div class="index">
    <loader v-if="loading" />
    <header class="h-100">
      <headBg class="head-bg" />
      <navBar @myEvent="pushToSousService" class="nav-bar" />
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
      <section>
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
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import VueScrollTo from "vue-scrollto";

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
html,
body {
  height: 100%;
}
/* .notre-mission{
  background-image: url('~/assets/img/spaceship.png');
  background-repeat: no-repeat;
  background-size: 300px;
  background-position: 100px 100% 0% 0%;

} */

.index {
  height: 100%;
}
.head-bg {
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
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
  background-color: #171f30;
}
.s-convictions {
  background-color: #ffe100;
  position: relative;
  top: 25px;
  box-shadow: 0 4px 2px -2px rgb(225, 223, 223);
}
.nos-convictions {
  position: relative;
  background-image: url("~/assets/img/jaune.svg");
}
</style>
