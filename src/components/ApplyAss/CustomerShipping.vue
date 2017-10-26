<template>
    <div class="row CustomerShipping mr_top2">
        <h3 class="col-md-12">{{$t('WarrantyPayment.DeliveryInfo')}}</h3>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('WarrantyPayment.DeliveryAddress')}}：</label>
        </div>
        <div class="col-md-10">
            <p>somewhere in the european country but i cannot say where it is</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('WarrantyPayment.Carrier')}}：</label>
        </div>
        <div class="col-md-10">
            <p>UPS</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('WarrantyPayment.TrackingNo')}}：</label>
        </div>
        <div class="col-md-10">
            <p>45648979464643</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('WarrantyPayment.Sendlogisticsinfo')}}：</label>
        </div>
        <div class="col-md-10">
            <p>{{$t('WarrantyPayment.ReceivedPoint')}} 2017/09/09 12:00:00
                <span class="purple_text" @click="btnClick" >{{$t('WarrantyPayment.Paylater')}} <i><img :class="{rotate: isrotate}" src="../../../static/img/arrow.png" alt=""></i></span>
            </p>
            <div :class="{des_hide: isShow}">
                <p>{{$t('WarrantyPayment.ReceivedPoint')}} 2017/09/09 12:00:00</p>
                <p>{{$t('WarrantyPayment.ReceivedPoint')}} 2017/09/09 12:00:00</p>
                <p>{{$t('WarrantyPayment.ReceivedPoint')}} 2017/09/09 12:00:00</p>
                <p>{{$t('WarrantyPayment.ReceivedPoint')}} 2017/09/09 12:00:00</p>
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