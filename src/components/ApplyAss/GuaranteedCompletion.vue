<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <step></step>
            <WorkOrderTable :orderInfoChild="orderArr,refNumber"></WorkOrderTable>
            <UserInfo :userInfoChild="orderInfo"></UserInfo>
            <!--<TestReportTable></TestReportTable>
            <reason></reason>-->
            <CustomerShipping :cusInfoChild="orderInfo"></CustomerShipping>
            <!--<Networkdelivery></Networkdelivery>
            <Evaluated></Evaluated>-->
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
import { getOrderByRefnumber } from '@/api/order'

export default {
    components: { logintop, step, WorkOrderTable, UserInfo, TestReportTable, reason, CustomerShipping, Networkdelivery, Evaluated },
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
            provideraddress: ''
          },
          orderArr: []
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
            this.orderArr.push(this.orderInfo)
          } else {
            console.dir('获取工单信息异常....................')
          }
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
