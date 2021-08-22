<template>
  <div class="container nos-cas">
    <div class="row">
      <h2 class="col-md-12 text-center">Cas d'utilisation</h2>
    </div>
    <div>
      <VueSlickCarousel v-bind="settings">
        <casapp
          v-for="service in domaines"
          :key="service.id"
          :title="service.title"
          :detail="service.detail"
          :icone="service.img"
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
          detail: `
                    <ul>
                        <li>Sportifs professionnel</li>
                        <li>Equipes</li>
                        <li>Fédérations</li>
                    </ul>
                    `,
          img: "theme.jpeg"
        },
        {
          id: 2,
          title: "Culture",
          detail: `
                    <ul>
                        <li>Artistes</li>
                        <li>Collectionneurs</li>
                        <li>Art numérique</li>
                        <li>producteurs</li>
                        <li>Cinéastes</li>
                        <li>Acteurs</li>
                    </ul>
                    `,
        },
        {
          id: 3,
          title: "Santé",
          detail: `
                    <ul>
                        <li>Ordre des médecins</li>
                        <li>Mutuelles complémentaires</li>
                        <li>Assurance maladie</li>
                        <li>Dossier médicale</li>
                        <li>Ordre des pharmaciens</li>
                    </ul>
                    `,
        },
        {
          id: 4,
          title: "Administration publique",
          detail: `
                    <ul>
                        <li>Etat Civil</li>
                        <li>Cadastre</li>
                        <li>Marché public</li>
                        <li>Elections</li>
                    </ul>
                    `,
        },
        {
          id: 5,
          title: "Agro-industrie / Agriculture",
          detail: `
                    <ul>
                        <li>Traçabilité des aliments</li>
                        <li>Conformité des cultures</li>
                        <li>Production</li>
                    </ul>
                    `,
        },
        {
          id: 6,
          title: "Education",
          detail: `
                    <ul>
                        <li>Diplômes et relevés de notes</li>
                        <li>Grandes écoles</li>
                        <li>Universités</li>
                        <li>Collèges et lycées</li>
                    </ul>
                    `,
        },
        {
          id: 8,
          title: "Professions règlementées",
          detail: `
                    <ul>
                        <li>Notaires</li>
                        <li>Experts comptables</li>
                        <li>Avocats</li>
                        <li>Géomètres</li>
                        <li>Huissiers justice</li>
                    </ul>
                    `,
        },
        {
          id: 9,
          title: "Hôtellerie",
          detail: `
                    
                    `,
        },
        {
          id: 10,
          title: "Assurance",
          detail: `
                    
                    `,
        },
        {
          id: 11,
          title: "Média et publicité",
          detail: `
                    
                    `,
        },
        {
          id: 12,
          title: "Banque et Finance",
          detail: `
                    
                    `,
        },
        {
          id: 12,
          title: "Supply Chain",
          detail: `
                    
                    `,
        },
      ],
    };
  },
};
</script>

<style scoped>
.nos-cas{
    min-height: 100vh
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