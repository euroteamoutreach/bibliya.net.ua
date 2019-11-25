<template lang="pug">
.container.max-w-lg.pt-12.pb-16(class="md:py-20")
  .flex.flex-col.items-center.justify-center.text-center.pt-12(class="sm:pt-24")
    div.error-404.mb-6.h-48(class="md:h-64")
  h1.text-center.text-bf-blue Сторінку не знайдено.
  .text-center
    button.btn.btn-blue.mt-6(@click="navToHome") На головну
</template>

<script>
export default {
  methods: {
    navToHome () {
      this.$nuxt.$router.push('/')
    }
  }
}
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
