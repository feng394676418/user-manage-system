<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <div class="Bread_crumbs">
                <a href="#">{{$t('checkprice.home')}}</a> >
                <a href="#">{{$t('ConfirmPayment.ServiceProgress')}}</a> >
                <a href="#">{{$t('ConfirmPayment.Payment')}}</a> >
                <a href="#">{{$t('ConfirmPayment.paymentsuccess')}}</a>
            </div>
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
                    <td>45641654989494165266</td>
                    <td>PayPal</td>
                    <td>€ <strong class="Orange_text">72.00</strong></td> 
                </tr>            
            </table>            
            <div class="col-md-12 text-center">
                <el-button type="info" class="next_step mr_top">{{$t('login.CheckProgress')}}</el-button>
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
        }
    },
    methods: {
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
