import fetch from '@/utils/fetch'

export function orderCreate(form) {
    console.log('sdfasfdasfdasfdasdfasdf' + form.IMEI)
    const UserOrderForm = {
        imei: form.IMEI,
        addressDetail: form.addressDetail,
        city: form.city,
        country: form.country,
        countryCode: form.countryCode,
        deadDate: form.deadDate,
        email: form.email,
        emergencyName: form.emergencyName,
        emergencyPhone: form.emergencyPhone,
        expressCode: form.expressCode,
        owner: form.owner,
        phone: form.phone,
        photoGroup: form.photoGroup,
        postCode: form.postCode,
        productBrand: form.productBrand,
        productName: form.productName,
        productType: form.productType,
        providerAddress: form.providerAddress,
        providerCode: form.providerCode,
        province: form.province,
        provinceCode: form.provinceCode,
        repairStatus: form.repairStatus,
        serviceType: form.serviceType,
        troubleInfo: form.troubleInfo,
        userName: form.userName
    }
    return fetch({
        url: 'api/order/create',
        method: 'post',
        data: UserOrderForm
    })
}

export function getOrderByRefnumber(refnumber) {
    return fetch({
        url: 'api/apply/getOrderByRefnumber',
        method: 'get',
        params: { refnumber }
    })
}

export function getRouterLog(refnumber) {
  return fetch({
      url: 'api/apply/getRouterLog',
      method: 'get',
      params: { refnumber }
  })
}
