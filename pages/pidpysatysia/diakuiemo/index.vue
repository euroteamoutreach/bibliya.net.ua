<template>
  <div class="container max-w-2xl pt-24 pb-16 md:pt-32 md:pb-20">
    <div class="flex flex-col items-center justify-center text-center sm:py-12 md:py-24">
      <h1>Дякуємо!</h1>
      <p>
        Заявку подано. Ми відправимо Вам пакет з першим уроком курсу
        <em>Біблія понад усе</em> на адресу, яку Ви вказали. Разом з тим, якщо
        Ви маєте будь-які запитання, почувайтеся вільно, щоб
        <nuxt-link to="/kontakty/">
          написати нам!
        </nuxt-link>
      </p><button class="btn btn-blue mt-6" @click="navToHome">
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
  head() {
    return {
      title: 'Дякуємо!',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' },
      ],
    };
  },
};
</script>
