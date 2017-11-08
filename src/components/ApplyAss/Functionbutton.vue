<template>
    <div>
        <div class="row">
            <!--默认都显示-->
            <!-- <div class="col-md-6 form-group">
                <el-button type="primary"  :plain="true" style="width:100%">
                    保内
                    <p>保内全部维修费用由厂商承担。</p>
                </el-button>
            </div>
            <div class="col-md-6 form-group">
                <el-button type="primary" class="col-md-6" :plain="true" style="width:100%">
                    保外
                    <p>保外全部维修费用由您承担。</p>
                </el-button>
            </div> -->
            <!--保内按钮-->
            <div class="col-md-6 form-group">
                <el-button class="btn-primary" type="primary" :plain="!functionButtonInfoChild.timeIn" style="width:100%">
                    {{$t('order.InWarranty')}}
                    <p>{{$t('order.costwarranty')}}</p>
                </el-button>
            </div>
            <!--保外按钮-->
            <div class="col-md-6 form-group">
                <el-button class="btn-primary" type="primary" :class="functionButtonInfoChild.timeOutClassName" :plain="true" style="width:100%">
                    {{$t('order.OutofWarranty')}}
                    <p>{{$t('order.costnotwarranty')}}</p>
                </el-button>
            </div>
        </div>
        <p class="blue_text pd_tb">
            {{$t('order.conclusionreference')}}
            <a class="purple_text" href="#/checkprice" target="_blank" >{{$t('order.ServicePrices')}}</a>
        </p>
    </div>
</template>

<script>
export default {

  comments: {},
  props: {
    functionButtonInfoChild: {}
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {
  }
}
</script>


<style>
.yellow_btn,
.yellow_btn:focus,
.yellow_btn:hover {
    background-color: #fff;
    border: 2px solid #f39800!important;
    border-radius: 10px;
    color: #f39800!important;
    height: 94px!important;
}
</style>
