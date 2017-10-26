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
                <el-button :plain="true" type="info" class="form-group">{{$t('ConfirmPayment.Paylater')}}</el-button>
                <el-button type="info"  class="form-group">{{$t('ConfirmPayment.PayNow')}}</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import logintop from './logintop'
export default {
    components: { logintop },
    data () {
        return {
            tableData: [{
                item: this.$t('ConfirmPayment.ServiceParts'),
                // 备件
                Details: this.$t('ConfirmPayment.Screen'),
                // 屏幕
                price: '12'
            },
            {
                item: '',
                Details: this.$t('checkprice.RearCamera'),
                // 后置摄像头
                price: '12'
            },
            {
                item: '',
                Details: this.$t('checkprice.OuterCasing'),
                // 外壳
                price: '12'
            },
            {
                item: this.$t('ConfirmPayment.ServiceCost'),
                // 维修费
                Details: this.$t('checkprice.Level2'),
                // L2级维修
                price: '12'
            },
            {
                item: '',
                Details: this.$t('checkprice.OuterCasing'),
                // 外壳
                price: '12'
            },
            {
                item: this.$t('ConfirmPayment.DeliveryCost'),
                // 快递费
                Details: this.$t('ConfirmPayment.Sentout'),
                // 寄出
                price: '12'
            },
            {
                item: '',
                Details: this.$t('ConfirmPayment.Sentback'),
                // 寄回
                price: '12'
            },
            {
                item: this.$t('ConfirmPayment.TotalCost'),
                // 总价
                Details: '',
                price: '72'
            },
            {
                item: this.$t('order.InWarranty'),
                // 保内
                Details: '',
                price: '0'
            },
            {
                item: this.$t('ConfirmPayment.RemaintoPay'),
                // 实付
                Details: '',
                price: '72.00'
            }]
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
