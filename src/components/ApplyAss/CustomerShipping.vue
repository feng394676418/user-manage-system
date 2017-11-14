<template>
    <div class="row CustomerShipping mr_top2">
        <h3 class="col-md-12">{{$t('WarrantyPayment.DeliveryInfo')}}</h3>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('WarrantyPayment.DeliveryAddress')}}：</label>
        </div>
        <div class="col-md-10">
            <p>{{cusInfoChild.provideraddress}}</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('WarrantyPayment.Carrier')}}：</label>
        </div>
        <div class="col-md-10">
            <p>{{cusInfoChild.expresscode}}</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('WarrantyPayment.TrackingNo')}}：</label>
        </div>
        <div class="col-md-10">
            <p>{{cusInfoChild.trackingno}}</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('WarrantyPayment.Sendlogisticsinfo')}}：</label>
        </div>
        <template v-if="isShow">
             <div class="col-md-10">
              <span class="purple_text" @click="btnClick" >{{$t('WarrantyPayment.Showinformation')}} <i><img :class="{rotate: isrotate}" src="../../../static/img/arrow.png" alt=""></i></span>
              <p v-for="(item,index) in cusRouterInfo"  v-if="index==0" >{{item.description}} {{item.routedate}}</p>
            </div>
        </template>
        <template v-else-if="!isShow">
          <div class="col-md-10">
              <span class="purple_text" @click="btnClick" >{{$t('WarrantyPayment.Foldinformation')}} <i><img :class="{rotate: isrotate}" src="../../../static/img/arrow.png" alt=""></i></span>
              <div :class="{des_hide: isShow}">
                  <p v-for="item in cusRouterInfo">{{item.description}} {{item.routedate}}</p>
              </div>
          </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
      cusInfoChild: '',
      cusRouterInfo: ''
    },
    data () {
        return {
            isShow: true,
            isrotate: false
        }
    },
    created() {
      this.test()
    },
    methods: {
      btnClick: function() {
          this.isShow = !this.isShow
          this.isrotate = !this.isrotate
      },
      test() {
        // console.dir(this.cusInfoChild)
        // console.dir(this.cusRouterInfo + '.....................')
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
