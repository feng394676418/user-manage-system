<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <div class="Bread_crumbs">
                <a href="#/">{{$t('checkprice.home')}}</a> >
                <a class="minicursor" @click="checkProgress">{{$t('ConfirmPayment.ServiceProgress')}}</a> >
                <a>{{$t('ConfirmPayment.Payment')}}</a>
            </div>
            <h1 class="Charge_Details">{{$t('ConfirmPayment.Invoice')}}</h1>
            <el-table :data="tableData" style="width: 100%" class="pay_table">
                <el-table-column :label="$t('ConfirmPayment.Categories')"  min-width="33%">
                    <template scope="scope">
                         <div v-html="scope.row.item"></div>
                    </template>
                </el-table-column>
                <el-table-column :label="$t('ConfirmPayment.Items')" min-width="34%">
                    <template scope="scope">
                         <div v-html="scope.row.Details"></div>
                    </template>
                </el-table-column>
                <el-table-column :label="$t('ConfirmPayment.Price')" min-width="33%">
                    <template scope="scope">
                         <div v-html="scope.row.price"></div>
                    </template>
                </el-table-column>

            </el-table>
            <div class="pd_tb">
                <label>
                    <b>*</b>{{$t('ConfirmPayment.WaystoPay')}}</label>
            </div>
            <a href="#"><img src="../../../static/img/PayPal.png" /></a>
            <div class="pull-right mr_top">
                <el-button ref="btn_paylater" :plain="true" type="info" class="form-group btn-info" @click="payLater">{{$t('ConfirmPayment.Paylater')}}</el-button>
                <el-button ref="btn_paynow" type="info" class="form-group btn-info" @click="payNow" v-loading.fullscreen.lock="fullscreenLoading">{{$t('ConfirmPayment.PayNow')}}</el-button>
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
                    let partDetails = ''
                    let partPrice = ''
                    this.checkReportInfo.orderParts.forEach(part => {
                        item = {}
                        partDetails += part.partename + '<br/>'
                        partPrice += '€ <strong class="Orange_text">' + this.money(part.partcost) + '</strong>' + '<br/>'
                    })
                    item = {}
                    item.item = type
                    item.Details = partDetails
                    item.price = partPrice
                    this.tableData.push(item)

                    // 维修费
                    item = {}
                    item.item = this.$t('ConfirmPayment.ServiceCost')
                    item.Details = this.checkReportInfo.repairLevel
                    item.price = '€ <strong class="Orange_text">' + this.money(this.checkReportInfo.repairCost) + '</strong>'
                    this.tableData.push(item)

                    // 快递费
                    item = {}
                    item.item = this.$t('ConfirmPayment.DeliveryCost')
                    item.Details = this.$t('ConfirmPayment.Sentout') + '<br/>' + this.$t('ConfirmPayment.Sentback')
                    item.price = '€ <strong class="Orange_text">' + this.money(this.checkReportInfo.collectionCost) + '</strong>' + '<br/>' + '€ <strong class="Orange_text">' + this.money(this.checkReportInfo.mailingcost) + '</strong>'
                    this.tableData.push(item)

                    // 总价
                    item = {}
                    item.item = this.$t('ConfirmPayment.TotalCost')
                    item.Details = ''
                    item.price = '€ <strong class="Orange_text">' + this.money(this.checkReportInfo.allCost) + '</strong>'
                    this.tableData.push(item)

                    // 保内
                    item = {}
                    item.item = this.$t('order.InWarranty')
                    item.Details = ''
                    item.price = '€ <strong class="Orange_text">' + this.money(this.checkReportInfo.coveredbyWarranty) + '</strong>'
                    this.tableData.push(item)

                    // 实付
                    item = {}
                    item.item = this.$t('ConfirmPayment.RemaintoPay')
                    item.Details = ''
                    item.price = '€ <strong class="Orange_text">' + this.money(this.checkReportInfo.remaintoPay) + '</strong>'
                    this.tableData.push(item)
                    this.remaintoPay = this.checkReportInfo.remaintoPay
                } else {
                    // 不同意报价的场合 只收取快递费用
                    // 快递费
                    let item = {}
                    item.item = this.$t('ConfirmPayment.DeliveryCost')
                    item.Details = this.$t('ConfirmPayment.Sentout') + '<br/>' + this.$t('ConfirmPayment.Sentback')
                    item.price = '€ <strong class="Orange_text">' + this.money(this.checkReportInfo.collectionCost) + '</strong>' + '<br/>' + '€ <strong class="Orange_text">' + this.money(this.checkReportInfo.mailingcost) + '</strong>'
                    this.tableData.push(item)

                    // 实付
                    item = {}
                    item.item = this.$t('ConfirmPayment.RemaintoPay')
                    item.Details = ''
                    item.price = '€ <strong class="Orange_text">' + this.money((this.checkReportInfo.collectionCost + this.checkReportInfo.mailingcost)) + '</strong>'
                    this.tableData.push(item)
                    this.remaintoPay = this.checkReportInfo.collectionCost + this.checkReportInfo.mailingcost
                }
            })
      },
      payLater() {
          // this.$router.go(-1)
          this.$router.push({ path: '/GuaranteedCompletion/' + this.orderNumber })
      },
      payNow() {
          // 防止连续点击两次
          this.$refs.btn_paynow.disabled = true
          setTimeout(() => {
              this.$refs.btn_paynow.disabled = false
          }, 3000)

          // paypal支付一时固定
          this.billType = 'paypal'
          this.fullscreenLoading = true
          payOrder(this.orderNumber, this.billType).then(response => {
            if (response.data.status === '0') {
              this.paymenturi = response.data.data.paymenturi
              console.log(this.paymenturi)
              window.open(this.paymenturi, '_self')
              // this.fullscreenLoading = false
            } else {
              this.$message.error(response.data.message)
              this.$router.push('/PaymentFailed')
              this.fullscreenLoading = false
            }
          })
      },
      checkProgress() {
        this.$router.push({ path: '/GuaranteedCompletion/' + this.orderNumber })
      },
      money(val) {
            val = val.toString().replace(/\$|,/g, '')
            if (isNaN(val)) {
            val = '0'
            }
            const sign = val === (val = Math.abs(val))
            val = Math.floor(val * 100 + 0.50000000001)
            let cents = val % 100
            val = Math.floor(val / 100).toString()
            if (cents < 10) {
            cents = '0' + cents
            }
            for (let i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
                val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3))
            }

            return sign ? '' : val + '.' + cents
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

.minicursor{
  cursor:pointer
}
.el-button {
    width: 236px;
    height: 48px;
}
.el-table{
    color:#8c8c9e;
    border-top:none;
}
.pay_table .Orange_text{
    font-size:18px;
}
.pay_table tr:nth-last-child(1),.pay_table tr:nth-last-child(2),.pay_table tr:nth-last-child(3),.pay_table tr:nth-last-child(4),.pay_table tr:nth-last-child(5),.pay_table tr:nth-last-child(6),.pay_table tr:nth-last-child(7){
    border-top: 1px solid #e8ebfa;
}
.pay_table tr:nth-child(10){
    height: 48px!important;
}
.pay_table td:first-child{
    font-weight:bold;
    font-size:14px;
}
</style>
