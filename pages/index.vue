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
    .container.flex.mx-auto(class='lg:max-w-xl')
      .hidden(class="md:block md:w-1/3 md:mr-10")
        img(src="~/assets/images/lesson-10-combo-500w.png")
      .flex-1
        h2.text-center(class="md:text-left")
          | {{ foundationHeading }}
        .mb-4.mx-auto(class="w-3/4 sm:w-2/3 md:hidden")
          img(src="~/assets/images/lesson-10-combo-500w.png")
        p(v-html="foundationContent")
</template>

<style>
.bf-bg-img {
  background-image: url("~/assets/images/bf-bg-fade-1500w.jpg");
}
</style>

<script>
import debounce from 'lodash.debounce'

export default {
  data () {
    return {
      enrollNow: 'Підписатися',
      foundationHeading: 'Закладіть міцну основу',
      foundationContent: '<em>Біблія понад усе</em> — це безплатний курс дистанційного навчання на основі першої книги Біблії — Книги Буття. Ця унікальна книга представляє нам неймовірну історію Божих взаємин з людьми, навчаючи найважливіших біблійних доктрин через незабутні історії та приклади з реального життя. У наших уроках, окрім Книги Буття, ми також звертаємо увагу на основні паралельні уривки з Нового Завіту, щоб Ви могли отримати чітке та зв\'язне розуміння Біблії в цілому.',
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
