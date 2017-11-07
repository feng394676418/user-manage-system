<template>
    <div>
        <div class="row">
            <div class="form-group col-md-12">
                <div class="pull-right">
                    <el-button ref="btnReceipt" type="info" class="next_step mr_top" @click="confirmReceipt">{{$t('order.Confirmreceipt')}}</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { confirmReceipt } from '@/api/checkReport'
export default {
    props: {
        orderNumber: ''
    },
    data() {
        return {
        }
    },
    methods: {
        confirmReceipt() {
            this.$refs.btnReceipt.disabled = true
            setTimeout(() => {
               this.$refs.btnReceipt.disabled = false
            }, 3000)

            console.dir('orderNumber:' + this.orderNumber)
            confirmReceipt(this.orderNumber).then(response => {
                let status = response.data.status
                if (status === '0') {
                    this.$message.info(this.$t('order.receiptsuccess'))// 确认收货成功！
                    location.reload()
                } else {
                    this.$message.error(response.data.message)
                }
            })
        }
    }
}
</script>
