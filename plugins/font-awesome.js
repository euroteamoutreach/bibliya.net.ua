import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCloudDownloadAlt } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faCloudDownloadAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
