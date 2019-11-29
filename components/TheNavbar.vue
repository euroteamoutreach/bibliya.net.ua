<template>
  <nav id="navbar" class="navbar">
    <nuxt-link class="nav-link" to="/">
      <font-awesome-icon icon="home" />
    </nuxt-link>
    <nuxt-link class="nav-link" to="/pro-nas/">
      {{ about }}
    </nuxt-link>
    <nuxt-link class="nav-link" to="/audio/">
      {{ audio }}
    </nuxt-link>
    <nuxt-link class="nav-link" to="/kontakty/">
      {{ contact }}
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      about: 'Про нас',
      audio: 'Аудіо',
      contact: 'Контакти',
    };
  },
};
</script>
