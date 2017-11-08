<template>
    <div>
        <div class="row">
            <div class="form-group col-md-12">
                <div class="pull-right">
<<<<<<< HEAD
                    <el-button type="info" class="next_step mr_top btn-info" @click="confirmReceipt">{{$t('order.Confirmreceipt')}}</el-button>
=======
                    <el-button ref="btnReceipt" type="info" class="next_step mr_top btn-info" @click="confirmReceipt">{{$t('order.Confirmreceipt')}}</el-button>
>>>>>>> 3fb178719d060787a86f683913ad64548bb70844
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
