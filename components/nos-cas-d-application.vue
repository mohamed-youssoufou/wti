<template>
  <div class="container nos-cas">
    <div class="row">
      <h2 class="col-md-12 text-center">Cas d'application</h2>
      
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
    <div class="row">
      <p class="col-md-12 mt-4 text-left">
        La Blockchain vous permet de simplifier la tenue des dossiers et de
        rationaliser les flux de travail partagés. L'implémentation de cette
        technologie dans votre organisation vous permettra sûrement d'accélérer
        votre développement. C'est pourquoi nous vous proposons de découvrir de
        quelle façon implémenter la blockchain dans votre secteur d'activité. La
        blockchain a passé le cap de l'évangélisation. Il n'est plus nécessaire
        de rappeler l'intérêt que représente cette technologie. Les cas d'usage
        sont infinis et nombre d'entreprises sont passées du stade de POC (proof
        of concept) aux réalisations bien concrètes. Quelques exemples : <br />

        <ul>
          <li>GE Aviation utilise la blockchain pour simplifier le suivi des pièces des avions, de l’usine au vol.</li>
          <li>Bühler utilise la technologie de blockchain pour suivre les cultures de la ferme à l’assiette, ce qui lui permet de produire chaque jour des aliments sains et sûrs pour deux milliards de personnes.</li>
          <li>Nasdaq apporte aux marchés financiers la technologie blockchain pour gérer l’exécution, le paiement et le règlement des transactions à partir de plusieurs blockchains et mécanismes de paiement.</li>
        </ul>
      </p>
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
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnDotsHover: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 414,
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
          img: "Blockchain-sport-wealthtech.gif",
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
          img: "Blockchain-culture-wealthtech.gif",
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
          img: "Blockchain-santé-wealthtech.gif",
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
          img: "blockchain-administration-Wealthtech.gif",
        },
        {
          id: 5,
          title: "Agro-industrie/Agriculture",
          detail: `
                  Traçabilité des aliments,
                  Conformité des cultures,
                  Production
          `,
          img: "Blockchain-agro-industrie-wealthtech.gif",
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
          img: "Blockchain-éducation-wealthtech.gif",
        },
        // {
        //   id: 8,
        //   title: "Professions règlementées",
        //   detail: `
        //           Notaires,
        //           Experts comptables,
        //           Avocats,
        //           Géomètres,
        //           Huissiers justice
        //             `,
        //   img: "block-santé.gif",
        // },
        {
          id: 9,
          title: "Hôtellerie",
          detail: `
                    `,
          img: "Blockchain-hôtellerie-wealthtech.gif",
        },
        {
          id: 10,
          title: "Assurance",
          detail: `

                    `,
          img: "Blockchain-assurance-wealthtech.gif",
        },
        {
          id: 11,
          title: "Média et publicité",
          detail: `

                    `,
          img: "Blockchain-media-wealthtech.gif",
        },
        {
          id: 12,
          title: "Banque et Finance",
          detail: `

                    `,
          img: "Blockchain-banque-et-finance-wealthtech.gif",
        },
        {
          id: 12,
          title: "Supply Chain",
          detail: `

                    `,
          img: "Blockchain-supply-chain-wealthtech.gif",
        },
      ],
    };
  },
};
</script>

<style >
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
@media screen and (max-width: 540px) {
  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    display: none !important;
  }
}
</style>