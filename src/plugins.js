import Vue from "vue";
import Resource from "vue-resource";
import Vuex from "vuex";
import $ from "jquery";
import Vuetable from "vuetable-2/src/components/Vuetable.vue";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination.vue";
import VuetablePaginationDropdown from "vuetable-2/src/components/VuetablePaginationDropdown.vue";
Vue.use(Resource);
Vue.use(Vuex);

window['$'] = window['jQuery'] = window['jquery'] = $;
require('bootstrap-sass');
require('metismenu');

/*
 * Vue Data Table
 * https://github.com/ratiw/vue-table
 */
//
// Vue.component('vuetable', Vuetable);
// Vue.component('vuetable-pagination', VuetablePagination);
// Vue.component('vuetable-pagination-dropdown', VuetablePaginationDropdown);
