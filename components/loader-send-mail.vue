<template>
  <div v-if="show" class="custom-loader text-center d-flex flex-column align-items-center justify-content-center">
    <div class="spinner-border text-info text-align" role="status">
      <span class="sr-only">Loading...</span>
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
  },
};
</script>

<style scoped>
.loader {
  position: relative;
  top: 48%;
  background-color: transparent;
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
