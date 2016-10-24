import Component from 'vue-class-component'

@Component({
    template: `
        <div class="footer">
            <div class="pull-right">
                10GB of <strong>250GB</strong> Free.
            </div>
            <div>
                <strong>Copyright</strong> Zix Development &copy; 2016-2017
            </div>
        </div>
  `,
    // style: require('./footer.scss')
})
export default class AppFooter {}
