import Vue from "vue";
import Resource from "vue-resource";
import Vuex from "vuex";
import $ from "jquery";
import VueProgressBar from "vue-progressbar";
import VueEvents from "vue-events";

Vue.use(VueEvents);
/*
 * Vue Resource $http
 */
Vue.use(Resource);

/*
 * Vuex Lib $store
 */
Vue.use(Vuex);

/*
 * Vue Progress Bar $Progress
 * http://hilongjw.github.io/vue-progressbar/index.html
 */
Vue.use(VueProgressBar, {
    color: 'rgb(231, 76, 60)',
    failedColor: 'red',
    height: '2px'
});

window['$'] = window['jQuery'] = window['jquery'] = $;
require('bootstrap-sass');
require('metismenu');




