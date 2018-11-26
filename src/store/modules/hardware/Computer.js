import { Model } from '@vuex-orm/core'


export default class Computer extends Model {
    static entity = 'computers'

    static fields() {
        return {
            id: this.attr(''),
            name: this.attr(''),
            type: this.attr('PC'),
            operatingSystem: this.string('win7'),
            officeVersion: this.number(2016),
            screen1Id: this.hasOne(),
            screen2Id: this.hasOne(),
        }
    }
}
