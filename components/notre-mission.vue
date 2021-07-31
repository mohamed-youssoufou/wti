<template>
  <div class="container">
    <div class="row">
      <h2 class="col-md-12 title">Notre mission_</h2>
      <p class="col-md-12 btn-body-text">
        Notre mission est de contribuer activement au développement de
        l’économie numérique en apportant aux entreprises, aux institutions et
        aux organismes, des solutions concrètes qui leur permettront de
        comprendre les enjeux et de saisir les opportunités liées au changement
        de paradigme induit par la blockchain et les cryptoactifs.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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