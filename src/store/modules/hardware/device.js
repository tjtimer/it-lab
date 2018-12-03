import { Model } from '@vuex-orm/core'



class Device extends Model {
  static entity = 'devices'

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(''),
      typeId: this.attr(null),
      type: this.belongsTo(DeviceType, 'typeId'),
      info: this.hasMany(DeviceInfo, 'deviceId')
    }
  }
}

class DeviceType extends Model {
  static entity = 'deviceTypes'

  static fields() {
    return {
      id: this.attr(''),
      title: this.string(''),
      devices: this.hasMany(Device, 'typeId')
    }
  }
}

class DeviceInfo extends Model {
  static entity = 'deviceInofs'

  static fields() {
    return {
      id: this.attr(null),
      key: this.string(''),
      value: this.attr(null),
      deviceId: this.attr(null),
      device: this.belongsTo(Device, 'deviceId')
    }
  }
}
export {
  Device,
  DeviceType,
  DeviceInfo
}