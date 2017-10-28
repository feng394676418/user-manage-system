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