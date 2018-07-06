<template lang="pug">
div
  //- Alpha Section
  section.bf-bg-img.bg-cover.bg-center.border-b.border-grey-light
    .container.text-center.py-24.px-10
      .flex.flex-col.justify-center.pt-12(class="md:pt-24 md:pb-10 lg:pt-32")
        img(src="~/assets/images/bf-logo-full.svg")
        div.text-center.mt-10(class="lg:mt-16")
          button.btn.btn-blue-outline(class="md:btn-lg") {{ enrollNow }}

  //- Solid Foundation
  section.py-10(class="sm:py-16 lg:py-20")
    .container.flex.mx-auto(class="lg:max-w-xl")
      .hidden(class="md:block md:w-1/3 md:mr-10")
        img(src="~/assets/images/lesson-10-combo-500w.png")
      .flex-1
        h2.text-center(class="md:text-left")
          | {{ foundationHeading }}
        .mb-4.mx-auto(class="w-3/4 sm:w-2/3 md:hidden")
          img(src="~/assets/images/lesson-10-combo-500w.png")
        p(v-html="foundationContent")

  //- Chronological Approach
  section.py-10.ark-bg-fade.bg-cover.bg-center(class="sm:py-16 md:py-24 xl:py-32")
    .container.flex.mx-auto(class="lg:max-w-xl")
      div(class="md:mr-6 md:w-1/2")
        h2.text-center.text-white {{ chronHeading }}
        .mt-6.mb-2.mx-auto(class="w-3/4 md:hidden")
          img(src="~/assets/images/noah-timeline-combo-500w.png")
        p.text-white.text-center(v-html="chronContent")
      .hidden.ml-6(class="md:block w-1/2")
        img(src="~/assets/images/noah-timeline-combo-500w.png")

  //- Gain Independence
  section.py-10(class="sm:py-16 md:py-24")
    .container.flex.mx-auto(class="lg:max-w-lg")
      .hidden(class="md:block md:w-2/5 lg:w-1/3 md:mr-10")
        img.block.rounded.shadow-md(src="~/assets/images/phillip-Bible-700w.jpg")
      .flex-1
        h2.text-center {{ gainIndHeading }}
        .my-8.mx-auto.max-w-xs(class="w-3/4 md:hidden")
          img.block.rounded.shadow-md(src="~/assets/images/phillip-Bible-700w.jpg")
        p(v-html="gainIndContent")

  //- Temp spacing section.
  section.py-32
    .container
      p.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      p.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
      p.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
</template>

<script>
import debounce from 'lodash.debounce'

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
      scrollHandler: debounce(this.navScrollFade, 100, {
        'leading': true
      })
    }
  },
  beforeMount () {
    console.log('--> Home component MOUNTED...')
    this.$nuxt.$emit('navUpdate', 'transparent')
    window.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy () {
    console.log('--> Home component DESTROYED...')
    this.$nuxt.$emit('navUpdate', 'opaque')
    window.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    navScrollFade (e) {
      let nav = document.querySelector('#navbar')
      let y = window.scrollY
      console.count(e)

      if (nav) {
        if (y > 0) {
          nav.classList.add('opaque')
        } else if (y === 0) {
          nav.classList.remove('opaque')
        }
      }
    }
  }
}
</script>

<style>
.bf-bg-img {
  background-image: url("~/assets/images/bf-bg-fade-1500w.jpg");
}

.ark-bg-fade {
  background-image: url("~/assets/images/noahs-ark-bg-fade-1500w.jpg");
}
</style>
