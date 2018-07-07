<template lang="pug">
nav#navbar.navbar
  nuxt-link.nav-link(to="/")
    font-awesome-icon(icon="home")
  nuxt-link.nav-link(to="/pro-nas/")
    | {{ about }}
  nuxt-link.nav-link(to="/audio/")
    | {{ audio }}
  nuxt-link.nav-link(to="/kontakty/")
    | {{ contact }}
</template>

<script>
export default {
  data () {
    return {
      about: 'Про нас',
      audio: 'Аудіо',
      contact: 'Контакти'
    }
  }
}
</script>
