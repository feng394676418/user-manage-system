<template>
    <div>
        <div class="row">
            <div class="form-group col-md-12">
                <div class="pull-right">
                    <el-button type="info" class="next_step mr_top btn-info" @click="payment">{{$t('order.Payment')}}</el-button>
                </div>
            </div>
        </div>
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
        payment() {
            this.$router.push('/ConfirmPayment/' + this.checkReportInfo.orderNunber + '/' + this.checkReportInfo.confirmQuotes)
        }
    }
}
</script>

