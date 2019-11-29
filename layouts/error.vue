<template>
  <div class="container max-w-lg pt-12 pb-16 md:py-20">
    <div class="flex flex-col items-center justify-center text-center pt-12 sm:pt-24">
      <div class="error-404 mb-6 h-48 md:h-64" />
    </div>
    <h1 class="text-center text-bf-blue">
      Сторінку не знайдено.
    </h1>
    <div class="text-center">
      <button class="btn btn-blue mt-6" @click="navToHome">
        На головну
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navToHome() {
      this.$nuxt.$router.push('/');
    },
  },
};
</script>

<style scoped>
.error-404 {
  background-image: url("~assets/images/404.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  max-height: 50vh;
  width: 100%;
}
</style>
