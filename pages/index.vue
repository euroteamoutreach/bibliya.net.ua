<template lang="pug">
div.pt-12(class="md:pt-16")
  //- Alpha Section
  section.every-word-fade.bg-cover.bg-center.border-b-8.border-white
    .container.text-center.py-32.px-10
      .flex.flex-col.justify-center.pt-4(class="lg:pb-4 lg:pt-16")
        img(src="~/assets/images/bf-logo-full.svg")
        div.text-center.mt-10(class="lg:mt-16")
          button.btn.btn-blue-outline(@click="linkToEnrollment" class="md:btn-lg") {{ enrollNow }}

  //- Solid Foundation
  section.py-10.jesus-bg-fade.bg-cover.bg-center.border-b-8.border-white(class="sm:py-16 lg:py-20")
    .container.flex.mx-auto(class="lg:max-w-xl")
      .hidden(class="lg:block lg:w-2/5 lg:mr-10 lg:pt-2")
        img(src="~/assets/images/lesson-1-combo-500w.png")
      .flex-1
        h2.text-center
          | {{ foundationHeading }}
        .mb-3.mt-8.mx-auto(class="w-3/4 sm:w-2/3 lg:hidden")
          img.block(src="~/assets/images/lesson-1-combo-500w.png")
        p(class="sm:text-center" v-html="foundationContent")

  //- Chronological Approach
  section.py-10.ark-bg-fade.bg-cover.bg-center.border-b-8.border-white(class="sm:py-16 md:py-24 xl:py-32")
    .container.flex.mx-auto(class="lg:max-w-xl")
      div(class="lg:mr-6 lg:w-1/2")
        h2.text-center.text-white {{ chronHeading }}
        .mt-6.mb-2.mx-auto(class="w-3/4 lg:hidden")
          img(src="~/assets/images/noah-timeline-combo-500w.png")
        p.text-white(class="sm:text-center" v-html="chronContent")
      .hidden.ml-6(class="lg:block lg:pt-4 w-1/2")
        img(src="~/assets/images/noah-timeline-combo-500w.png")

  //- Gain Independence
  section.py-10.phil-bg-fade.bg-cover.bg-center.border-b-8.border-white(class="sm:py-16 md:py-24")
    .container.flex.mx-auto(class="lg:max-w-xl")
      .hidden(class="lg:block lg:mr-16 lg:w-1/3 lg:pt-4 xl:mr-20")
        img.block.rounded.shadow-md(src="~/assets/images/phillip-Bible-700w.jpg")
      .flex-1
        h2.text-center {{ gainIndHeading }}
        .my-8.mx-auto.max-w-xs(class="w-3/4 sm:my-12 lg:hidden")
          img.block.rounded.shadow-md(src="~/assets/images/phillip-Bible-700w.jpg")
        p(class="sm:text-center" v-html="gainIndContent")

  //- Study from Home
  section.py-12.study-bg-fade.bg-cover.bg-center.border-b-8.border-white(class="sm:py-16 md:py-24 lg:py-32")
    .container.mx-auto.max-w-sm(class="lg:max-w-md xl:py-16")
      h2.text-center.text-white {{ studyHeading }}
      p.text-center.text-white {{ studyContent }}

  // Call to Action
  section.py-12.jac-ladder-bg-fade.bg-cover.bg-center.border-b-8.border-white(class="sm:py-16 md:py-20")
    .container.mx-auto.max-w-lg(class="lg:flex")
      .mb-6.mx-auto.max-w-xs(class="w-1/2 lg:w-1/3 lg:mb-0 lg:mr-10")
        img.block.mx-auto(src="~/assets/images/lesson-1-vertical-ukr-400h.png")
      .max-w-md.mx-auto(class="lg:flex-1 lg:pt-3")
        h3.text-center.text-bf-blue-dark {{ callToAction }}
        div.text-center.mt-10(class="lg:mt-10")
          button.btn.btn-blue-outline(@click="linkToEnrollment" class="sm:btn-lg") {{ beginToday }}
</template>

<script>
export default {
  data () {
    return {
      enrollNow: 'Підписатися',
      foundationHeading: 'Закладіть міцну основу',
      foundationContent: '<em>Біблія понад усе</em> — це безплатний курс дистанційного навчання на основі першої книги Біблії — Книги Буття. Ця унікальна книга представляє нам неймовірну історію Божих взаємин з людьми, навчаючи найважливіших біблійних доктрин через незабутні історії та приклади з реального життя. У наших уроках, окрім Книги Буття, ми також звертаємо увагу на основні паралельні уривки з Нового Завіту, щоб Ви могли отримати чітке та зв\'язне розуміння Біблії в цілому.',
      chronHeading: 'Випробуйте хронологічний підхід',
      chronContent: 'Як і будь-яку іншу книжку, Біблію потрібно читати з першого розділу. Багатьом людям важко зрозуміти її, бо їм відомі лише окремі шматки не пов\'язаної між собою інформації. Забудьте про цю плутанину, тому що <em>Біблія понад усе</em> поведе Вас у подорож часом, відкриваючи любов нашого Творця до порядку і мети. Здивуйтеся точністю Божого плану, і нехай Він розкаже Вам історію спасіння, що була написана вже на самому початку.',
      gainIndHeading: 'Здобудьте свою незалежність',
      gainIndContent: 'Чи Вам доводилось бути в замішанні від того, що Ви намагалися збагнути тлумачення різних конфесій, які суперечать одне одному? Чия тут правда? Як не стати ошуканим? <em>Біблія понад усе</em> навчить Вас самостійно досліджувати Писання, використовуючи прості і випробувані часом літературні прийоми. З кожною новою відповіддю, знайденою для себе, Ви будете здобувати впевненість у тому, що Ваші висновки правильні — і не тому, що хтось так сказав, а тому, що так каже Біблія.',
      studyHeading: 'Навчайтеся вдома',
      studyContent: 'Без аудиторій, без їзди, без зустрічей. Ми надсилаємо кожен урок Вам додому цілком безплатно. Просто прочитайте урок у своєму темпі, дайте відповіді на запитання і надішліть їх нам! Ми оцінимо Вашу роботу і повернемо ці відповіді разом із наступним уроком.',
      callToAction: 'Вирушаючи в подорож, під час якої Ви познайомитесь не лише з найбільшою Книгою всіх часів, але й з її Автором, приготуйтесь до того, що Ви будете здивовані, вражені та змінені.',
      beginToday: 'Почніть сьогодні'
    }
  },
  methods: {
    linkToEnrollment () {
      this.$nuxt.$router.push('/pidpysatysia/')
    }
  }
}
</script>

<style>
.ark-bg-fade {
  background-image: url("~/assets/images/noahs-ark-bg-fade-1500w.jpg");
}

.study-bg-fade {
  background-image: url("~/assets/images/study-home-bg-fade-1500w.jpg");
}

.jac-ladder-bg-fade {
  background-image: url("~/assets/images/jacobs-ladder-bg-fade-1500w.jpg");
}

.phil-bg-fade {
  background-image: url("~/assets/images/phillip-bg-fade-1500w.jpg");
}

.every-word-fade {
  background-image: url("~/assets/images/every-word-bg-fade-1500w.jpg");
}

.jesus-bg-fade {
  background-image: url("~/assets/images/jesus-teaching-bg-fade-1500w.jpg");
}
</style>
