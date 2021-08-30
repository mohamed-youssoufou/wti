<template>
  <div class="p-2">
    <div class="card">
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="d-flex flex-column card-title">
          <div class="pr-2 d-flex justify-content-center">
            <!-- <font-awesome-icon class="icone" :icon="['fa', icone]" /> -->

            <img :src="require(`~/assets/img/services/${icone}`)" height="100px" width="100px" />
          </div>
          <div class="text-center">
            {{ title }}
          </div>
          <p class="col-md-12 pt-2 card-text h-75 text-justify">
            {{ detail }}
          </p>
        </h5>
        <!-- <div class="row detail h-100">
          <p
            class="
              col-md-12
              h-25
              link-to
              d-flex
              flex-row
              justify-content-between
            "
          >
            <span class="text-white">Decouvrez nos solutions</span>
            <nuxt-link class="plus" to="/#contactez_nous"
              >En savoir plus
            </nuxt-link>
          </p>
        </div> -->
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
      default: "",
    },
  },
};
</script>

<style scoped>
.card-title {
  font-family: fsl;
  font-size: 26px;
  color: #ffffff;
}
.icone {
  font-size: 50px;
}
.card {
  min-height: 350px;
  background-color: rgba(0, 0, 0, 0.1);
}
.card-text {
  color: #ffffff;
  font-family: fsl;
  font-size: 18px;
  line-height: 27px;
}
.plus {
  font-family: fsl;
  border-radius: 3px;
  margin-bottom: 3px;
  color: black;
  padding-left: 4px;
  padding-right: 7px;
  background: linear-gradient(180deg, #0ceacc, #00fea4);
}
</style>