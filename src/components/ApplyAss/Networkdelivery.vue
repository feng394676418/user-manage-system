<template>
    <div class="row CustomerShipping mr_top2">
        <h3 class="col-md-12">{{$t('Warranty.ShipmentInfo')}}</h3>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.deliveryaddress')}}：</label>
        </div>
        <div class="col-md-10">
            <p>somewhere in the european country but i cannot say where it is</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.Carrier')}}：</label>
        </div>
        <div class="col-md-10">
            <p>UPS</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.TrackingNo')}}：</label>
        </div>
        <div class="col-md-10">
            <p>985555555555</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.DeliveryInfo')}}：</label>
        </div>
        <div class="col-md-10">
            <p>{{$t('Warranty.Receivedcustomer')}} 2017/09/15 12:00:00  
                <span class="purple_text" @click="btnClick" >{{$t('WarrantyPayment.Paylater')}} <i><img :class="{rotate: isrotate}" src="../../../static/img/arrow.png" alt=""></i></span>
            </p>
            <div :class="{des_hide: isShow}">
                <p>客户已收件 2017/09/15 12:00:00</p>
                <p>客户已收件 2017/09/15 12:00:00</p>
                <p>客户已收件 2017/09/15 12:00:00</p>
                <p>客户已收件 2017/09/15 12:00:00</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isShow: true,
            isrotate: false
        }
    },
    methods: {
        btnClick: function() {
            this.isShow = !this.isShow
            this.isrotate = !this.isrotate
        }
    }
}
</script>
<style type="text/css">
.des_hide{
    display: none;
}
.rotate{
    transform: rotate(-180deg);
}
</style>