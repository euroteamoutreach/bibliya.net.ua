<template>
  <div class="pt-12 md:pt-16">
    <section class="bg-center bg-cover border-b-8 border-white every-word-fade">
      <div class="container px-10 py-32 text-center">
        <div class="flex flex-col justify-center pt-4 pl-3 lg:pb-4 lg:pt-16">
          <img src="~/assets/svg/bf-logo-full.svg">
          <div class="mt-10 text-center lg:mt-16">
            <button class="btn btn-blue-outline md:btn-lg" @click="linkToEnrollment">
              {{ enrollNow }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="relative pt-10 pb-16 bg-center bg-cover border-b-8 border-white jesus-bg-fade sm:py-16 lg:py-20">
      <div class="absolute inset-x-0 bottom-0 px-6 mb-2 text-center sm:text-right sm:px-2">
        <p class="mb-0 text-xs text-grey-darker">
          {{ coverDisclaimer }}
        </p>
      </div>
      <div class="container flex mx-auto lg:max-w-5xl">
        <div class="hidden lg:block lg:w-2/5 lg:mr-10 lg:pt-2">
          <img src="https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,q_auto:best,w_500/v1575608311/bibliya/lesson-1-combo-spread_ljvuvy.png">
        </div>
        <div class="flex-1">
          <h2 class="text-center">
            {{ foundationHeading }}
          </h2>
          <div class="w-3/4 mx-auto mt-8 mb-3 sm:w-2/3 lg:hidden">
            <img class="block" src="https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,q_auto:best,w_500/v1575608311/bibliya/lesson-1-combo-spread_ljvuvy.png">
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="sm:text-center" v-html="foundationContent" />
        </div>
      </div>
    </section>
    <section class="py-10 bg-center bg-cover border-b-8 border-white ark-bg-fade sm:py-16 md:py-24 xl:py-32">
      <div class="container flex mx-auto lg:max-w-5xl">
        <div class="lg:mr-6 lg:w-1/2">
          <h2 class="text-center text-white">
            {{ chronHeading }}
          </h2>
          <div class="w-3/4 mx-auto mt-6 mb-2 lg:hidden">
            <img src="https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,q_auto:best,w_500/v1575608311/bibliya/noah-timeline-combo_ujftea.png">
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="text-white sm:text-center" v-html="chronContent" />
        </div>
        <div class="hidden w-1/2 ml-6 lg:block lg:pt-4">
          <img src="https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,q_auto:best,w_500/v1575608311/bibliya/noah-timeline-combo_ujftea.png">
        </div>
      </div>
    </section>
    <section class="py-10 bg-center bg-cover border-b-8 border-white phil-bg-fade sm:py-16 md:py-24">
      <div class="container flex mx-auto lg:max-w-4xl">
        <div class="hidden lg:block lg:mr-16 lg:w-1/3 lg:pt-4 xl:mr-20">
          <img class="block rounded shadow-md" src="https://res.cloudinary.com/euro-team-outreach/image/upload/f_auto,q_auto:best/v1575608387/bibliya/phillip-Bible-700w_haaw5l.jpg">
        </div>
        <div class="flex-1">
          <h2 class="text-center">
            {{ gainIndHeading }}
          </h2>
          <div class="w-3/4 max-w-xs mx-auto my-8 sm:my-12 lg:hidden">
            <img class="block rounded shadow-md" src="https://res.cloudinary.com/euro-team-outreach/image/upload/f_auto,q_auto:best/v1575608387/bibliya/phillip-Bible-700w_haaw5l.jpg">
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="sm:text-center" v-html="gainIndContent" />
        </div>
      </div>
    </section>
    <section class="py-12 bg-center bg-cover border-b-8 border-white study-bg-fade sm:py-16 md:py-24 lg:py-32">
      <div class="container max-w-md mx-auto lg:max-w-2xl xl:py-16">
        <h2 class="text-center text-white">
          {{ studyHeading }}
        </h2>
        <p class="text-center text-white">
          {{ studyContent }}
        </p>
      </div>
    </section>
    <!-- Call to Action-->
    <section class="py-12 bg-center bg-cover border-b-8 border-white jac-ladder-bg-fade sm:py-16 md:py-20">
      <div class="container max-w-4xl mx-auto lg:flex">
        <div class="w-1/2 max-w-xs mx-auto mb-6 lg:w-1/3 lg:mb-0 lg:mr-10">
          <img class="block mx-auto" src="https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,h_400,q_auto:best/v1575608311/bibliya/lesson-1-vertical-ukr-600w_pqpywx.png">
        </div>
        <div class="max-w-md mx-auto lg:flex-1 lg:pt-3">
          <h3 class="text-center text-bf-blue-dark">
            {{ callToAction }}
          </h3>
          <div class="mt-10 text-center lg:mt-10">
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
      studyContent: 'Без аудиторій, без їзди, без зустрічей. Ми надсилаємо кожен урок Вам додому цілком безплатно — або поштою, або в онлайн режимі. Просто прочитайте урок у своєму темпі, дайте відповіді на запитання і надішліть їх нам! Ми оцінимо Вашу роботу і повернемо ці відповіді разом із наступним уроком.',
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
  background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,q_auto,w_1024/v1575608311/bibliya/noahs-ark-bg-fade_hkottf.jpg");

  @screen lg {
    background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/f_auto,q_auto/v1575608311/bibliya/noahs-ark-bg-fade_hkottf.jpg");
  }
}

.study-bg-fade {
  background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,q_auto,w_1024/v1575608311/bibliya/study-home-bg-fade_sbldzp.jpg");

  @screen lg {
    background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,q_auto,w_2000/v1575608311/bibliya/study-home-bg-fade_sbldzp.jpg");
  }
}

.jac-ladder-bg-fade {
  background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,q_auto,w_1024/v1575608310/bibliya/jacobs-ladder-bg-fade_mcafpe.jpg");

  @screen lg {
    background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/f_auto,q_auto/v1575608310/bibliya/jacobs-ladder-bg-fade_mcafpe.jpg");
  }
}

.phil-bg-fade {
  background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,q_auto,w_1024/v1575608311/bibliya/phillip-Bible-bg-fade_dcsnrc.jpg");

  @screen lg {
    background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/f_auto,q_auto/v1575608311/bibliya/phillip-Bible-bg-fade_dcsnrc.jpg");
  }
}

.every-word-fade {
  background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,q_auto,w_1024/v1575608310/bibliya/every-word-bg-fade_pdqqc5.jpg");

  @screen lg {
    background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/f_auto,q_auto/v1575608310/bibliya/every-word-bg-fade_pdqqc5.jpg");
  }
}

.jesus-bg-fade {
  background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/c_scale,f_auto,q_auto,w_1024/v1575608310/bibliya/jesus-teaching-bg-fade_nztsho.jpg");

  @screen lg {
    background-image: url("https://res.cloudinary.com/euro-team-outreach/image/upload/f_auto,q_auto/v1575608310/bibliya/jesus-teaching-bg-fade_nztsho.jpg");
  }
}
</style>
