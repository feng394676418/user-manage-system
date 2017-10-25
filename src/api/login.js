import fetch from '@/utils/fetch'

export function loginByOrderNumber(ruleForm) {
    return fetch({
        url: 'api/login/loginByOrderNumber',
        method: 'post',
        data: ruleForm
    })
}

