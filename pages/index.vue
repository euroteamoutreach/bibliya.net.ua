<template lang="pug">
div
  h2 This is the home page!
</template>

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
