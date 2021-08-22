<template>
  <div class="container nos-cas">
    <div class="row">
      <h2 class="col-md-12 text-center">Cas d'utilisation</h2>
    </div>
    <div class="h-100">
      <VueSlickCarousel v-bind="settings">
        <casapp
          v-for="service in domaines"
          :key="service.id"
          :title="service.title"
          :detail="service.detail"
          :icone="service.img"
          class="h-100"
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
import casapp from "../components/card-cas-d-application.vue";

export default {
  components: { VueSlickCarousel, casapp },
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
      domaines: [
        {
          id: 1,
          title: "Sport",
          detail: `Sportifs professionnel, Equipes, Fédérations`,
          img: "theme.jpeg",
        },
        {
          id: 2,
          title: "Culture",
          detail: `
          Artistes,
Collectionneurs,
producteurs,
Cinéastes,
Acteurs,
Art numérique
                    `,
          img: "blockchain1.jpeg",
        },
        {
          id: 3,
          title: "Santé",
          detail: `
                   Ordre des médecins,
Mutuelles complémentaires,
Assurance maladie,
Dossier médicale,
Ordre des pharmaciens
                    `,
          img: "blockchain2.jpeg",
        },
        {
          id: 4,
          title: "Administration publique",
          detail: `
                    Etat Civil,
Cadastre,
Marché public,
Elections
                    `,
          img: "theme.jpeg",
        },
        {
          id: 5,
          title: "Agro-industrie/Agriculture",
          detail: `
                   Traçabilité des aliments,
Conformité des cultures,
Production
                    `,
          img: "theme.jpeg",
        },
        {
          id: 6,
          title: "Education",
          detail: `
                   Diplômes et relevés de notes
Grandes écoles
Universités
Collèges et lycées
                    `,
          img: "theme.jpeg",
        },
        {
          id: 8,
          title: "Professions règlementées",
          detail: `
                   Notaires,
Experts comptables,
Avocats,
Géomètres,
Huissiers justice
                    `,
          img: "theme.jpeg",
        },
        {
          id: 9,
          title: "Hôtellerie",
          detail: `
                    
                    `,
          img: "theme.jpeg",
        },
        {
          id: 10,
          title: "Assurance",
          detail: `
                    
                    `,
          img: "theme.jpeg",
        },
        {
          id: 11,
          title: "Média et publicité",
          detail: `
                    
                    `,
          img: "theme.jpeg",
        },
        {
          id: 12,
          title: "Banque et Finance",
          detail: `
                    
                    `,
          img: "theme.jpeg",
        },
        {
          id: 12,
          title: "Supply Chain",
          detail: `
                    
                    `,
          img: "theme.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.slick-list {
  height: 100%;
}
.nos-cas {
  min-height: 100vh;
}
.heightLight {
  color: #2a80b9;
}

.title {
  font-family: fsl;
  font-weight: bolder;
  color: white;
}
.cover-trios a.trio-cover {
  display: block;
}
.wrap-trios .trio-cover {
  padding: 15px 0;
}
.trio-cover {
  /* width: 25%; */
  text-decoration: none;
  /* padding: 0 15px; */
}
a {
  color: royalblue;
}
.slick-arrow.slick-prev,
.slick-arrow.slick-next {
  display: block;
  color: rgb(0, 0, 0);
  background: #000000;
  border-radius: 50%;
  border: 0px solid white !important;
  font-family: tahoma;
}
.slick-arrow {
}
</style>