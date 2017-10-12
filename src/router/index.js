import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/order/index'
import login from '@/components/login/index'
import ApplyAss from '@/components/ApplyAss/index'
import Expressinfo from '@/components/ApplyAss/Expressinfo'
import Expressorders from '@/components/ApplyAss/Expressorders'
import checkprice from '@/components/ApplyAss/checkprice'
import ConfirmPayment from '@/components/ApplyAss/ConfirmPayment'
import WarrantyPayment from '@/components/ApplyAss/WarrantyPayment'
import Warranty from '@/components/ApplyAss/Warranty'
import GuaranteedCompletion from '@/components/ApplyAss/GuaranteedCompletion'
import ViewIMEI from '@/components/ApplyAss/ViewIMEI'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/test',
        name: 'test',
        component: test
    },
    {
        path: '/Hello',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/ApplyAss', // 申请
        name: 'ApplyAss',
        component: ApplyAss
    },
    {
        path: '/Expressinfo', // 寄出
        name: 'Expressinfo',
        component: Expressinfo
    },
    {
        path: '/Expressorders',
        name: 'Expressorders',
        component: Expressorders
    },
    {
        path: '/checkprice',
        name: 'checkprice',
        component: checkprice
    },
    {
        path: '/ConfirmPayment',
        name: 'ConfirmPayment',
        component: ConfirmPayment
    },
    {
        path: '/WarrantyPayment',
        name: 'WarrantyPayment',
        component: WarrantyPayment
    },
    {
        path: '/Warranty',
        name: 'Warranty',
        component: Warranty
    },
    {
        path: '/GuaranteedCompletion',
        name: 'GuaranteedCompletion',
        component: GuaranteedCompletion
    },
    {
        path: '/ViewIMEI',
        name: 'ViewIMEI',
        component: ViewIMEI
    }
    ]
})
