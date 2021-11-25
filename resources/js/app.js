import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import '~/plugins'
import '~/components'
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.config.productionTip = false
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import PortalVue from 'portal-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(PortalVue)
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
Vue.use(DatePicker)
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';
Vue.use(VueFileAgent);
Vue.use(VueFileAgentStyles);
new Vue({
  i18n,
  store,
  router,
  ...App
})
