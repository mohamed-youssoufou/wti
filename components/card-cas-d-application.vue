<template>
  <div class="p-2 h-100 card-main-element" style="cursor: pointer">
    <div class="row">
      <div class="col-md-12">
        <div
          class="img"
          :style="{
            backgroundImage: 'url(' + require(`~/assets/img/cas_applications/${icone}`) + ')',
          }"
        ></div>
      </div>
    </div>
    <div class="">
      <div class="row">
        <h2 class="col-md-12 title font-weight-bold">
          {{ title }}
        </h2>
      </div>
      <div class="row detail">
        <h6 class="col-md-12 h-75 text-white body" v-html="detail"></h6>
        <p
          class="col-md-12 h-25 link-to d-flex flex-row justify-content-between"
        >
          <span class="text-white">Decouvrez nos solutions</span>
          <nuxt-link class="plus" to="/#contactez_nous"
            >En savoir plus
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  props: {
    title: {
      type: String,
      default: "card-title",
    },
    detail: {
      type: String,
      default: "card-detail",
    },
    color: {
      type: String,
      default: "#4faaf0",
    },
    icone: {
      type: String,
      default: "theme.jpeg",
    },
  },
};
</script>

<style scoped>
.plus {
  font-family: fsl;
  border-radius: 3px;
  margin-bottom: 3px;
  color: white;
  padding-left: 4px;
  padding-right: 7px;
  background: #2a80b9;
}
.detail {
  font-family: fsl;
  height: 110px;
}
.card-title {
  font-family: fsl;
  font-weight: 600;
  font-size: 26px;
  color: #ffffff;
}
.title {
  margin-top: 10px;
  font-size: 28px;
  min-height: 60px;
  line-height: 32px;
  color: #ffffff;
  font-weight: 801;
  text-align: center;
}
.body {
  font-family: fsl;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  text-align: justify;
}
.icone {
  font-size: 50px;
}
.card-main-element {
  background-color: rgba(255, 255, 255, 0.01) !important;
  /* border: 1px solid #515cf5 !important; */
}
.img {
  background-size: cover;
  height: 200px;
  border-radius: 10px;
}
.card-text {
  color: #ffffff;
  font-family: fsl;
  font-size: 18px;
}
.link-to {
  color: #515cf5;
}

</style>