<template>
  <div class="pt-12 md:pt-16">
    <section class="every-word-fade bg-cover bg-center border-b-8 border-white">
      <div class="container text-center py-32 px-10">
        <div class="flex flex-col justify-center pl-3 pt-4 lg:pb-4 lg:pt-16">
          <img src="~/assets/images/bf-logo-full.svg">
          <div class="text-center mt-10 lg:mt-16">
            <button class="btn btn-blue-outline md:btn-lg" @click="linkToEnrollment">
              {{ enrollNow }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="relative pt-10 pb-16 jesus-bg-fade bg-cover bg-center border-b-8 border-white sm:py-16 lg:py-20">
      <div class="absolute inset-x-0 bottom-0 px-6 mb-2 text-center sm:text-right sm:px-2">
        <p class="text-xs text-grey-darker mb-0">
          {{ coverDisclaimer }}
        </p>
      </div>
      <div class="container flex mx-auto lg:max-w-5xl">
        <div class="hidden lg:block lg:w-2/5 lg:mr-10 lg:pt-2">
          <img src="~/assets/images/lesson-1-combo-500w.png">
        </div>
        <div class="flex-1">
          <h2 class="text-center">
            {{ foundationHeading }}
          </h2>
          <div class="mb-3 mt-8 mx-auto w-3/4 sm:w-2/3 lg:hidden">
            <img class="block" src="~/assets/images/lesson-1-combo-500w.png">
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="sm:text-center" v-html="foundationContent" />
        </div>
      </div>
    </section>
    <section class="py-10 ark-bg-fade bg-cover bg-center border-b-8 border-white sm:py-16 md:py-24 xl:py-32">
      <div class="container flex mx-auto lg:max-w-5xl">
        <div class="lg:mr-6 lg:w-1/2">
          <h2 class="text-center text-white">
            {{ chronHeading }}
          </h2>
          <div class="mt-6 mb-2 mx-auto w-3/4 lg:hidden">
            <img src="~/assets/images/noah-timeline-combo-500w.png">
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="text-white sm:text-center" v-html="chronContent" />
        </div>
        <div class="hidden ml-6 lg:block lg:pt-4 w-1/2">
          <img src="~/assets/images/noah-timeline-combo-500w.png">
        </div>
      </div>
    </section>
    <section class="py-10 phil-bg-fade bg-cover bg-center border-b-8 border-white sm:py-16 md:py-24">
      <div class="container flex mx-auto lg:max-w-4xl">
        <div class="hidden lg:block lg:mr-16 lg:w-1/3 lg:pt-4 xl:mr-20">
          <img class="block rounded shadow-md" src="~/assets/images/phillip-Bible-700w.jpg">
        </div>
        <div class="flex-1">
          <h2 class="text-center">
            {{ gainIndHeading }}
          </h2>
          <div class="my-8 mx-auto max-w-xs w-3/4 sm:my-12 lg:hidden">
            <img class="block rounded shadow-md" src="~/assets/images/phillip-Bible-700w.jpg">
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="sm:text-center" v-html="gainIndContent" />
        </div>
      </div>
    </section>
    <section class="py-12 study-bg-fade bg-cover bg-center border-b-8 border-white sm:py-16 md:py-24 lg:py-32">
      <div class="container mx-auto max-w-sm lg:max-w-2xl xl:py-16">
        <h2 class="text-center text-white">
          {{ studyHeading }}
        </h2>
        <p class="text-center text-white">
          {{ studyContent }}
        </p>
      </div>
    </section>
    <!-- Call to Action-->
    <section class="py-12 jac-ladder-bg-fade bg-cover bg-center border-b-8 border-white sm:py-16 md:py-20">
      <div class="container mx-auto max-w-4xl lg:flex">
        <div class="mb-6 mx-auto max-w-xs w-1/2 lg:w-1/3 lg:mb-0 lg:mr-10">
          <img class="block mx-auto" src="~/assets/images/lesson-1-vertical-ukr-400h.png">
        </div>
        <div class="max-w-md mx-auto lg:flex-1 lg:pt-3">
          <h3 class="text-center text-bf-blue-dark">
            {{ callToAction }}
          </h3>
          <div class="text-center mt-10 lg:mt-10">
            <button class="btn btn-blue-outline sm:btn-lg" @click="linkToEnrollment">
              {{ beginToday }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enrollNow: 'Підписатися',
      foundationHeading: 'Закладіть міцну основу',
      foundationContent: '<em>Біблія понад усе</em> — це безплатний курс дистанційного навчання на основі першої книги Біблії — Книги Буття. Ця унікальна книга представляє нам неймовірну історію Божих взаємин з людьми, навчаючи найважливіших біблійних доктрин через незабутні історії та приклади з реального життя. У наших уроках, окрім Книги Буття, ми також звертаємо увагу на основні паралельні уривки з Нового Завіту, щоб Ви могли отримати чітке та зв\'язне розуміння Біблії в цілому.',
      coverDisclaimer: 'Дійсні обкладинки уроків видрукувані в чорно-білих тонах.',
      chronHeading: 'Випробуйте хронологічний підхід',
      chronContent: 'Як і будь-яку іншу книжку, Біблію потрібно читати з першого розділу. Багатьом людям важко зрозуміти її, бо їм відомі лише окремі шматки не пов\'язаної між собою інформації. Забудьте про цю плутанину, тому що <em>Біблія понад усе</em> поведе Вас у подорож часом, відкриваючи любов нашого Творця до порядку і мети. Здивуйтеся точністю Божого плану, і нехай Він розкаже Вам історію спасіння, що була написана вже на самому початку.',
      gainIndHeading: 'Здобудьте свою незалежність',
      gainIndContent: 'Чи Вам доводилось бути в замішанні від того, що Ви намагалися збагнути тлумачення різних конфесій, які суперечать одне одному? Чия тут правда? Як не стати ошуканим? <em>Біблія понад усе</em> навчить Вас самостійно досліджувати Писання, використовуючи прості і випробувані часом літературні прийоми. З кожною новою відповіддю, знайденою для себе, Ви будете здобувати впевненість у тому, що Ваші висновки правильні — і не тому, що хтось так сказав, а тому, що так каже Біблія.',
      studyHeading: 'Навчайтеся вдома',
      studyContent: 'Без аудиторій, без їзди, без зустрічей. Ми надсилаємо кожен урок Вам додому цілком безплатно. Просто прочитайте урок у своєму темпі, дайте відповіді на запитання і надішліть їх нам! Ми оцінимо Вашу роботу і повернемо ці відповіді разом із наступним уроком.',
      callToAction: 'Вирушаючи в подорож, під час якої Ви познайомитесь не лише з найбільшою Книгою всіх часів, але й з її Автором, приготуйтесь до того, що Ви будете здивовані, вражені та змінені.',
      beginToday: 'Почніть сьогодні',
    };
  },
  methods: {
    linkToEnrollment() {
      this.$nuxt.$router.push('/pidpysatysia/');
    },
  },
};
</script>

<style>
.ark-bg-fade {
  background-image: url("~assets/images/noahs-ark-bg-fade-1500w.jpg");
}

.study-bg-fade {
  background-image: url("~assets/images/study-home-bg-fade-1500w.jpg");
}

.jac-ladder-bg-fade {
  background-image: url("~assets/images/jacobs-ladder-bg-fade-1500w.jpg");
}

.phil-bg-fade {
  background-image: url("~assets/images/phillip-bg-fade-1500w.jpg");
}

.every-word-fade {
  background-image: url("~assets/images/every-word-bg-fade-1500w.jpg");
}

.jesus-bg-fade {
  background-image: url("~assets/images/jesus-teaching-bg-fade-1500w.jpg");
}
</style>
