<template>
  <div class="p-2">
    <div class="card" >
      <div class="card-body">
        <h5 class="d-flex flex-row  card-title">
          <div class="pr-2">
            <img :src="'~/assets/img/'+icone" height=50 width=50 />
          </div>
          <div>
            {{ title }}
          </div>
        </h5>
        <p class="card-text" v-html="detail">
        </p>
        <p class="link-to float-right"><nuxt-link to="/#contactez_nous">En savoir plus > </nuxt-link></p>
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
.card-title {
  font-family: fsl;
  font-weight: 600;
  font-size: 26px;
  color: #ffffff;
}
.icone {
  font-size: 50px;
}
.card {
  min-height: 350px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid #515cf5;
}
.card-text {
  color: #ffffff;
  font-family: fsl;
  font-size: 18px;
}
.link-to{
  color: #515cf5;
}
</style>