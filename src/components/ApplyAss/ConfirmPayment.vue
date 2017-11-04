<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <div class="Bread_crumbs">
                <a href="#">{{$t('checkprice.home')}}</a> >
                <a href="#">{{$t('ConfirmPayment.ServiceProgress')}}</a> >
                <a href="#">{{$t('ConfirmPayment.Payment')}}</a>
            </div>
            <h1 class="Charge_Details">{{$t('ConfirmPayment.Invoice')}}</h1>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="item" :label="$t('ConfirmPayment.Categories')"  min-width="33%">
                </el-table-column>
                <el-table-column prop="Details" :label="$t('ConfirmPayment.Items')" min-width="34%">
                </el-table-column>
                <el-table-column :label="$t('ConfirmPayment.Price')" min-width="33%">
                    <template scope="scope">
                        € <strong class="Orange_text">{{ scope.row.price }}</strong>
                    </template>
                </el-table-column>

            </el-table>
            <div class="pd_tb">
                <label>
                    <b>*</b>{{$t('ConfirmPayment.WaystoPay')}}</label>
            </div>
            <a href="#"><img src="../../../static/img/PayPal.png" /></a>
            <div class="pull-right mr_top">
                <el-button :plain="true" type="info" class="form-group" @click="payLater">{{$t('ConfirmPayment.Paylater')}}</el-button>
                <el-button type="info"  class="form-group" @click="payNow" v-loading.fullscreen.lock="fullscreenLoading">{{$t('ConfirmPayment.PayNow')}}</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import logintop from './logintop'
import { getCheckReport } from '@/api/checkReport'
import { payOrder, payOverCheck } from '@/api/payment'
export default {
    components: { logintop },
    data () {
        return {
            fullscreenLoading: false,
            paymenturi: '',
            billType: '',
            isRepair: this.$route.params.isRepair, // true同意报价 false不同意报价 高风险 废弃 2017/11/3 dbsix.liu
            orderNumber: this.$route.params.orderNumber,
            remaintoPay: 0,
            tableData: []
        }
    },
     created() {
      this.payCheck()
      this.getCheckReport()
    },
    methods: {
        payCheck() {
          // 是否已经付款check
          payOverCheck(this.orderNumber).then(response => {
            console.log('2222222222222222222222')
            console.dir(response)
            if (response.data.status === '0') {
              // 已付款 直接跳转
              this.$router.push('/GuaranteedCompletion/' + this.orderNumber)
            }
          })
        },
        getCheckReport() {
            getCheckReport(this.orderNumber).then(response => {
                this.checkReportInfo = response.data.data
                if (this.checkReportInfo.confirmQuotes) { // 数据库内部信息获取 dbsix.liu
                    // 同意报价的情况收费
                    let item = {}
                    // 备件
                    let type = this.$t('ConfirmPayment.ServiceParts')
                    this.checkReportInfo.orderParts.forEach(part => {
                        item = {}
                        item.item = type
                        item.Details = part.partename
                        item.price = part.partcost
                        this.tableData.push(item)
                        type = ''
                    })
                    // 维修费
                    item = {}
                    item.item = this.$t('ConfirmPayment.ServiceCost')
                    item.Details = this.checkReportInfo.repairLevel
                    item.price = this.checkReportInfo.repairCost
                    this.tableData.push(item)

                    // 快递费 寄出
                    item = {}
                    item.item = this.$t('ConfirmPayment.DeliveryCost')
                    item.Details = this.$t('ConfirmPayment.Sentout')
                    item.price = this.checkReportInfo.collectionCost
                    this.tableData.push(item)

                    // 快递费 寄回
                    item = {}
                    item.item = ''
                    item.Details = this.$t('ConfirmPayment.Sentback')
                    item.price = this.checkReportInfo.mailingcost
                    this.tableData.push(item)

                    // 总价
                    item = {}
                    item.item = this.$t('ConfirmPayment.TotalCost')
                    item.Details = ''
                    item.price = this.checkReportInfo.allCost
                    this.tableData.push(item)

                    // 保内
                    item = {}
                    item.item = this.$t('order.InWarranty')
                    item.Details = ''
                    item.price = this.checkReportInfo.coveredbyWarranty
                    this.tableData.push(item)

                    // 实付
                    item = {}
                    item.item = this.$t('ConfirmPayment.RemaintoPay')
                    item.Details = ''
                    item.price = this.checkReportInfo.remaintoPay
                    this.tableData.push(item)
                    this.remaintoPay = this.checkReportInfo.remaintoPay
                } else {
                    // 不同意报价的场合 只收取快递费用
                    // 快递费 寄出
                    let item = {}
                    item.item = this.$t('ConfirmPayment.DeliveryCost')
                    item.Details = this.$t('ConfirmPayment.Sentout')
                    item.price = this.checkReportInfo.collectionCost
                    this.tableData.push(item)

                    // 快递费 寄回
                    item = {}
                    item.item = ''
                    item.Details = this.$t('ConfirmPayment.Sentback')
                    item.price = this.checkReportInfo.mailingcost
                    this.tableData.push(item)

                    // 实付
                    item = {}
                    item.item = this.$t('ConfirmPayment.RemaintoPay')
                    item.Details = ''
                    item.price = this.checkReportInfo.collectionCost + this.checkReportInfo.mailingcost
                    this.tableData.push(item)
                    this.remaintoPay = this.checkReportInfo.collectionCost + this.checkReportInfo.mailingcost
                }
            })
      },
      payLater() {
          this.$router.go(-1)
      },
      payNow() {
          console.log('RemaintoPay:' + this.remaintoPay)
          // paypal支付一时固定
          this.billType = 'paypal'
          this.fullscreenLoading = true
          payOrder(this.orderNumber, this.billType).then(response => {
            if (response.data.status === '0') {
              this.paymenturi = response.data.data.paymenturi
              console.log(this.paymenturi)
              window.open(this.paymenturi, '_self')
              this.fullscreenLoading = false
            } else {
              this.$message.error(response.data.message)
              this.$router.push('/PaymentFailed')
              this.fullscreenLoading = false
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
.el-table{
    color:#8c8c9e;
    border-top:none;
}
tr:nth-last-child(1) strong:last-child{
    font-size:18px;
}
tr:nth-last-child(1),tr:nth-last-child(2),tr:nth-last-child(3),tr:nth-last-child(5),tr:nth-last-child(7){
    border-top: 1px solid #e8ebfa;
}
tr:nth-child(10){
    height: 48px!important;
}
td:first-child{
    font-weight:bold;
    font-size:14px;
}
</style>
