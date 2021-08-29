<template>
  <div class="p-2 card-main-element" v-scroll-to="'#element'" @click="changeService(id)" style="cursor: pointer">
    <!-- <div
      class="card"
      :style="'background-color:' + color + ';cursor:pointer'"
      @click="changeService(id)"
    >
      <img class="card-img-top" :src="img" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title text-white">{{ title }}</h5>
        <p class="card-text h-100">
          {{ detail }}
        </p>
       
      </div>
    </div> -->
    <div class="row" >
      <div class="col-md-12">
        <div class="img" :style="{ backgroundImage: 'url(' +require(`~/assets/img/${img}`)+')' }"></div>
      </div>
    </div>
    <div class="row">
      <h2 class="col-md-12 title font-weight-bold">
        {{ title }}
      </h2>
    </div>
    <div class="row">
      <h6 class="col-md-12 body">
        {{ detail }}
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeService(id) {
      this.$emit("myEventBase", id);
    },
  },
  props: {
    id: {
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
    color: {
      type: String,
      default: "#4faaf0",
    },
    img: {
      type: String,
      default:
        "http://blockchain101.fr/wp-content/uploads/2018/02/Blockchain-Funds-300x300.png",
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
  height: 300px;
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