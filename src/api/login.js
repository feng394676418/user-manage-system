import fetch from '@/utils/fetch'

export function loginByRefnumber(ruleForm) {
    return fetch({
        url: 'api/login/loginByRefnumber',
        method: 'post',
        data: ruleForm
    })
}

