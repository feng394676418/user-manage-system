<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <div class="Bread_crumbs">
                <a href="#/">{{$t('checkprice.home')}}</a> >
                <a class="minicursor" @click="checkProgress">{{$t('ConfirmPayment.ServiceProgress')}}</a> >
                <a class="minicursor" @click="paymentAgain">{{$t('ConfirmPayment.Payment')}}</a> >
                <a>{{$t('ConfirmPayment.PaymentFailure')}}</a>
            </div>
            <!--支付失败-->
            <h2 class="text-center generate_title mr_top pay_title">{{$t('ConfirmPayment.tryagain')}}</h2>
            <p class="blue_text text-center pd_top">
                <!--错误信息显示-->
                {{$t('order.WHY')}}：{{$t('ConfirmPayment.failure')}}
            </p>
            <p class="text-center mr_top">
                <img src="../../../static/img/Payment_failed.png" />
            </p>
            <div class="col-md-12 text-center">
                <el-button type="info" @click="paymentAgain" class="next_step mr_top btn-info">{{$t('ConfirmPayment.Back')}}</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import logintop from './logintop'
export default {
    components: { logintop },
    data() {
        return {
          orderNumber: this.$route.query.nber
        }
    },
    methods: {
      checkProgress() {
        this.$router.push('/GuaranteedCompletion/' + this.orderNumber)
      },
       paymentAgain() {
        this.$router.push('/ConfirmPayment/' + this.orderNumber + '/true')
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
.minicursor{
  cursor:pointer
}
</style>
