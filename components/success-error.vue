<template>
  <div v-if="show" class="custom-loader text-center d-flex flex-column align-items-center justify-content-center">
    <div class="text-info text-align" role="status">
      <div class="border" v-if="successORnot">
          <i class="fa fa-check"></i>
      </div>
      <div class="border" v-else>
          <i class="fa fa-times" style="color:red"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    successORnot: {
      type: Boolean,
      default: true,
    }
  },
  mounted() {
      setTimeout(()=> {
          this.show = false
      }, 500)
  }
};
</script>

<style scoped>
.loader {
  position: relative;
  top: 48%;
  background-color: transparent;
}
.border{
    border: 1px solid black;
    padding: 10px;
    font-size: 40px;
    background-color: white;
}
.custom-loader {
  background: rgba(237, 235, 235, 0.1);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 400;
  top: 0;
  left: 0;
}
</style>
