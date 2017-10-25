/**
 * WingSing CONFIDENTIAL
 * _____________________
 *
 * [2014] - [2015] WingSing Supply Chain Management Co. (Shenzhen) Ltd.
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains the property of
 * WingSing Supply Chain Management Co. (Shenzhen) Ltd. and its suppliers, if
 * any. The intellectual and technical concepts contained herein are proprietary
 * to WingSing Supply Chain Management Co. (Shenzhen) Ltd. and its suppliers and
 * may be covered by China and Foreign Patents, patents in process, and are
 * protected by trade secret or copyright law. Dissemination of this information
 * or reproduction of this material is strictly forbidden unless prior written
 * permission is obtained from WingSing Supply Chain Management Co. (Shenzhen)
 * Ltd.
 *
 */
/**
 * 国家省州信息获取
 *
 * @author dbsix.liu
 *
 * 20171024
 *
 */

import fetch from '@/utils/fetch'

// 获取国家信息
export function country() {
    return fetch({
        url: 'api/country/getCountryInfo',
        method: 'get'
    })
}

// 获取省州信息
export function stateInfo(countryId) {
    return fetch({
        url: 'api/country/getStateInfo',
        method: 'get',
        params: {
            countryId
        }
    })
}

// 获取城市信息
export function cityInfo(stateId) {
    return fetch({
        url: 'api/country/getCityInfo',
        method: 'get',
        params: {
            stateId
        }
    })
}