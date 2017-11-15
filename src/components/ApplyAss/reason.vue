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
            <div v-for="imgUrl in checkReportInfo.photoGrpUrl.split(',')" :key="imgUrl">
                <a @click="handleView(imgUrl)"><img :layer-src="imgUrl" :src="imgUrl" layer-index="0"></a>
            </div>
        </ul> 
    </div>
</template>

<script>
import layer from 'layer'
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
            console.log(addr)
            layer.alert('hello')
            layer.photos({
                photos: '#layer-photos-demo',
                anim: 0 // 0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
            })
        }
    }
}
</script>
<style scoped>
@import '/static/layer/skin/default/layer.css';
</style>