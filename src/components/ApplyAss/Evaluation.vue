<template>
    <div class="row">
        <el-form :model="orderComment" :rules="rules" ref="orderComment" label-width="" class="demo-ruleForm">
        <div class="col-md-12">
            <h3>{{$t('Warranty.Rate')}}</h3>
            <div class="form-group">
                <span class="pull-left">{{$t('Warranty.rateservice')}} ：&nbsp;</span>
                <el-form-item label="" prop="score" style="margin-bottom:0;" class="rate_text">
                    <el-rate class="pull-left" v-model="orderComment.score"></el-rate>
                    <span class="pull-left blue_text">{{$t('Warranty.highestcomment')}}</span>
                    <el-input v-model="orderComment.score" v-show="false"></el-input>
                </el-form-item>
            </div>
            <div class="form-group">
                    <el-input type="textarea" class="rate_textarea"  :placeholder="$t('Warranty.suggestions')" :rows="4" v-model="orderComment.content"></el-input>
            </div>
            <div class="pull-right mr_top2 btn_bottom">
                <el-button class="btn-info"  ref="btnComment" type="info" @click="handelOrderComment">{{$t('Warranty.Done')}}</el-button>
            </div>
        </div>
        </el-form>
    </div>
</template>

<script>
import { commentOrder } from '@/api/orderComment'
export default {
    props: {
        orderNumber: ''
    },
    data() {
        var validateScore = (rule, value, callback) => {
                console.dir('value:' + value)
                if (value === 0) {
                    callback(new Error(this.$t('Warranty.rateservice')))
                } else {
                    callback()
                }
        }
        return {
            rules: {
                score: [
                    { validator: validateScore, trigger: 'change' }
                ]
            },
            orderComment: {
                content: '',
                score: 0,
                orderNumber: ''
            },
            validBool: false
        }
    },
    methods: {
        handelOrderComment() {
            let _this = this
            _this.$refs.btnComment.disabled = true
            setTimeout(() => {
               _this.$refs.btnComment.disabled = false
            }, 20000)
            _this.$refs['orderComment'].validate((valid) => {
                if (valid) {
                    _this.orderComment.orderNumber = _this.orderNumber
                        commentOrder(_this.orderComment).then(response => {
                            _this.orderComment = response.data.data
                            location.reload()
                        })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
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
.rate_text .el-form-item__content{
    line-height: 23px!important;
}
.rate_textarea{
    padding:5px 0;
}
</style>
