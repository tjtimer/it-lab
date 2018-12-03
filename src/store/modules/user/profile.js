import { Model } from '@vuex-orm/core'
import { Group, GroupMember } from './group'

class Profile extends Model {
    static entity = 'profiles'

    static fields() {
        return {
            id: this.attr(''),
            name: this.string(''),
            avatar: this.string(''),
            accountId: this.attr(''),
            account: this.belongsTo(Account, 'accountID'),
            groups: this.belongsToMany(Group, GroupMember, 'profileId', 'groupId')
        }
    }
}

export {
    Profile
}