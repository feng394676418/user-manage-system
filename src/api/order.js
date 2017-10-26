import fetch from '@/utils/fetch'

export function orderInfoCreate(form) {
    return fetch({
        url: '',
        method: 'post',
        data: form
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
