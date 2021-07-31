<template>
  <div class="p-2 card-main-element" @click="changeService(id)" style="cursor: pointer">
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
        <div class="img" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
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
.card-main-element {
  font-family: fsb;
  background-color: white !important;
  border: 4px solid black !important;
}
.img {
  background-size: cover;
  height: 200px;
  border-radius: 10px
}
.title {
  margin-top: 10px;
  font-size: 28px;
  min-height: 60px;
  line-height: 32px;
  color: #333;
  font-weight: 800;
}
.body {
  font-family: fsl;
  font-size: 18px;
  line-height: 27px;
  color: #707070;
}
</style>