<template>
  <div class="p-2 h-100 card-main-element d-flex flex-column justify-content-between" style="cursor: pointer">
    <div class="row">
      <div class="col-md-12">
        <p class="text-center">
          <span class="project_number  text-white">{{ id }}</span>
        </p>
      </div>
    </div>
    <div class="h-100 d-flex flex-column justify-content-between">
      <div class="row h-75">
        <h2 class="col-md-12 title font-weight-bold">
          {{ title }}
        </h2>
      </div>
      <div class="row h-25 detail">
        <p
          class="
            col-md-12
            w-50
            link-to
            d-flex
            flex-column
            justify-content-between
          "
        >
          <a class="plus text-center" v-scroll-to="'#contactez_nous'"
            >En savoir plus
          </a>
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
    id: {
      type: Number,
      default: 1,
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
.project_number {
  border: 1px solid grey;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #171f30;
  color: white;
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
  min-height: 150px;
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