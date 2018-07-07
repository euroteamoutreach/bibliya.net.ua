<template lang="pug">
footer.bg-bf-blue-footer
  .container.pt-12.pb-8(class="sm:py-16 lg:py-16")
    .text-center.mb-10(class="")
      .max-w-sm.mx-auto.px-10
        img(src="~/assets/images/bf-logo-light-blue.svg")
    .font-fancy.text-center.max-w-lg.mx-auto
      p.text-lg.text-bf-blue-lightest(class="md:text-xl") {{ verseContent }}
      p.text-bf-blue-lightest.mb-0 {{ verseRef }}
  .w-full.py-8.border-t.border-bf-blue-lightest.px-4
    p.mb-0.text-sm.text-center.text-bf-blue-lightest(class="md:text-base")
      |
      em Біблія понад усе&#32;
      | — це проект організації&#32;
      a.footer-link.whitespace-no-wrap(href="https://euroteamoutreach.org/"
        target="_blank")
        | Euro Team Outreach, Inc.
  .w-full.py-6.px-5.bg-black(class="sm:px-6")
    .flex.flex-col.items-center(class="md:flex-row md:justify-between")
      .text-sm.text-center.mb-4(class="md:mb-0 md:text-base")
        p.mb-0.text-grey-dark {{ currentYearCopyright }}
      .leading-none
        a.social-link.mr-2(:href="fbLink" target="_blank")
          svg(width="25" height="25" viewbox="0 0 25 25" xmlns="http://www.w3.org/2000/svg")
            path(d="M16.875 6.875h-1.612c-.577 0-.925.14-1.126.382-.201.24-.262.623-.262 1.104v2.014h2.864l-.392 2.75h-2.472v7.75h-3.25v-7.75h-2.5v-2.75h2.5V8.07c0-1.245.397-2.211 1.093-2.898.697-.686 1.666-1.03 2.825-1.03.984 0 1.832.041 2.332.122v2.611zM12.5 0C5.597 0 0 5.596 0 12.5S5.597 25 12.5 25 25 19.404 25 12.5 19.403 0 12.5 0z" fill-rule="evenodd")
        a.social-link.ml-2(:href="twitterLink" target="_blank")
          svg(width="25" height="25" viewbox="0 0 25 25" xmlns="http://www.w3.org/2000/svg")
            path(d="M18.49 9.428a8.776 8.776 0 0 1-.354 2.885 8.977 8.977 0 0 1-1.105 2.378 9.344 9.344 0 0 1-1.766 2.015c-.683.583-1.505 1.049-2.469 1.396a9.034 9.034 0 0 1-3.09.522 8.577 8.577 0 0 1-4.746-1.388c.223.026.472.039.746.039 1.435 0 2.714-.44 3.837-1.32a3.012 3.012 0 0 1-1.798-.618 3.019 3.019 0 0 1-1.092-1.526c.211.032.406.048.584.048.275 0 .546-.035.814-.105-.715-.147-1.28-.503-1.749-1.067-.469-.565-.677-1.22-.677-1.967v-.038c.5.242.873.373 1.37.392a3.124 3.124 0 0 1-1.017-1.1 3.016 3.016 0 0 1-.38-1.474c0-.561.137-1.081.417-1.56a8.753 8.753 0 0 0 2.817 2.283 8.605 8.605 0 0 0 3.554.952 3.417 3.417 0 0 1-.077-.708c0-.855.301-1.584.904-2.187a2.977 2.977 0 0 1 2.186-.904c.894 0 1.646.326 2.259.976a6.068 6.068 0 0 0 1.961-.746 3.001 3.001 0 0 1-1.359 1.703 6.152 6.152 0 0 0 1.78-.478 6.468 6.468 0 0 1-1.55 1.597M12.5 0C5.597 0 0 5.596 0 12.5S5.597 25 12.5 25 25 19.404 25 12.5 19.403 0 12.5 0" fill-rule="evenodd")
</template>

<script>
export default {
  data () {
    return {
      verseContent: `Тож промовив Ісус... Як у слові Моїм позостанетеся, тоді
                    справді Моїми учнями будете, і пізнаєте правду, а правда
                    вас вільними зробить!`,
      verseRef: 'Івана 8:31-32',
      twitterLink: 'https://twitter.com/eto_ukraine/',
      fbLink: 'https://www.facebook.com/euroteamoutreach/'
    }
  },
  computed: {
    currentYearCopyright () {
      let today = new Date()
      return `© ${today.getFullYear()} Euro Team Outreach, Inc.`
    }
  }
}
</script>

<style scoped>
.social-link svg {
  fill: #8795a1;
}

.social-link svg:hover {
  fill: #dae1e7;
}

.footer-link {
  color: #b1cdf8;
  text-decoration: underline;
  transition: color 150ms ease;
}

.footer-link:hover {
  text-decoration: none;
  transition: color 150ms ease;
}
</style>
