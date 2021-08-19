<template>
  <div class="container">
    <div class="row">
      <!-- <h2 class="col-md-12"></h2> -->
      <!-- <h6 class="col-md-12">
        <div
          class="page-content-container"
          tabindex="-1"
        >
          <div
            class="animation-container"
            style="
              transform: matrix(1, 0, 0, 1, 0, -23);
              opacity: 1;
              left: 170px;
              top: 112px;
              width: 684px;
              height: 129px;
              z-index: 103;
            "
          >
            <style></style>
          </div>
        </div>
        <div
          class="animation-container"
          style="
            transform: matrix(1, 0, 0, 1, 0, 0);
            opacity: 1;
            left: 307.5px;
            top: 263px;
            width: 421px;
            height: 420px;
            z-index: 110;
            animation-name: animation_52_1;
            animation-duration: 26.5s;
            animation-delay: 0s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-fill-mode: none;
            animation-play-state: running;
          "
        >
          <style>
            @keyframes animation_52_1 {
              0% {
                transform: translate(0px, 0px) rotate(0deg) scale(1);
                opacity: 1;
                animation-timing-function: ease-in-out;
              }
              100% {
                transform: translate(0px, 0px) rotate(180deg) scale(1);
                opacity: 1;
              }
            }
          </style>
          <div
            class="rmwidget widget-picture"
            data-id="57dfe81fb269185900587080"
            style="
              left: 0px;
              top: 0px;
              width: 421px;
              height: 420px;
              z-index: 110;
            "
          >
            <img
              class="viewable"
              srcset=""
              src="https://d3n32ilufxuvd1.cloudfront.net/5717981cf8deea5c79da1016/549853/upload-b418a2c0-8a6a-11e8-b0c8-df17c0c696ee.png"
              style="opacity: 1"
              url="https://d3n32ilufxuvd1.cloudfront.net/5717981cf8deea5c79da1016/549853/upload-b418a2c0-8a6a-11e8-b0c8-df17c0c696ee.png"
            />
          </div>
        </div>
        <div
          class="animation-container"
          style="
            transform: matrix(1, 0, 0, 1, 0, 0);
            opacity: 1;
            left: 470.5px;
            top: 372px;
            width: 96px;
            height: 209px;
            z-index: 111;
            animation-name: animation_53_1;
            animation-duration: 1.9s;
            animation-delay: 0s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-fill-mode: none;
            animation-play-state: running;
          "
        >
          <div
            class="rmwidget widget-picture"
            data-id="57dfe83c2cc56c5300dadf04"
            style="
              left: 0px;
              top: 0px;
              width: 96px;
              height: 209px;
              z-index: 111;
            "
          >
            <img
              class="viewable"
              srcset=""
              src="https://d3n32ilufxuvd1.cloudfront.net/5717981cf8deea5c79da1016/549853/upload-b6a31e30-8a6a-11e8-b0c8-df17c0c696ee.png"
              style="opacity: 1"
              url="https://d3n32ilufxuvd1.cloudfront.net/5717981cf8deea5c79da1016/549853/upload-b6a31e30-8a6a-11e8-b0c8-df17c0c696ee.png"
            />
          </div>
        </div>
        <div
          class="animation-container"
          style="
            transform: matrix(1, 0, 0, 1, 0, 0);
            opacity: 0.83;
            left: 473px;
            top: 596px;
            width: 91px;
            height: 15px;
            z-index: 112;
            animation-name: animation_54_1;
            animation-duration: 1.9s;
            animation-delay: 0s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-fill-mode: none;
            animation-play-state: running;
          "
        >
          <div
            class="rmwidget widget-picture"
            data-id="57dfe83c9d5fb0e61e0844c2"
            style="left: 0px; top: 0px; width: 91px; height: 15px; z-index: 112"
          >
            <img
              class="viewable"
              srcset=""
              src="https://d3n32ilufxuvd1.cloudfront.net/5717981cf8deea5c79da1016/549853/upload-b6e99d10-8a6a-11e8-b0c8-df17c0c696ee.png"
              style="opacity: 0.33"
              url="https://d3n32ilufxuvd1.cloudfront.net/5717981cf8deea5c79da1016/549853/upload-b6e99d10-8a6a-11e8-b0c8-df17c0c696ee.png"
            />
          </div>
        </div>
      </h6> -->

      <!-- <div class="row"> -->
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-12 title text-center">Nos projets</div>
          <p class="btn-body-text">
            À l'aune de la révolution numérique impulsée par le développement et
            l’implémentation des nouvelles technologies, nous sommes convaincus
            que les actifs numériques, le WEB3 et Les blockchains apportent des
            solutions durables qui répondent à plusieurs grands enjeux actuels.
          </p>
        </div>
      </div>
      <div class="col-md-12 d-flex flex-wrap">
        <div
          class="p-4 h-31 text-center project"
          v-for="projet in projects"
          :key="projet.id"
          :style="{ border: '1px solid white' }"
        >
          <p>
            <span class="project_number text-white">{{ projet.id }}</span>
          </p>
          <p class="text-white">{{ projet.title }}</p>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
.project_number {
  border: 1px solid grey;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #171f30;
  color: white;
}
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
@keyframes animation_53_1 {
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