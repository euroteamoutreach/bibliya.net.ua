<template lang="pug">
div
  //- Alpha Section
  section.bf-bg-img.bg-cover.bg-center.border-b.border-grey-light
    .container.text-center.py-32.px-10
      .flex.flex-col.justify-center.pt-12(class='md:pt-24 md:pb-12 lg:pt-32 lg:pb-24')
        img(src='~/assets/images/bf-logo-full.svg')
        div.text-center.mt-10(class='lg:mt-16')
          button.btn.btn-blue-outline(class='md:btn-lg') Підписатися
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
