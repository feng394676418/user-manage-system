import fetch from '@/utils/fetch'

export function getBrdRepairPriceByCode(code) {
    return fetch({
        url: 'api/brdRepairPrice/getBrdRepairPriceByCode',
        method: 'get',
        params: { code }
    })
}