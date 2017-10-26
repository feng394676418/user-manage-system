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
        url: 'api/order/getOrderByRefnumber',
        method: 'get',
        params: { refnumber }
    })
}