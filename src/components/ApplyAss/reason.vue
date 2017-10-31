<template>
    <div class="row">
        <div class="col-md-12 reson">
           <span>{{$t('WarrantyPayment.DiagnosticResults')}}：</span>{{checkReportInfo.causeInfo}}
        </div>
        <div class="clearfix"></div>
        <ul class="col-md-12 Fault_picture">
            <template v-for="imgUrl in checkReportInfo.photoGrpUrl.split(',')">
                        <img :src="imgUrl" />
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
    }
}
</script>
<style type="text/css">

</style>