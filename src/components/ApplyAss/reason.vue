<template>
    <div class="row">
        <div class="col-md-12 reson">
            <span>{{$t('WarrantyPayment.DiagnosticResults')}}：</span>{{checkReportInfo.causeInfo}}
        </div>
        <div class="clearfix"></div>
         <!-- <ul class="col-md-12 Fault_picture">
                <template v-for="imgUrl in checkReportInfo.photoGrpUrl.split(',')">
                            <img :src="imgUrl" />
                </template>
            </ul>  -->
         <ul class="Fault_picture col-md-12" id="layer-photos-demo">
            <template v-if="checkReportInfo.photoGrpUrl === null || checkReportInfo.photoGrpUrl ===''"></template>            
            <template v-else>           
                <div v-for="imgUrl in checkReportInfo.photoGrpUrl.split(',')" :key="imgUrl">
                    <a @click="handleView(imgUrl)" href="javascript:viod(0);"><img :layer-src="imgUrl" :src="imgUrl" layer-index="0"></a>
                </div>
             </template>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        checkReportInfo: ''
    },
    data() {
        return {
        }
    },
    methods: {
        handleView(addr) {
            this.$layer.open({
            type: 1,
            title: '',
            closeBtn: 0,
            shadeClose: true,
            skin: '',
            content: '<div style="height:500px width:500px"><img src="' + addr + '"></img></div>'
          })
        }
    }
}
</script>
<style>
@import '/static/layer/skin/default/layer.css';
.notify-main {
    max-width: 800px !important;
}
</style>
