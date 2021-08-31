<template>
  <div class="container">
    <div class="row">
      <h2 class="col-md-12 title">
        <img src="~/assets/img/title/nos-services-wealthtech.gif" height="300px" width="auto" />
      </h2>
      <p class="col-md-12 btn-body-text">
        Wealthtech Innovations accompagne les particuliers, les associations,
        les organisations, les institutions dans la découverte, l’exploration et
        le déploiement des technologies blockchain. Notre société propose des
        solutions pour comprendre et mieux appréhender les enjeux induits par
        les actifs numériques.
      </p>
    </div>
    <div class="row m-0">
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
          detail: `Les blockchains et les actifs numériques peuvent sembler difficiles à comprendre. C’est la raison pour laquelle nous proposons des interventions pédagogiques sur mesure, adaptées au niveau et au métier des participants. 
Ces interventions permettent de faire comprendre simplement les enjeux, les usages et le fonctionnement des blockchains et des actifs numériques.`,
          color: "#4faaf0",
          img: "Conférences-et-formations.png",
        },
        {
          id: 2,
          title: "Conseils et développement",
          detail:
            "Notre équipe d’experts vous accompagne à chaque étape de vos projets blockchain.",
          color: "#fac54b",
          img: "Conférences-et-formations.png",
        },
        {
          id: 3,
          title: "Actifs numériques",
          detail:
            "Nous vous proposons des services et formations pour comprendre l’utilité des actifs numériques, partant de l’analyse des projets listés à la détention et l’échange des actifs numériques.",
          color: "#c39ded",
          img: "crypto-actifs.png",
        },
      ],
    };
  },
  methods: {
    changeService(id) {
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
  font-size: 60px;
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
@media screen and (max-width: 540px) {
  .title > img{
   width: 100%;
  }
}
@media screen and (min-width: 375px) {
  .title {
    font-size: 30px;
  }
  .p.btn-body-text {
    text-align: center;
  }
}
</style>