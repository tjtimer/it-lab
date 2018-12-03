import { Model } from '@vuex-orm/core'
import Profile from './profile'


class Group extends Model {
  static entity = 'groups'

  static fields() {
      return {
          id: this.attr(''),
          creatorId: this.attr(''),
          creator: this.belongsTo(Profile, 'creatorId'),
          title: this.string(''),
          members: this.belongsToMany(Profile, GroupMember, 'groupId', 'profileId')
      }
  }
}

class GroupMember extends Model {
  static entity = 'GroupMember';
  static primaryKey = ['profileId', 'groupId'];

  static fields() {
    return {
      profileId: this.attr(''),
      groupId: this.attr('')
    }
  }
}

export {
  Group,
  GroupMember
}