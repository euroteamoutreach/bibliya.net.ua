<template lang="pug">
.container.max-w-lg.mx-auto.pt-24.pb-12(class="md:pt-32")
  h1.text-center.mb-12 Біблійні уроки
  .bg-white.p-6.shadow-md
    .overflow-y-auto
      table.w-full.text-left.table-collapse
        thead
          tr
            td.text-sm.font-medium.text-grey-darker.p-2.bg-grey-lighter Назва
            td.text-sm.font-medium.text-grey-darker.p-2.bg-grey-lighter Аудіофайл
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
          title: 'Римлян 7:14-25',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans7.14-25.mp3'
        },
        {
          title: 'Римлян 8:1-4',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans8.1-4.mp3'
        }
      ]
    }
  }
}
</script>
