<template lang="pug">
.container.max-w-md.pt-24.pb-16(class="md:pt-32 md:pb-20")
  .flex.flex-col.items-center.justify-center.text-center(class="sm:py-12 md:py-24")
    h1 Дякуємо!
    p
      | Заявку подано. Ми відправимо Вам пакет з першим уроком курсу&nbsp;
      em Біблія понад усе&nbsp;
      | на адресу, яку Ви вказали. Разом з тим, якщо Ви маєте будь-які запитання,
      | почувайтеся вільно, щоб&nbsp;
      nuxt-link(to="/kontakty/") написати нам
      | !
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
