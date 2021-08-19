<template>
  <div class="container" :key="parentId">
    <div class="row pl-2">
      <h2 class="col-md-12 title text-center">
        {{ servicesFilter(parentId)[0].title }}
      </h2>
    </div>
    <div>
      <VueSlickCarousel v-bind="settings">
        <cardsmainelement
          v-for="service in servicesSousFiltered(parentId)"
          :key="service.id"
          :color="service.color"
          :img="service.img"
          :title="service.title"
          :detail="service.detail"
          :id="service.id"
          :icone="service.icone"
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
import cardsmainelement from "./card-s-main-element.vue";

export default {
  components: { VueSlickCarousel, cardsmainelement },
  props: {
    parentId: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: "card-title",
    },
    detail: {
      type: String,
      default: "card-detail",
    },
  },
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
      datas: [],
      ourSousSevices: [
        {
          parentId: 1,
          id: 1,
          title: "Formations techniques",
          icone: "graduation-cap",
          detail:
            "Pour les developpeurs, Nous proposons des formations techniques qui leur permettront de concevoir des architectures Blockchains spécifiques et adaptées au domaine d’activité.",
          color: "#4faaf0",
        },
        {
          parentId: 1,
          id: 2,
          icone: `sitemap`,
          title: "Interventions COMEX",
          detail:
            "Nous intervenons auprès de vos dirigeants afin de leur donner une vision stratégique de l’utilité des blockchains et cryptoactifs.",
          color: "#ffc20b",
        },
        {
          parentId: 1,
          id: 3,
          icone: "link",
          title: "Interventions Métiers réglementés",
          detail:
            "Nous intervenons auprès des professionnels métier (professions règlements) dans l’optique de proposer des solutions basées sur les blockchains et cryptoactifs : « Spécific use cases ».",
          color: "#5feea0",
        },
        {
          parentId: 1,
          id: 4,
          icone: "link",
          title: "Interventions Institutions publiques et privée",
          detail:
            "Nous intervenons auprès des institutions publiques et privée en tant que consultants ou formateurs afin de donner une vision stratégique de l’utilité des blockchains et cryptoactifs. Notre intervention peut s’étendre à la réflexion ou la réalisation de projet concrets",
          color: "#9dedd1",
        },
        {
          parentId: 1,
          id: 5,
          icone: "users",
          title: "Conférences tout public",
          detail: `Nous proposons des conférences en ligne Grand public pour Acculturer les particuliers, les équipes et les métiers aux impacts et avantages des blockchains et cryptoactifs.
Ces conférences grand public vous permettront comprendre un projet lié aux cryptoactifs`,
          color: "#ffc20b",
        },
        {
          parentId: 2,
          id: 6,
          icone: "chart-bar",
          title: "Consulting : Etudes et conseils stratégiques",
          detail: `Exploration des cas d’usage, études, analyse.
Nos expertises sont au service de vos idées et de votre entreprise pour vous permettre d'imaginer de nouveaux services et d'assurer une implémentation réussie de la blockchain dans votre activité`,
          color: "#ff0099",
        },
        {
          parentId: 2,
          id: 7,
          icone: "chart-area",
          title: "Analyse et optimisation des projets",
          detail: `Nous étudions en détail votre projet et vous proposons des plans fonctionnels et techniques.
           Nous analysons votre projet afin de réduire les risques, les coûts associés et garantir une utilisation optimale de votre blockchain`,
          color: "#00000",
        },
        {
          parentId: 2,
          id: 8,
          icone: "code-branch",
          title: "Développement et implémentation de solutions sur-mesure",
          detail: `Notre équipe de developpeurs et de consultants « métiers » met tout en œuvre pour
           assurer la bonne réalisation et l’implémentation de vos projets sur-mesure, de l’expression du besoin, à la réalisation du POC, la mise en production et la livraison de votre solution.`,
          color: "#9deff1",
        },
        {
          parentId: 2,
          id: 9,
          icone: "history",
          title: "Audits et diligences techniques et règlementaires",
          detail: `Nous auditons vos projets ou vos solutions blockchain existantes, sur le plan technique, juridique 
          et de gouvernance. Nos analyses sont suivies de recommandations en vue d’amélioration ou d’accompagnement dans le cadre d’un partenariat stratégique.`,
          color: "#ffc20b",
        },
        {
          parentId: 3,
          id: 10,
          icone: "wallet",
          title: "Liquidity provider",
          detail: `Nous assurons la liquidité de vos actifs numériques en devises FIAT`,
          color: "#ff0099",
        },
        {
          parentId: 3,
          id: 11,
          icone: "coins",
          title: "Initiation : Crypto-actifs",
          detail: `Nous proposons un programme d’initiation aux cryptos actifs au cours duquel vous saurez comment détenir des 
          actifs numériques, comment les échanger et comment analyser un actif numérique`,
          color: "#9deff1",
        },
        {
          parentId: 3,
          id: 12,
          icone: "coins",
          title: "Création de jetons (actifs)",
          detail: `Nous vous accompagnons dans votre projet de création de jeton fongible ( cryptomonnaie) , et de jeton non fongible (NFT).
De l'idée, à la conception des jetons, la constitution des galléries, le choix de plateformes, le développement, la communication. 
De plus nous prenons en charge le lancement des processus ICO, IEO, FTO, INO`,
          color: "#9deff1",
        },
      ],
      ourSevices: [
        {
          id: 1,
          title: "Conférences et formations blockchain",
          icone: "linkedin",
          detail:
            "Les blockchains et les actifs numérique peuvent sembler difficiles à comprendre...",
          color: "#4faaf0",
          img: "http://blockchain101.fr/wp-content/uploads/2018/02/Blockchain-Funds-300x300.png",
        },
        {
          id: 2,
          title: "Conseils et développement",
          icone: "linkedin",
          detail:
            "Les blockchains et les actifs numérique peuvent sembler difficiles à comprendre. C’est la raison pour laquelle nous...",
          color: "#ff0099",
          img: "http://blockchain101.fr/wp-content/uploads/2018/02/Blockchain-Funds-300x300.png",
        },
        {
          id: 3,
          title: "Crypto-actifs",
          icone: "linkedin",
          detail:
            "Nous vous proposons des services et formations pour comprendre l’utilité des actifs numériques partant de l’analyser du...",
          color: "#c39ded",
          img: "http://blockchain101.fr/wp-content/uploads/2018/02/Blockchain-Funds-300x300.png",
        },
      ],
    };
  },

  methods: {
    servicesSousFiltered(id) {
      return this.ourSousSevices.filter((service) => {
        if (service.parentId == id) {
          return service;
        }
      });
    },
    servicesFilter(id) {
      return this.ourSevices.filter((service) => service.id == id);
    },
  },
};
</script>

<style>
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