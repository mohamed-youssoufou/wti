<template>
  <client-only>
    <div class="">
      <Nuxt />
    </div>
  </client-only>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1500);
    });
  }
};
</script>

<style>
</style>