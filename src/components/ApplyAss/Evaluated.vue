<template>
    <div class="row CustomerShipping mr_top2">
        <h3 class="col-md-12">{{$t('Warranty.Rate')}}</h3>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.Servicescore')}}：</label>
        </div>
        <div class="col-md-10">
            <el-rate class="pull-left" disabled v-model="value5" text-template="{value}"></el-rate>
            <strong class="pull-left blue_text">{{$t('Warranty.highestcomment')}}</strong>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.Comments')}}：</label>
        </div>
        <div class="col-md-10">
            <p>与第四阶段就粉底灰底色丢 会读书u覅的一个东风雨个iiu的鬼鬼嘀咕活动覆盖 i和覅u和i会的覅u个的和活动发火点发火点发货单和回复答复的电话vhd</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value5: '4'
        }
    },
    methods: {
    }
}
</script>
<style type="text/css">
strong{
    font-weight: normal;
    font-size: 12px;
}
</style>