import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'

Vue.use(VueI18n);

import {messages} from './main';

window.i18n = new VueI18n({
    locale: 'en',
    messages
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    template: '<App/>',
    components: {App}
});

