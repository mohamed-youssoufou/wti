<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 title text-center">Nos projets</div>
      <p class="btn-body-text">
        À l'aune de la révolution numérique impulsée par le développement et
        l’implémentation des nouvelles technologies, nous sommes convaincus que
        les actifs numériques, le WEB3 et Les blockchains apportent des
        solutions durables qui répondent à plusieurs grands enjeux actuels.
      </p>
    </div>
    <div>
      <VueSlickCarousel v-bind="settings">
        <casapp
          v-for="projet in projects"
          :key="projet.id"
          :id="projet.id"
          :title="projet.title"
        />
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import casapp from "../components/card-projets.vue";

export default {
  components: { VueSlickCarousel, casapp },
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnDotsHover: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 376,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 813,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
      projects: [
        {
          id: 1,
          title:
            "Plateforme de distribution transfrontalière de fonds d’investissement",
          color: "#E63946",
        },
        {
          id: 2,
          title: "Plateforme de crowdfunding",
          color: "#ff0099",
        },
        {
          id: 3,
          title: "Blockchain pour la gestion des titres de propriété",
          color: "#A8DADC",
        },
        {
          id: 4,
          title: "Blockchain pour la certification des diplômes",
          color: "#457B9D",
        },
        {
          id: 5,
          title: "Cryptomonnaie à usage caritatif et social",
          color: "#1D3557",
        },
      ],
    };
  },
};
</script>

<style scoped>

.h-30 {
  height: 30%;
}
.title {
  max-width: none;
  margin-bottom: 2rem;
  margin-left: 0;
  opacity: 1;
  font-family: Spacegrotesk, sans-serif;
  color: #ffffff;
  font-size: 70px;
  line-height: 1.2em;
  font-weight: 700;
  text-align: center;
}
p.btn-body-text {
  text-align: justify;
  margin-bottom: 0.875em;
  font-family: fsl, sans-serif;
  font-size: 20px;
  line-height: 1.5em;
  color: #ffffff;
  margin-top: 0;
  width: 100%;
}
/* @keyframes animation_53_1 {
  0% {
    transform: matrix(1, 0, 0, 1, 0, 0);
    opacity: 1;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: matrix(1, 0, 0, 1, 0, -24);
    opacity: 1;
  }
}
@keyframes animation_45_1 {
  0% {
    transform: matrix(1, 0, 0, 1, 0, 0);
    opacity: 0;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: matrix(1, 0, 0, 1, 0, -23);
    opacity: 1;
  }
}
@keyframes animation_54_1 {
  0% {
    transform: matrix(1, 0, 0, 1, 0, 0);
    opacity: 0.83;
    animation-timing-function: linear;
  }
  100% {
    transform: matrix(0.7, 0, 0, 0.7, 0, 0);
    opacity: 0.42;
  }
}
.mag.mag-pages-container.container.page.content-scroll-wrapper.content-bounds.page-content-container {
  position: relative;
  overflow: visible;
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  outline: 0;
}
.animation-container {
  position: absolute;
  pointer-events: none !important;
}
.rmwidget.widget-picture {
  -webkit-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease;
} */
.title {
  max-width: none;
  margin-bottom: 2rem;
  margin-left: 0;
  opacity: 1;
  font-family: Spacegrotesk, sans-serif;
  color: #ffffff;
  font-size: 30px;
  line-height: 1.2em;
  font-weight: 700;
  text-align: left;
  padding-top: 20px;
}
.project {
  width: 25%;
}
@media screen and (max-width: 375px) {
  .title {
    font-size: 40px;
    text-align: justify;
  }
  .p.btn-body-text {
    justify-content: center;
  }
  .project {
    width: 100%;
  }
}
</style>