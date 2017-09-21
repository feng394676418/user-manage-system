<template>
    <div class="row CustomerShipping mr_top2">
        <h3 class="col-md-12">客户发货信息</h3>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">寄件地址：</label>
        </div>
        <div class="col-md-10">
            <p>somewhere in the european country but i cannot say where it is</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">寄到网点渠道：</label>
        </div>
        <div class="col-md-10">
            <p>UPS</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">寄到网点运单号：</label>
        </div>
        <div class="col-md-10">
            <p>45648979464643</p>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-2">
            <label for="">寄出物流信息：</label>
        </div>
        <div class="col-md-10">
            <p>网点已收件 2017/09/09 12:00:00
                <span class="purple_text" @click="btnClick" >展示详细信息 <i><img :class="{rotate: isrotate}" src="../../../static/img/arrow.png" alt=""></i></span>
            </p>
            <div :class="{des_hide: isShow}">
                <p>网点已收件 2017/09/09 12:00:00</p>
                <p>网点已收件 2017/09/09 12:00:00</p>
                <p>网点已收件 2017/09/09 12:00:00</p>
                <p>网点已收件 2017/09/09 12:00:00</p>
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