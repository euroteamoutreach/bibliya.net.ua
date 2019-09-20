<template lang="pug">
.container.max-w-lg.pb-12.pt-24(class="md:pb-16 md:pt-32")
  .mb-10.text-center(class="md:mb-12")
    h1 {{ title }}
    .max-w-md.mx-auto
      p Окрім&#32;
        nuxt-link(to="/pidpysatysia/") дистанційного курсу
        | , ми заохочуємо Вас скористатися нагодою і послухати наші аудіоуроки
        | з вивчення Біблії. Завантажуйте будь-який файл, клацнувши на
        | посилання, або прослуховуйте просто на сайті.
  .bg-white.p-6.shadow.rounded
    .overflow-y-auto
      table.w-full.text-left.table-collapse
        thead
          tr
            td.text-sm.font-semibold.text-grey-darker.p-2.bg-grey-lighter Назва
            td.text-sm.font-semibold.text-grey-darker.p-2.bg-grey-lighter Аудіофайл
        tbody
          tr(v-for="file in audioFiles")
            td.p-2.border-t.border-grey-light.whitespace-no-wrap.text-sm
              | {{ file.title }}
            td.p-2.border-t.border-grey-light.whitespace-no-wrap.text-sm
              a(:href="file.url" target="_blank" :title="file.url") {{ file.url }}
</template>

<script>
export default {
  data () {
    return {
      title: 'Біблійні уроки',
      baseTitle: 'Біблія понад усе — безплатний курс дистанційного навчання',
      audioFiles: [
        {
          title: 'Римлян 1:1-17',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans1.1-17.mp3'
        },
        {
          title: 'Римлян 1:18-32',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans1.18-32.mp3'
        },
        {
          title: 'Римлян 2:1-16',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans2.1-16.mp3'
        },
        {
          title: 'Римлян 2:17-29',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans2.17-29.mp3'
        },
        {
          title: 'Римлян 3:1-20',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans3.1-20.mp3'
        },
        {
          title: 'Римлян 3:21-31',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans3.21-31.mp3'
        },
        {
          title: 'Римлян 4:1-15',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans4.1-15.mp3'
        },
        {
          title: 'Римлян 4:16-5.11',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans4.16-5.11.mp3'
        },
        {
          title: 'Римлян 5:12-21',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans5.12-21.mp3'
        },
        {
          title: 'Римлян 6:1-4',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans6.1-4.mp3'
        },
        {
          title: 'Римлян 6:4-23',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans6.4-23.mp3'
        },
        {
          title: 'Римлян 7:1-6',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans7.1-6.mp3'
        },
        {
          title: 'Римлян 7:7-13',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans7.7-13.mp3'
        },
        {
          title: 'Римлян 7:14-25',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans7.14-25.mp3'
        },
        {
          title: 'Римлян 8:1-4',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans8.1-4.mp3'
        },
        {
          title: 'Римлян 8:5-39',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans8.5-39.mp3'
        }
      ]
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.title} | ${this.baseTitle}`
        }
      ]
    }
  }
}
</script>
