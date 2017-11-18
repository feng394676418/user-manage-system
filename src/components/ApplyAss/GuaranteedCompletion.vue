<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <step :status="orderInfo.status"></step>
            <Evaluation :orderNumber="checkReportInfo.orderNunber"  v-show="showEvaluation"></Evaluation>
            <WorkOrderTable :orderInfoChild="orderArr,refNumber"></WorkOrderTable>
            <UserInfo :userInfoChild="orderInfo"></UserInfo>
            <CustomerShipping :cusInfoChild="orderInfo,cusRouterInfo" v-show="showCustomerShipping"></CustomerShipping>
            <TestReportTable :checkReportInfo="checkReportInfo" v-show="showTestReportTable"></TestReportTable>
            <reason :checkReportInfo="checkReportInfo" v-show="showReason"></reason>

            <Networkdelivery :delInfoChild="orderInfo,delRouterInfo" v-show="showNetworkdelivery"></Networkdelivery>
            <!--同意报价按钮-->
            <AgreeOfferButtonChild :checkReportInfo="checkReportInfo" v-show="showAgreeOfferButtonChild"></AgreeOfferButtonChild>
            <Evaluated :orderComment="orderComment" v-show="showEvaluated"></Evaluated>
            <!-- 确认收货按钮 -->
            <confirmReceiptButton :orderNumber="checkReportInfo.orderNunber" v-show="showConfirmReceiptButton"></confirmReceiptButton>
            <!-- 结算按钮 -->
            <settlementButton :checkReportInfo="checkReportInfo" v-show="showSettlementButton"></settlementButton>
        </div>
    </div>
</template>

<script>
import logintop from './logintop'
import step from './step'
import WorkOrderTable from './WorkOrderTable'
import Evaluation from './Evaluation'
import UserInfo from './UserInfo'
import TestReportTable from './TestReportTable'
import reason from './reason'
import CustomerShipping from './CustomerShipping'
import Networkdelivery from './Networkdelivery'
import Evaluated from './Evaluated'
import AgreeOfferButtonChild from './AgreeOfferButtonChild'
import confirmReceiptButton from './confirmReceiptButton'
import settlementButton from './settlementButton'
import { getOrderByOrderNumber, getRouterLog } from '@/api/order'
import { getCheckReport, getOrderBillByOrderNumber } from '@/api/checkReport'
import { getOrderCommentByOrderNumber } from '@/api/orderComment'

export default {
    components: { logintop, step, WorkOrderTable, Evaluation, UserInfo, TestReportTable, reason, CustomerShipping, Networkdelivery, Evaluated, AgreeOfferButtonChild, confirmReceiptButton, settlementButton },
    data () {
        return {
          orderNumber: this.$route.params.orderNumber,
          refNumber: '',
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
          cusRouterInfo: {},
          delRouterInfo: {},
          checkReportInfo: {},
          orderBill: {},
          orderComment: {},
          showEvaluation: false,
          showCustomerShipping: false,
          showTestReportTable: false,
          showReason: false,
          showNetworkdelivery: false,
          showAgreeOfferButtonChild: false,
          showEvaluated: false,
          showConfirmReceiptButton: false,
          showSettlementButton: false
        }
    },
    created() {
      this.getWorkOrderInfo()
    },
    methods: {
      getWorkOrderInfo() {
        getOrderByOrderNumber(this.orderNumber).then(response => {
          // 如果查询不到数据，则跳转到登录页面
          if (response.data.data === null || response.data.data.refnumber === null || response.data.data.refnumber === '') {
            this.$router.push('/')
            return
          }
          if (response.data.status === '0') {
            this.orderInfo = response.data.data
            this.refNumber = response.data.data.refnumber
            this.statusStr = this.orderInfo.status + ''
            // 根据 statusStr 自动显示不同的信息
            // 评论
            if ('19'.indexOf(this.statusStr) >= 0) {
              this.showEvaluation = true
            }
            // 用户寄给服务商物流信息
            if (this.orderInfo.status > 11) {
              this.showCustomerShipping = true
              this.getCusRouterInfo()
            }
            // 检测报告
            if ('13,14,15,17,18,19,20'.indexOf(this.statusStr) >= 0) {
              this.showTestReportTable = true
              this.getCheckReport()
            }
            // 显示图片
            if ('31,13,14,15,17,18,19,20'.indexOf(this.statusStr) >= 0) {
              this.showReason = true
            }
            // 网点发给客户物流信息
            if ('18,19,20'.indexOf(this.statusStr) >= 0) {
              this.showNetworkdelivery = true
            }
            // 显示评论
            if ('20'.indexOf(this.statusStr) >= 0) {
              this.showEvaluated = true
            }
            // 确认收货
            if ('18'.indexOf(this.statusStr) >= 0) {
              this.showConfirmReceiptButton = true
            }
            this.orderArr.push(this.orderInfo)
            // 获取服务商寄给用户物流信息
            if ('18,19,20'.indexOf(this.statusStr) >= 0) {
              this.getDelRouterInfo()
            }
            // 获取评论
            if ('20'.indexOf(this.statusStr) >= 0) {
              this.getOrderCommentByOrderNumber()
            }
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
                // 同意报价
                if ('13'.indexOf(this.statusStr) >= 0 && this.checkReportInfo.serviceType === '1' && this.checkReportInfo.confirmQuotes === false) {
                  this.showAgreeOfferButtonChild = true
                }
                // 获取结算信息
                this.getOrderBillByOrderNumber()
            })
      },
      getOrderBillByOrderNumber() {
            getOrderBillByOrderNumber(this.orderInfo.ordernumber).then(response => {
                this.orderBill = response.data.data
                console.log('***********************  getOrderBillByOrderNumber ')
                if (this.orderBill === null) {
                   // 显示结算信息
                  if (this.checkReportInfo.serviceType === '1' && '14,15,17,18,19'.indexOf(this.statusStr) >= 0) {
                    this.showSettlementButton = true
                  } else {
                    // 结算按钮不显示
                    this.showSettlementButton = false
                  }
                } else {
                  // 已结算
                  this.showSettlementButton = false
                }
            })
      },
      getOrderCommentByOrderNumber() {
             getOrderCommentByOrderNumber(this.orderInfo.ordernumber).then(response => {
                this.orderComment = response.data.data
                console.dir('***********************  getOrderCommentByOrderNumber ')
                console.dir(this.orderComment)
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
