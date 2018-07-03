<template lang="pug">
.container.pb-12.pt-24(class='md:pb-16 md:pt-32')
  .max-w-md.mx-auto.text-center
    h1 Про нас
    p.m-0
      | Euro Team Outreach — це благодійна неприбуткова організація,
      | діяльність якої пов'язана з поширенням Євангелії Ісуса Христа. Ми не
      | належимо до жодної церкви чи конфесії, а зосереджені на тому, щоб
      | заохотити людей з різних країн і культур читати Біблію. Ми віримо, що
      | Біблія — це святе Слово Боже і найвищий авторитет для нашого життя.
    div.py-6(class='md:py-12')
      img.rounded.shadow-md(src='~/assets/images/eto-team-700w.jpg')
    p
      | Щоб дізнатися більше про нашу роботу, будь ласка, завітайте на наш
      | основний сайт (англійською мовою):&nbsp;
      a(href='https://euroteamoutreach.org/' target='_blank') euroteamoutreach.org

    hr.border-b.border-grey-light.my-12

    button.btn.btn-blue(@click='downloadPdf')
      span.mr-2 У що ми віримо
      font-awesome-icon(:icon="['fas', 'cloud-download-alt']")

</template>

<script>
export default {
  head () {
    return {
      title: 'Про нас | Біблія понад усе'
    }
  },
  beforeMount () {
    console.log('--> About component MOUNTED...')
    this.$nuxt.$emit('navUpdate', 'opaque')
  },
  methods: {
    downloadPdf () {
      window.open('https://d2ppgd6w5akw3v.cloudfront.net/pdf/symvol-viry.pdf', '_blank')
    }
  }
}
</script>
