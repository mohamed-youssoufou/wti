<template>
  <div class="p-2">
    <div class="card" >
      <div class="card-body">
        <h5 class="d-flex flex-row  card-title">
          <div class="pr-2">
            <font-awesome-icon class="icone" :icon="['fa', icone]" />
          </div>
          <div>
            {{ title }}
          </div>
        </h5>
        <p class="card-text">
          {{ detail }}
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
      default: "",
    },
  },
};
</script>

<style scoped>
.card-title {
  font-family: fsl;
  font-weight: 600;
  font-size: 26px;
}
.icone {
  font-size: 50px;
}
.card {
  min-height: 350px;
}
.card-text {
  color: #707070;
  font-family: fsl;
  font-size: 18px;
}
</style>