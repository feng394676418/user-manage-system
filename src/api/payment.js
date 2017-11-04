/**
 * 支付
 *
 * @author LIU
 *
 */

import fetch from '@/utils/fetch'

export function payOrder(orderNumber, billType) {
    return fetch({
        url: 'api/payment/pay',
        method: 'post',
        params: {
            orderNumber,
            billType
        }
    })
}

export function payResult(paymentResult) {
    return fetch({
        url: 'api/payment/result',
        method: 'post',
        data: paymentResult
    })
}

export function payOverCheck(orderNumber) {
    return fetch({
        url: 'api/payment/over/check',
        method: 'post',
        params: { orderNumber }
    })
}