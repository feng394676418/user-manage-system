import fetch from '@/utils/fetch'

export function getOrderByRefnumber(refnumber) {
  return fetch({
      url: 'api/order/getOrderByRefnumber',
      method: 'get',
      params: { refnumber }
  })
}
