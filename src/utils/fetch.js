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
 * @author dbsix.liu
 * @since 20171012
 *
 */

import axios from 'axios'

const service = axios.create({
    timeout: 60000 // 60s
})

service.interceptors.request.use(config => {
    return config
}, error => {
    console.log('请求失败')
    console.log(error)
    Promise.reject(error)
})

service.interceptors.response.use(response => {
    console.dir(response)
    return response
}, error => {
    console.log('回答失败！')
    return Promise.reject(error)
})

export default service