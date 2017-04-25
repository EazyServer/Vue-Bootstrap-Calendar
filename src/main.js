import Vue from 'vue';
window.Vue = Vue;
// require('vue-resource');

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import messages from './locale';
window.i18n = new VueI18n({
  locale : 'en',
  messages
});

window.EventsBus = new Vue();

Vue.component('Calendar', require('./Calendar.vue'));