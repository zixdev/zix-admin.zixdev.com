import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
import CORE_LANG from './../modules/core/lang';

// ready translated locales
var locales = CORE_LANG;

// set lang
Vue.config.lang = 'en';

// set locales
Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
});
