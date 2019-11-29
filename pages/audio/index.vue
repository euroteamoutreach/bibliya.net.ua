<template>
  <div class="container max-w-4xl pb-12 pt-24 md:pb-16 md:pt-32">
    <div class="mb-10 text-center md:mb-12">
      <h1>{{ title }}</h1>
      <div class="max-w-2xl mx-auto">
        <p>
          Окрім&#32;
          <nuxt-link to="/pidpysatysia/">
            дистанційного курсу
          </nuxt-link>, ми заохочуємо Вас скористатися нагодою і послухати наші
          аудіоуроки з вивчення Біблії. Завантажуйте будь-який файл, клацнувши
          на посилання, або прослуховуйте просто на сайті.
        </p>
      </div>
    </div>
    <div class="bg-white p-6 shadow rounded">
      <h4>Послання до римлян</h4>
      <div class="overflow-y-auto">
        <table class="w-full text-left table-collapse">
          <thead>
            <tr>
              <td class="text-sm font-semibold text-grey-darker p-2 bg-grey-lighter">
                Назва
              </td>
              <td class="text-sm font-semibold text-grey-darker p-2 bg-grey-lighter">
                Аудіофайл
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="file in romansFiles" :key="file.url">
              <td class="p-2 border-t border-grey-light whitespace-no-wrap text-sm">
                {{ file.title }}
              </td>
              <td class="p-2 border-t border-grey-light whitespace-no-wrap text-sm">
                <a :href="file.url"
                   target="_blank"
                   :title="file.url"
                >{{ file.url }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bg-white p-6 shadow rounded mt-10">
      <h4>Євангеліє від Івана</h4>
      <div class="overflow-y-auto">
        <table class="w-full text-left table-collapse">
          <thead>
            <tr>
              <td class="text-sm font-semibold text-grey-darker p-2 bg-grey-lighter">
                Назва
              </td>
              <td class="text-sm font-semibold text-grey-darker p-2 bg-grey-lighter">
                Аудіофайл
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="file in johnFiles" :key="file.url">
              <td class="p-2 border-t border-grey-light whitespace-no-wrap text-sm">
                {{ file.title }}
              </td>
              <td class="p-2 border-t border-grey-light whitespace-no-wrap text-sm">
                <a :href="file.url"
                   target="_blank"
                   :title="file.url"
                >{{ file.url }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Біблійні уроки',
      baseTitle: 'Біблія понад усе — безплатний курс дистанційного навчання',
      romansFiles: [
        {
          title: 'Римлян 1:1-17',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans1.1-17.mp3',
        },
        {
          title: 'Римлян 1:18-32',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans1.18-32.mp3',
        },
        {
          title: 'Римлян 2:1-16',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans2.1-16.mp3',
        },
        {
          title: 'Римлян 2:17-29',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans2.17-29.mp3',
        },
        {
          title: 'Римлян 3:1-20',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans3.1-20.mp3',
        },
        {
          title: 'Римлян 3:21-31',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans3.21-31.mp3',
        },
        {
          title: 'Римлян 4:1-15',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans4.1-15.mp3',
        },
        {
          title: 'Римлян 4:16-5:11',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans4.16-5.11.mp3',
        },
        {
          title: 'Римлян 5:12-21',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans5.12-21.mp3',
        },
        {
          title: 'Римлян 6:1-4',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans6.1-4.mp3',
        },
        {
          title: 'Римлян 6:4-23',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans6.4-23.mp3',
        },
        {
          title: 'Римлян 7:1-6',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans7.1-6.mp3',
        },
        {
          title: 'Римлян 7:7-13',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans7.7-13.mp3',
        },
        {
          title: 'Римлян 7:14-25',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans7.14-25.mp3',
        },
        {
          title: 'Римлян 8:1-4',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans8.1-4.mp3',
        },
        {
          title: 'Римлян 8:5-39',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/Romans8.5-39.mp3',
        },
      ],
      johnFiles: [
        {
          title: 'Івана 1:1-14',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John1.1-14.mp3',
        },
        {
          title: 'Івана 1:15-34',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John1.15-34.mp3',
        },
        {
          title: 'Івана 1:35-51',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John1.35-51.mp3',
        },
        {
          title: 'Івана 2:1-25',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John2.1-25.mp3',
        },
        {
          title: 'Івана 3:1-16',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John3.1-16.mp3',
        },
        {
          title: 'Івана 3:17-36',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John3.17-36.mp3',
        },
        {
          title: 'Івана 4:1-26',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John4.1-26.mp3',
        },
        {
          title: 'Івана 4:27-54',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John4.27-54.mp3',
        },
        {
          title: 'Івана 5:1-23',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John5.1-23.mp3',
        },
        {
          title: 'Івана 5:24-35',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John5.24-35.mp3',
        },
        {
          title: 'Івана 5:36-6:14',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John5.36-6.14.mp3',
        },
        {
          title: 'Івана 6:15-71',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John6.15-71.mp3',
        },
        {
          title: 'Івана 7:1-53',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John7.1-53.mp3',
        },
        {
          title: 'Івана 8:1-59',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John8.1-59.mp3',
        },
        {
          title: 'Івана 9:1-41',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John9.1-41.mp3',
        },
        {
          title: 'Івана 10:1-42',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John10.1-42.mp3',
        },
        {
          title: 'Івана 11:1-57',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John11.1-57.mp3',
        },
        {
          title: 'Івана 12:1-30',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John12.1-30.mp3',
        },
        {
          title: 'Івана 12:31-50',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John12.31-50.mp3',
        },
        {
          title: 'Івана 13:1-38',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John13.1-38.mp3',
        },
        {
          title: 'Івана 14:1-21',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John14.1-21.mp3',
        },
        {
          title: 'Івана 14:22-15:13',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John14.22-15.13.mp3',
        },
        {
          title: 'Івана 15:14-27',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John15.14-27.mp3',
        },
        {
          title: 'Івана 16:1-33',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John16.1-33.mp3',
        },
        {
          title: 'Івана 17:1-26',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John17.1-26.mp3',
        },
        {
          title: 'Івана 18:1-40',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John18.1-40.mp3',
        },
        {
          title: 'Івана 19:1-42',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John19.1-42.mp3',
        },
        {
          title: 'Івана 20:1-31',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John20.1-31.mp3',
        },
        {
          title: 'Івана 21:1-25',
          url: 'https://d2ppgd6w5akw3v.cloudfront.net/audio/John21.1-25.mp3',
        },
      ],
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.title} | ${this.baseTitle}`,
        },
      ],
    };
  },
};
</script>
