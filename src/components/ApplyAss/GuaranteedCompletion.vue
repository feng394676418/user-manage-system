<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <step :status="orderInfo.status"></step>
            <WorkOrderTable :orderInfoChild="orderArr,refNumber"></WorkOrderTable>
            <UserInfo :userInfoChild="orderInfo"></UserInfo>
            <CustomerShipping :cusInfoChild="orderInfo,cusRouterInfo" v-show="orderInfo.status>11"></CustomerShipping>
            <TestReportTable :checkReportInfo="checkReportInfo" v-show="'31,13,14,15,17,18,19'.indexOf(statusStr)>=0"></TestReportTable>
            <reason :checkReportInfo="checkReportInfo" v-show="'31,13,14,15,17,18,19'.indexOf(statusStr)>=0"></reason>

            <Networkdelivery :delInfoChild="orderInfo,delRouterInfo" v-show="'18,19'.indexOf(statusStr)>=0"></Networkdelivery>
            <AgreeOfferButtonChild :checkReportInfo="checkReportInfo" v-show="'13,14,15,17,18,19'.indexOf(statusStr)>=0 && checkReportInfo.serviceType==1 && checkReportInfo.confirmQuotes==false"></AgreeOfferButtonChild>
            <!-- <Evaluated></Evaluated> -->
        </div>
    </div>
</template>

<script>
import logintop from './logintop'
import step from './step'
import WorkOrderTable from './WorkOrderTable'
import UserInfo from './UserInfo'
import TestReportTable from './TestReportTable'
import reason from './reason'
import CustomerShipping from './CustomerShipping'
import Networkdelivery from './Networkdelivery'
import Evaluated from './Evaluated'
import AgreeOfferButtonChild from './AgreeOfferButtonChild'
import { getOrderByRefnumber, getRouterLog } from '@/api/order'
import { getCheckReport } from '@/api/checkReport'

export default {
    components: { logintop, step, WorkOrderTable, UserInfo, TestReportTable, reason, CustomerShipping, Networkdelivery, Evaluated, AgreeOfferButtonChild },
    data () {
        return {
          refNumber: this.$route.params.orderno,
          orderInfo: {
            producttype: '',
            imei: '',
            email: '',
            username: '',
            telphone: '',
            trackingno: '',
            expresscode: '',
            troubleinfo: '',
            createdate: '',
            emergencyname: '',
            emergencyphone: '',
            provideraddress: '',
            ordernumber: ''
          },
          statusStr: '',
          orderArr: [],
          // routerInfo: {
          //   refnumber: '',
          //   routedate: '',
          //   description: ''
          // }
          cusRouterInfo: {},
          delRouterInfo: {},
          checkReportInfo: {}
        }
    },
    created() {
      this.getWorkOrderInfo()
    },
    methods: {
      getWorkOrderInfo() {
        getOrderByRefnumber(this.refNumber).then(response => {
          if (response.data.status === '0') {
            this.orderInfo = response.data.data
            this.statusStr = this.orderInfo.status + ''
            this.orderArr.push(this.orderInfo)
            this.getCusRouterInfo()
            this.getDelRouterInfo()
            this.getCheckReport()
          } else {
            console.dir('***************获取工单信息异常*************')
          }
        })
      },
      getCusRouterInfo() {
        getRouterLog(this.orderInfo.trackingno).then(response => {
          if (response.data.status === '0') {
            this.cusRouterInfo = response.data.data
          } else {
            console.dir('###############获取客户寄往服务商网点的路由信息##############')
          }
        })
      },
      getDelRouterInfo() {
        getRouterLog(this.orderInfo.sendtrackingno).then(response => {
          if (response.data.status === '0') {
            this.delRouterInfo = response.data.data
          } else {
            console.dir('###############获取服务商网点寄给客户的路由信息##############')
          }
        })
      },
      getCheckReport() {
            getCheckReport(this.orderInfo.ordernumber).then(response => {
                this.checkReportInfo = response.data.data
                console.dir(this.checkReportInfo)
            })
      }
    }
}
</script>
<style scoped>
@import '/static/css/bootstrap.min.css';
@import '/static/css/demo.css';
@import '/static/css/reset.css';
@import '/static/css/style.css';
@import '/static/css/style-responsive.css';
</style>
<style type="text/css">
.icon {
    /* 通过设置 font-size 来改变图标大小 */
    width: 1em;
    height: 1em;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -0.15em;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: currentColor;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
             normalize.css 中也包含这行 */
    overflow: hidden;
}
.el-button {
    width: 236px;
    height: 48px;
}
.el-table {
    color: #8c8c9e;
}
</style>
