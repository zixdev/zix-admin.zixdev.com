<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr>
                <th
                    v-for="column of columns"
                    @click="filter(column)"
                    :class="{
                        'filtrable': column.filtrable,
                        'active': params[1].value.includes(column.id),

                    } + ' ' + column.trClass"
                >
                    {{ column.name }}

                    <i :class="{
                            'fa fa-sort-asc': !orderAsc,
                            'fa fa-sort-desc': orderAsc,
                       }"
                       v-if="params[1].value.includes(column.id)"
                    ></i>

                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row of rows">
                <td v-for="column of columns" :class="column.trClass">
                    <div v-if="column.id == '__actions'" class="btn-toolbar">
                        <a v-for="action of column.actions"
                           @click="fireAction(action, row)"
                           :class="'btn btn-sm ' + action.btnClass"
                           :title="action.title"
                        >
                            <i :class="action.icon"></i>
                            {{ action.name }}
                        </a>
                    </div>
                    <div v-else v-html="column.callback ? column.callback(row[column.id]) : row[column.id]"></div>
                </td>
            </tr>
            </tbody>
        </table>

        <ul class="pagination pull-right">

            <li class="paginate_button previous " :class="{'disabled': !response.prev_page_url}" >
                <a href="javascript:void(0);" @click="prev()">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>

            <li v-for="page in pages"
                :class="{'active': page == response.current_page}">
                <a href="javascript:void(0);"
                   @click.prevent="changePage(page)">{{ page }}</a>
            </li>

            <li class="paginate_button next" :class="{'disabled': !response.next_page_url}">
                <a href="javascript:void(0);" @click="next()">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>


    </div>
</template>

<script>
    import Component from 'vue-class-component'

    @Component({
        name: 'data-table',
        props: {
            url: {
                type: String,
                required: true
            },
            columns: {
                type: Array,
                required: true
            },
            perPage: {
                type: Number,
                default: 15
            }
        }
    })
    export default class DataTable {
        data() {
            return {
                response: {},
                offset: 4,// left and right padding from the pagination <span>,just change it to see effects,
                params: [
                    {name: 'per_page', value: this.perPage},
                    {name: 'sort', value: ''}
                ],
                orderAsc: true
            };
        }
        /*
         * Whe Data table is created we need to load the data from the server.
         */
        created() {
            this.loadData(this.url);
        }

        /*
         * return Computed data rows.
         */
        get rows() {
            return this.response.data;
        }

        /*
         * return Computed data pages for paginate.
         */
        get pages() {
            if (!this.response.to) {
                return [];
            }
            var from = this.response.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }
            var to = from + (this.offset * 2);
            if (to >= this.response.last_page) {
                to = this.response.last_page;
            }
            var pagesArray = [];
            while (from <= to) {
                pagesArray.push(from);
                from++;
            }
            return pagesArray;
        }

        /*
         * Get url params for filtering the data.
         */
        param(url) {
            let data = url + (url.includes('?') ? '&' : '?') + this.params.map(param => {
                return param.name + '=' + param.value + '&';
            });

            return data.replace(',', '');
        }

        // change the page (paginator)
        changePage(num) {
            this.loadData(this.url + '?page='+num);
        }


        /*
         * Data loader.
         */
        loadData(url) {
            this.$Progress.start();
            this.$http.get(this.param(url))
                .then(response => {
                    this.response = response.data.data;
                    this.$Progress.finish();
                });
        }

        /*
         * Get next page.
         */
        next() {
            return this.response.next_page_url ? this.loadData(this.response.next_page_url) : false;
        }

        /*
         * Get prev page.
         */
        prev() {
            return this.response.prev_page_url ? this.loadData(this.response.prev_page_url) : false;
        }

        /*
         * Filter the data 'asc', 'desc'.
         */
        filter(column) {
            this.params.filter(param => {
                param.name.match('sort') ? param.value = column.id + '|' + (this.orderAsc ? 'asc': 'desc') : '';
            });
            this.loadData(this.url);
            this.orderAsc = ! this.orderAsc;
        }

        /*
         * fire the action to the parent.
         */
        fireAction(event, data) {
            console.log(event);
            this.$emit(event.id, data);
        }


    }
</script>
<style lang="scss">
    .filtrable {

        &:hover {
            cursor: pointer;
        }
        &.active {
            color: #000;
        }
    }

</style>
