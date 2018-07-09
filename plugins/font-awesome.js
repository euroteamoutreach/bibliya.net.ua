import Vue from 'vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCloudDownloadAlt } from '@fortawesome/pro-solid-svg-icons'
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(faHome, faCloudDownloadAlt, faAngleDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)
