<template lang="pug">
nav#navbar.navbar(:class='navStyle')
  nuxt-link.nav-link(to='/')
    font-awesome-icon(icon='home')
  nuxt-link.nav-link(to='/pro-nas/')
    | {{ about }}
  nuxt-link.nav-link(to='/kontakty/')
    | {{ contact }}
</template>

<script>
export default {
  data () {
    return {
      navStyle: '',
      about: 'Про нас',
      contact: 'Контакти'
    }
  },
  beforeMount () {
    this.$nuxt.$on('navUpdate', data => {
      this.navStyle = data
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('navUpdate')
  }
}
</script>

<style scoped>
.transparent {
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
}

.opaque {
  background-color: #0d47a1;
}
</style>
