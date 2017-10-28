<template>
    <div class="row CustomerShipping mr_top2">
        <h3 class="col-md-12">{{$t('Warranty.ShipmentInfo')}}</h3>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.deliveryaddress')}}：</label>
        </div>
        <div class="col-md-10">
            <p>{{delInfoChild.addressdetail}}</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.Carrier')}}：</label>
        </div>
        <div class="col-md-10">
            <p>{{delInfoChild.sendexpresscode}}</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.TrackingNo')}}：</label>
        </div>
        <div class="col-md-10">
            <p>{{delInfoChild.sendtrackingno}}</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.DeliveryInfo')}}：</label>
        </div>
        <template v-if="isShow">
             <div class="col-md-10">
              <span class="purple_text" @click="btnClick" >{{$t('WarrantyPayment.Paylater')}} <i><img :class="{rotate: isrotate}" src="../../../static/img/arrow.png" alt=""></i></span>
              <p v-for="(item,index) in delRouterInfo"  v-if="index==0" >{{item.description}} {{item.routedate}}</p>
            </div>
        </template>
        <template v-else-if="!isShow">
          <div class="col-md-10">
              <span class="purple_text" @click="btnClick" >{{$t('WarrantyPayment.Paylater')}} <i><img :class="{rotate: isrotate}" src="../../../static/img/arrow.png" alt=""></i></span>
              <div :class="{des_hide: isShow}">
                  <p v-for="item in delRouterInfo">{{item.description}} {{item.routedate}}</p>
              </div>
          </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        delInfoChild: '',
        delRouterInfo: ''
    },
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