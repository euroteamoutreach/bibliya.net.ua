<template>
  <footer class="bg-bf-blue-footer">
    <div class="container pt-12 pb-8 sm:py-16 lg:py-16">
      <div class="text-center mb-10">
        <div class="max-w-sm mx-auto px-10">
          <img src="~/assets/images/bf-logo-light-blue.svg">
        </div>
      </div>
      <div class="font-fancy text-center max-w-lg mx-auto">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="text-lg text-bf-blue-lightest md:text-xl" v-html="verseContent" />
        <p class="text-bf-blue-lightest mb-0">
          {{ verseRef }}
        </p>
      </div>
    </div>
    <div class="w-full py-8 border-t border-bf-blue-lightest px-4">
      <p class="mb-0 text-sm text-center text-bf-blue-lightest md:text-base">
        <em>Біблія понад усе&#32;</em>— це проект організації&#32;
        <a class="footer-link whitespace-no-wrap"
           href="https://euroteamoutreach.org/"
           target="_blank"
        >Euro Team Outreach, Inc.</a>
      </p>
    </div>
    <div class="w-full py-6 px-5 bg-black sm:px-6">
      <div class="flex flex-col items-center md:flex-row md:justify-between">
        <div class="text-sm text-center mb-4 md:mb-0 md:text-base">
          <p class="mb-0 text-grey-dark">
            {{ currentYearCopyright }}
          </p>
        </div>
        <div class="leading-none">
          <a class="social-link mr-2"
             :href="fbLink"
             target="_blank"
          >
            <svg width="25"
                 height="25"
                 viewbox="0 0 25 25"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.875 6.875h-1.612c-.577 0-.925.14-1.126.382-.201.24-.262.623-.262 1.104v2.014h2.864l-.392 2.75h-2.472v7.75h-3.25v-7.75h-2.5v-2.75h2.5V8.07c0-1.245.397-2.211 1.093-2.898.697-.686 1.666-1.03 2.825-1.03.984 0 1.832.041 2.332.122v2.611zM12.5 0C5.597 0 0 5.596 0 12.5S5.597 25 12.5 25 25 19.404 25 12.5 19.403 0 12.5 0z" fill-rule="evenodd" />
            </svg>
          </a>
          <a
            class="social-link ml-2 mr-2"
            :href="twitterLink"
            target="_blank"
          >
            <svg width="25"
                 height="25"
                 viewbox="0 0 25 25"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.49 9.428a8.776 8.776 0 0 1-.354 2.885 8.977 8.977 0 0 1-1.105 2.378 9.344 9.344 0 0 1-1.766 2.015c-.683.583-1.505 1.049-2.469 1.396a9.034 9.034 0 0 1-3.09.522 8.577 8.577 0 0 1-4.746-1.388c.223.026.472.039.746.039 1.435 0 2.714-.44 3.837-1.32a3.012 3.012 0 0 1-1.798-.618 3.019 3.019 0 0 1-1.092-1.526c.211.032.406.048.584.048.275 0 .546-.035.814-.105-.715-.147-1.28-.503-1.749-1.067-.469-.565-.677-1.22-.677-1.967v-.038c.5.242.873.373 1.37.392a3.124 3.124 0 0 1-1.017-1.1 3.016 3.016 0 0 1-.38-1.474c0-.561.137-1.081.417-1.56a8.753 8.753 0 0 0 2.817 2.283 8.605 8.605 0 0 0 3.554.952 3.417 3.417 0 0 1-.077-.708c0-.855.301-1.584.904-2.187a2.977 2.977 0 0 1 2.186-.904c.894 0 1.646.326 2.259.976a6.068 6.068 0 0 0 1.961-.746 3.001 3.001 0 0 1-1.359 1.703 6.152 6.152 0 0 0 1.78-.478 6.468 6.468 0 0 1-1.55 1.597M12.5 0C5.597 0 0 5.596 0 12.5S5.597 25 12.5 25 25 19.404 25 12.5 19.403 0 12.5 0" fill-rule="evenodd" />
            </svg>
          </a>
          <a
            class="social-link ml-2"
            :href="githubLink"
            target="_blank"
          >
            <svg width="25"
                 height="25"
                 viewbox="0 0 25 25"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M25 12.5c0 2.724-.795 5.173-2.384 7.349-1.59 2.175-3.644 3.68-6.161 4.516-.293.055-.507.016-.643-.114a.649.649 0 0 1-.203-.488v-3.434c0-1.052-.283-1.823-.846-2.311a11.085 11.085 0 0 0 1.668-.294 6.657 6.657 0 0 0 1.53-.634 4.557 4.557 0 0 0 1.318-1.082c.352-.429.64-.998.862-1.71.223-.71.335-1.527.335-2.449 0-1.312-.43-2.43-1.287-3.353.402-.987.359-2.094-.13-3.32-.304-.098-.743-.038-1.318.179a8.766 8.766 0 0 0-1.497.716l-.619.39a11.545 11.545 0 0 0-3.125-.423c-1.074 0-2.116.141-3.125.424-.174-.12-.404-.266-.691-.44-.288-.173-.741-.382-1.36-.627-.618-.244-1.085-.317-1.4-.219-.477 1.226-.515 2.333-.113 3.32-.858.922-1.286 2.04-1.286 3.353 0 .922.11 1.736.334 2.441.222.706.507 1.276.854 1.71.347.434.783.797 1.31 1.09a6.638 6.638 0 0 0 1.53.634c.494.131 1.05.228 1.669.294-.435.39-.7.949-.798 1.676-.228.109-.472.19-.733.244-.26.054-.57.082-.927.082-.358 0-.714-.117-1.067-.35-.352-.234-.653-.572-.903-1.017a2.639 2.639 0 0 0-.789-.847c-.32-.217-.589-.347-.806-.39l-.325-.05c-.228 0-.386.025-.472.074-.087.049-.114.111-.082.187a.91.91 0 0 0 .147.228c.065.076.135.14.211.195l.115.081c.238.109.474.316.708.619.233.304.403.58.512.83l.163.374c.14.413.38.747.716 1.001.336.256.7.418 1.09.489.391.07.768.108 1.132.114.363.005.664-.014.903-.057l.374-.065c0 .412.003.895.008 1.448l.009.879c0 .195-.071.358-.212.488-.141.13-.358.169-.651.114-2.518-.836-4.571-2.34-6.16-4.516C.794 17.673 0 15.224 0 12.5c0-2.268.559-4.359 1.676-6.274a12.45 12.45 0 0 1 4.55-4.55C8.14.56 10.232 0 12.5 0s4.36.559 6.274 1.677a12.452 12.452 0 0 1 4.55 4.549C24.44 8.14 25 10.232 25 12.5" fill-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      verseContent: `Тож промовив Ісус...: &ldquo;Як у слові Моїм позостанетеся, тоді
                    справді Моїми учнями будете, і пізнаєте правду, — а правда
                    вас вільними зробить!&rdquo;`,
      verseRef: 'Івана 8:31-32',
      fbLink: 'https://www.facebook.com/euroteamoutreach/',
      twitterLink: 'https://twitter.com/eto_ukraine/',
      githubLink: 'https://github.com/euroteamoutreach/bibliya.net.ua',
    };
  },
  computed: {
    currentYearCopyright() {
      const today = new Date();
      return `© ${today.getFullYear()} Euro Team Outreach, Inc.`;
    },
  },
};
</script>

<style scoped>
.social-link svg {
  fill: #8795a1;
  transition: fill 150ms ease;
}

.social-link svg:hover {
  fill: #dae1e7;
  transition: fill 150ms ease;
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
