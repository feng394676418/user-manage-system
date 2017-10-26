/**
 * 服务商list获取
 *
 * dbsix.liu
 *
 */

import fetch from '@/utils/fetch'

export function getProviderList(owner, countryCode) {
    return fetch({
        url: 'api/provider/list',
        method: 'get',
        params: {
            owner,
            countryCode
        }
    })
}