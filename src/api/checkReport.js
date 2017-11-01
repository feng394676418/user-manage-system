import fetch from '@/utils/fetch'

export function getCheckReport(orderNumber) {
    return fetch({
        url: 'api/checkReport/getCheckReport',
        method: 'get',
        params: { orderNumber }
    })
}

export function getCheckReportByRefNumber(refNumber) {
    return fetch({
        url: 'api/checkReport/getCheckReportByRefNumber',
        method: 'get',
        params: { refNumber }
    })
}

export function confirmQuotes(orderNumber) {
    return fetch({
        url: 'api/checkReport/confirmQuotes',
        method: 'get',
        params: {orderNumber}
    })
}

export function notRepair(orderNumber) {
    return fetch({
        url: 'api/checkReport/notRepair',
        method: 'get',
        params: {orderNumber}
    })
}

export function getOrderBillByOrderNumber(orderNumber) {
    return fetch({
        url: 'api/checkReport/getOrderBillByOrderNumber',
        method: 'get',
        params: {orderNumber}
    })
}

export function confirmReceipt(orderNumber) {
    return fetch({
        url: 'api/checkReport/confirmReceipt',
        method: 'get',
        params: {orderNumber}
    })
}