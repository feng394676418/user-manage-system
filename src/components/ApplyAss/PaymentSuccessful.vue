<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <div class="Bread_crumbs">
                <a href="#/">{{$t('checkprice.home')}}</a> >
                <a href="#">{{$t('ConfirmPayment.ServiceProgress')}}</a> >
                <a href="#">{{$t('ConfirmPayment.Payment')}}</a> >
                <a href="#">{{$t('ConfirmPayment.paymentsuccess')}}</a>
            </div>
            <template v-if="successWait">
              <!--支付结果确认等待-->
              {{$t('ConfirmPayment.Confirming')}}
            </template>
            <template v-else>
              <template v-if="successFlg">
                <!--支付成功-->
            <h2 class="text-center generate_title mr_top pay_title">{{$t('ConfirmPayment.paymentsuccess')}}</h2>
            <p class="text-center mr_top">
                <img src="../../../static/img/payment_successful.png" />
            </p>
            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table my_table mr_top">
                <tr>
                    <th scope="col" width="45%">{{$t('ConfirmPayment.TransactionNo')}}</th>
                    <th scope="col" width="40%">{{$t('ConfirmPayment.WaystoPay')}}</th>
                    <th scope="col" width="15%">{{$t('ConfirmPayment.Cost')}}</th>
                </tr>
                <tr>
                    <td>{{serialnumber}}</td>
                    <td>{{billType}}</td>
                    <td>€ <strong class="Orange_text">{{totalCost}}</strong></td>
                </tr>
            </table>
             <div class="col-md-12 text-center">
                <el-button type="info" class="next_step mr_top btn-info" @click="checkProgress()">{{$t('login.CheckProgress')}}</el-button>
            </div>
              </template>
              <template v-else>
                <!--支付失败-->
                 <h2 class="text-center generate_title mr_top pay_title">{{$t('ConfirmPayment.tryagain')}}</h2>
                <p class="blue_text text-center pd_top">
                    <!--错误信息显示-->
                    {{$t('order.WHY')}}：{{errorInfo}}
                </p>
                <p class="text-center mr_top">
                    <img src="../../../static/img/Payment_failed.png" />
                </p>
                <div class="col-md-12 text-center">
                    <el-button type="info" class="next_step mr_top btn-info" @click="paymentAgain()">{{$t('ConfirmPayment.Back')}}</el-button>
                </div>
              </template>
            </template>
        </div>
    </div>
</template>

<script>
import logintop from './logintop'
import { payResult } from '@/api/payment'

export default {
    components: { logintop },
    data() {
        return {
          errorInfo: '', // 异常信息
          successWait: true, // 支付结果判定flag
          successFlg: false, // 支付成功flag
          billType: '',
          serialnumber: '',
          totalCost: '',
          paymentResult: {
            guid: this.$route.query.guid,
            paymentId: this.$route.query.paymentId,
            token: this.$route.query.token,
            payerId: this.$route.query.PayerID,
            orderNumber: this.$route.query.nber
          }
        }
    },
    created() {
      this.validatePay()
    },
    methods: {
      checkProgress() {
        this.$router.push('/GuaranteedCompletion/' + this.paymentResult.orderNumber)
      },
      paymentAgain() {
        this.$router.push('/ConfirmPayment/' + this.paymentResult.orderNumber + '/true')
      },
      validatePay() {
        console.dir(this.paymentResult)
        payResult(this.paymentResult).then(response => {
          if (response.data.status === '0') {
            // 支付成功
            this.successWait = false
            this.successFlg = true
            this.totalCost = response.data.data.totalCost
            this.serialnumber = response.data.data.serialnumber
            this.billType = response.data.data.billType
          } else {
            this.successWait = false
            this.successFlg = false
            this.errorInfo = response.data.message
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

.el-select {
    display: block;
}
.pay_title{
    font-size:18px;
}
td:nth-last-child(1) strong:last-child{
    font-size:18px;
}
</style>
