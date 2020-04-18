<template>
  <div class="container max-w-xl pt-24 pb-16 md:pb-20">
    <div class="flex flex-col items-center justify-center text-center sm:py-12">
      <h1 class="mb-12">
        Дякуємо!
      </h1>
      <div class="w-full text-left">
        <p>
          Заявку подано. Якщо ви обрали онлайн-навчання, тоді незабаром ви
          отримаєте підтвердження електронною поштою, що містить посилання для
          активації онлайн-акаунта. Цей електронний лист надійде від
          <strong>noreply@biblefirstonline.com</strong>. Ми рекомендуємо додати
          цю адресу до свого списку контактів. Це допоможе запобігти його
          перенаправлення до вашої спам-папки. Будь ласка, зачекайте до 48 годин,
          щоб отримати підтвердження електронною поштою.
        </p>
        <p>
          Якщо ви обрали паперові уроки, тоді перший урок скоро буде надіслано на
          вашу поштову адресу.
        </p>
        <p>
          Якщо у вас є якісь питання або вам потрібна
          допомога,
          <nuxt-link to="/kontakty/">
            зв'яжіться з нами!
          </nuxt-link>
        </p>
      </div>
      <button class="mt-6 btn btn-blue" @click="navToHome">
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
