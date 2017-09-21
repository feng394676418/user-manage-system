<template>
    <div class="row">
        <div class="col-md-12">
            <h3>评价</h3>
            <div class="Please_score pull-left">                
                <span class="pull-left">请给我们打个评分 ：&nbsp;</span>
                <el-rate class="pull-left" v-model="value5" text-template="{value}"></el-rate>
                <span class="pull-left blue_text">五星代表满分好评。</span>
            </div>
            <div class="form-group">
                <textarea class="form-control" id="" placeholder="你对我们的服务有什么意见和建议吗？" rows="4" type="text" v-model="textarea"></textarea>
            </div>
            <div class="pull-right mr_top2 btn_bottom">
                <el-button type="info">评价</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            textarea: '',
            value5: '0'
        }
    },
    methods: {
    }
}
</script>
<style type="text/css">
.btn_bottom {
    margin-bottom: 25px;
}
.main_form_input .form-control {
    padding: 6px;
}
</style>