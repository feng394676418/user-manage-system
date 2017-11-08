<template>
    <div class="row">
        <div class="col-md-12">
            <h3>{{$t('Warranty.Rate')}}</h3>
            <div class="Please_score pull-left">                
                <span class="pull-left">{{$t('Warranty.rateservice')}} ：&nbsp;</span>
                <el-rate class="pull-left" v-model="orderComment.score" text-template="{value}"></el-rate>
                <span class="pull-left blue_text">{{$t('Warranty.highestcomment')}}</span>
            </div>
            <div class="form-group">
                <textarea class="form-control" id="" :placeholder="$t('Warranty.suggestions')" rows="4" type="text" v-model="orderComment.content"></textarea>
            </div>
            <div class="pull-right mr_top2 btn_bottom">
                <el-button class="btn-info" type="info" @click="handelOrderComment">{{$t('Warranty.Done')}}</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { commentOrder } from '@/api/orderComment'
export default {
    props: {
        orderNumber: ''
    },
    data() {
        return {
            orderComment: {
                content: '',
                score: '',
                orderNumber: ''
            }
        }
    },
    methods: {
        handelOrderComment() {
            this.orderComment.orderNumber = this.orderNumber
            commentOrder(this.orderComment).then(response => {
                this.orderComment = response.data.data
                location.reload()
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
</style>