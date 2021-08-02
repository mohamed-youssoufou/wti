<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="">
      <b-navbar-brand v-scroll-to="'#home'" href="#">
        <div id="app_"></div>
        <img height="50px" width="100px" src="~/assets/img/log___.png"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form> -->
          <b-nav-item href="#" v-scroll-to="'#notre_mission'">Notre mission</b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#qui_sommes_nous'">Qui sommes nous</b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#nos_convictions'">Nos convictions</b-nav-item>
          <b-nav-item-dropdown text="Nos services" right>
            <b-dropdown-item
              @click="changeService(1)"
              href="#"
              v-scroll-to="'#element'"
              >Conférences et formations blockchain</b-dropdown-item
            >
            <b-dropdown-item
              @click="changeService(2)"
              href="#"
              v-scroll-to="'#element'"
              >Conseils et développement</b-dropdown-item
            >
            <b-dropdown-item
              @click="changeService(3)"
              href="#"
              v-scroll-to="'#element'"
              >Crypto-actifs</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item href="#" v-scroll-to="'#nos_projets'">Nos projets</b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#contactez_nous'">contactez-nous</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    var app = document.getElementById("app_");

    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });
    console.log(typewriter);

    typewriter
      .typeString("wealthtech innovations")
      .pauseFor(2500)
      .deleteChars(22)
      .pauseFor(2500)
      // .typeString("wealthtech innovations")
      // .deleteChars(22)
      // .pauseFor(1000)
      .start();
  },
  created() {
    if (process.browser) {
      this.$nextTick(function () {
        window.onscroll = function () {
          console.log("oK");
          let navbar = document.querySelector(".navbar");
          let sticky = navbar.offsetTop;
          if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky");
          } else {
            navbar.classList.remove("sticky");
          }
        };
      });
    }
  },
  methods: {
    changeService(id) {
      console.log("id", id);
      this.$emit("myEvent", id);
    },
  },
};
</script>

<style>
#app_>.Typewriter__wrapper {
  color: #fafafa;
  font-weight: bolder;
}
#app_ {
  color: white;
  line-height: 50px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  z-index: 10;
  width: 100px;
  font-size: 10px;
}
.navbar {
  font-family: fsl;
  border-width: 0 0 1px 0;
  position: fixed;
  width: 100%;
  font-size: 1.2em;
  top: 0;
  left: 0;
  margin: 0;
  transition: all ease 0.4s;
  z-index: 5;
  border-radius: 0;
  perspective: 1000px;
  transform-origin: top;
  border-bottom: 1px solid transparent;
  background-color: rgba(0, 0, 0, 0.5);
}
.navbar.sticky {
  background: #000000 !important;
  position: fixed;
  top: 0;
  width: 100%;
  transition: 0.5s ease;
}

.navbar.sticky + .content {
  padding-top: 60px;
}
.nav-link {
  color: white !important;
}
</style>