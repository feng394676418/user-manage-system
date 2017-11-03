<template>
    <div class="row CustomerShipping mr_top2">
        <h3 class="col-md-12">{{$t('Warranty.Rate')}}</h3>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.Servicescore')}}：</label>
        </div>
        <div class="col-md-10">
            <el-rate class="pull-left" disabled v-model="orderComment.score" text-template="{value}"></el-rate>
            <strong class="pull-left blue_text">{{$t('Warranty.highestcomment')}}</strong>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">{{$t('Warranty.Comments')}}：</label>
        </div>
        <div class="col-md-10">
            <p>{{orderComment.content}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        orderComment: ''
    },
    data () {
        return {
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