/**
 *
 * 获取运单号等服务
 *
 * @author dbsix.liu
 *
 */

import fetch from '@/utils/fetch'

export function getTrackingno(refNumber) {
    return fetch({
        url: 'api/channel/forecast',
        method: 'put',
        params: {
            refNumber
        }
    })
}

export function getLogisticsLocatorList(refNumber) {
    return fetch({
        url: 'api/channellocator/list',
        method: 'get',
        params: {
            refNumber
        }
    })
}