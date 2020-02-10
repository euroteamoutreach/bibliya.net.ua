<template>
  <div class="container max-w-2xl pt-24 pb-16 md:pt-32 md:pb-20">
    <div class="flex flex-col items-center justify-center text-center sm:py-12 md:py-24">
      <h1>Дякуємо!</h1>
      <p>
        Заявку подано. Незабаром ви отримаєте підтвердження електронною поштою,
        що містить посилання для активації онлайн-акаунта. Цей електронний лист
        надійде від <strong>noreply@biblefirstonline.com</strong>. Ми
        рекомендуємо додати цю адресу до свого списку контактів. Це допоможе
        запобігти його перенаправлення до вашої спам-папки.
      </p>
      <p>
        Будь ласка, зачекайте до 48 годин, щоб отримати підтвердження
        електронною поштою. Якщо у вас є якісь питання або вам
        потрібна допомога,
        <nuxt-link to="/kontakty/">
          зв'яжіться з нами!
        </nuxt-link>
      </p><button class="mt-6 btn btn-blue" @click="navToHome">
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
