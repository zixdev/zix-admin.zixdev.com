import Vue from "vue";
import Resource from "vue-resource";
import Vuex from "vuex";
import $ from "jquery";
Vue.use(Resource);
Vue.use(Vuex);

window['$'] = window['jQuery'] = window['jquery'] = $;
require('bootstrap-sass');
require('metismenu');

