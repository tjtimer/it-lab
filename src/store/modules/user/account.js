import { Model } from '@vuex-orm/core'

class Account extends Model {
    static entity = 'accounts'

    static fields() {
        return {
            id: this.attr(''),
            email: this.attr(''),
            passwd: this.attr(''),
            users: this.belongsToMany(Role, RoleAccount, 'accountId', 'roleId'),
            profile: this.hasOne(Profile, 'accountId')
        }
    }
}
  
  class Role extends Model {
    static entity = 'roles';
  
    static fields () {
      return {
        id: this.attr(''),
        name: this.string(''),
        users: this.belongsToMany(Account, RoleAccount, 'roleId', 'accountId')
      }
    }
  }
  
  class RoleAccount extends Model {
    static entity = 'roleAccount';
    static primaryKey = ['roleId', 'accountId'];
  
    static fields () {
      return {
        roleId: this.attr(''),
        accountId: this.attr('')
      }
    }
  }
  
export {
    Account,
    Role,
    RoleAccount
}