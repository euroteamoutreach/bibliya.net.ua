<template>
  <div class="container pb-12 pt-24 md:pb-16 md:pt-32">
    <div class="max-w-2xl mx-auto text-center">
      <h1>Про нас</h1>
      <p class="m-0">
        Euro Team Outreach — це благодійна неприбуткова організація, діяльність
        якої пов'язана з поширенням Євангелії Ісуса Христа. Ми не належимо до
        жодної церкви чи конфесії, а зосереджені на тому, щоб заохотити людей з
        різних країн і культур читати Біблію. Ми віримо, що Біблія — це святе
        Слово Боже і найвищий авторитет для нашого життя.
      </p>
      <div class="py-6 md:py-12">
        <a href="https://euroteamoutreach.org/" target="_blank">
          <img class="rounded shadow-md" src="~/assets/images/eto-cover-700w.jpg">
        </a>
      </div>
      <p>
        Щоб дізнатися більше про нашу роботу, будь ласка, завітайте на наш
        основний сайт (англійською мовою):&nbsp;
        <a href="https://euroteamoutreach.org/" target="_blank">euroteamoutreach.org</a>
      </p>
      <hr class="border-b border-grey-light my-12">
      <button class="btn btn-blue" @click="downloadPdf">
        <span class="mr-2">У що ми віримо</span>
        <font-awesome-icon :icon="['fas', 'cloud-download-alt']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Про нас',
      baseTitle: 'Біблія понад усе — безплатний курс дистанційного навчання',
    };
  },
  methods: {
    downloadPdf() {
      window.open('https://d2ppgd6w5akw3v.cloudfront.net/pdf/symvol-viry.pdf', '_blank');
    },
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
