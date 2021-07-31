<template>
  <div class="container mt-4">
    <div class="row">
      <h2 class="col-md-12 title">Nos services_</h2>
      <p class="col-md-12 btn-body-text">
        Wealthtech Innovations accompagne les particuliers, les associations,
        les organisations, les institutions dans la découverte, l’exploration et
        le déploiement des technologies blockchain. Notre société propose des
        solutions pour comprendre et mieux appréhender les enjeux induits par
        les actifs numériques.
      </p>
    </div>
    <div class="row">
      <card-main-element
        @myEventBase="changeService"
        v-for="service in ourSevices"
        :key="service.id"
        :color="service.color"
        :img="service.img"
        :title="service.title"
        :detail="service.detail"
        :id="service.id"
        class="col-sm-12 col-md-4"
      />
    </div>
  </div>
</template>

<script>
import cardMainElement from "./card-main-element.vue";
export default {
  components: { cardMainElement },
  data() {
    return {
      ourSevices: [
        {
          id: 1,
          title: "Conférences et formations blockchain",
          detail:
            "Les blockchains et les actifs numérique peuvent sembler difficiles à comprendre les pédagogiques, ou nous nous adaptons au niveau et au métier des participants pour faire comprendre simplement les enjeux, usages et fonctionnement des blockchains et cryptoactifs",
          color: "#4faaf0",
          img: "http://blockchain101.fr/wp-content/uploads/2018/02/Blockchain-Funds-300x300.png",
        },
        {
          id: 2,
          title: "Conseils et développement",
          detail:
            "Nous sommes une équipe d’experts qui vous accompagnent à chaque étape de vos projets blockchain.",
          color: "#fac54b",
          img: "https://www.grandcalais.fr/wp-content/uploads/2016/09/conseil-300x295.png",
        },
        {
          id: 3,
          title: "Crypto-actifs",
          detail:
            "Nous vous proposons des services et formations pour comprendre l’utilité des actifs numériques partant de l’analyser du projets cryptos actifs à la détention et l’échange des cryptos-actifs",
          color: "#c39ded",
          img: "http://blockchain101.fr/wp-content/uploads/2018/02/Blockchain-Funds-300x300.png",
        },
      ],
    };
  },
  methods: {
    changeService(id) {
      console.log("oki2", id);
      this.$emit("myEvent", id);
    },
  },
};
</script>

<style scoped>
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
}
p.btn-body-text {
  margin-bottom: 0.875em;
  font-family: fsl, sans-serif;
  font-size: 32px;
  line-height: 1.5em;
  color: #ffffff;
  margin-top: 0;
  width: 100%;
  max-width: 56rem;
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
@media screen and (min-width: 375px) {
  .title {
    font-size: 40px;
  }
  .p.btn-body-text {
    text-align: center;
  }
}
</style>