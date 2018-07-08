<template lang="pug">
.container.max-w-md.pt-24.pb-16(class="md:pt-32 md:pb-20")
  .flex.flex-col.items-center.justify-center.text-center(class="sm:py-12 md:py-24")
    h1 Дякуємо!
    p
      | Ваше повідомлення надіслано. Ми відповімо незабаром!
    button.btn.btn-blue.mt-6(@click="navToHome") На головну
</template>

<script>
export default {
  head () {
    return {
      title: 'Дякуємо!',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' }
      ]
    }
  },
  methods: {
    navToHome () {
      this.$nuxt.$router.push('/')
    }
  }
}
</script>
