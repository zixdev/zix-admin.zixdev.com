<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr>
                <th v-for="column of columns"  @click="filter(column)" :class="{'filtrable': column.filtrable}">
                    {{ column.name }}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row of rows">
                <td v-for="column of columns">
                    {{ column.callback ? column.callback(row[column.id]) : row[column.id] }}
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

        created() {
            console.log(this.url);
            this.loadData(this.url);
        }

        get rows() {
            return this.response.data;
        }

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

        param(url) {
            let data = url + (url.includes('?') ? '&' : '?') + this.params.map(param => {
                return param.name + '=' + param.value + '&';
            });

            return data.replace(',', '');
        }

        changePage(num) {
            this.loadData(this.url + '?page='+num);
        }

        loadData(url) {
            this.$http.get(this.param(url))
                .then(response => {
                    this.response = response.data.data;
                });
        }

        next() {
            return this.response.next_page_url ? this.loadData(this.response.next_page_url) : false;
        }

        prev() {
            return this.response.prev_page_url ? this.loadData(this.response.prev_page_url) : false;
        }

        filter(column) {
            this.params.filter(param => {
                param.name.match('sort') ? param.value = column.id + '|' + (this.orderAsc ? 'asc': 'desc') : '';
            });
            this.loadData(this.url);
            this.orderAsc = ! this.orderAsc;
        }


    }
</script>
<style lang="scss">
    .filtrable {

        &:hover {
            cursor: pointer;
        }
    }
</style>
