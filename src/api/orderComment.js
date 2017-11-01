import fetch from '@/utils/fetch'

export function commentOrder(orderComment) {
    return fetch({
        url: 'api/orderComment/orderComment',
        method: 'post',
        data: orderComment
    })
}

export function getOrderCommentByOrderNumber(orderNumber) {
    return fetch({
        url: 'api/orderComment/getOrderCommentByOrderNumber',
        method: 'get',
        params: { orderNumber }
    })
}