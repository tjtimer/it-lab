import { Model } from '@vuex-orm/core'


export default class  extends Model {
    static entity = 'PCs'

    static fields() {
        return {
            id: this.attr(''),
            name: this.attr(''),
            operatingSystem: this.string('win7'),
            officeVersion: this.number(2016)
        }
    }
}
