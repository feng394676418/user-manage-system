<template>
    <div>
        <div class="row">
            <div class="form-group col-md-12">
                <div class="pull-right">
                    <el-button type="info" class="next_step mr_top" @click="confirmReceipt">确认收货</el-button>
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
            console.dir('orderNumber:' + this.orderNumber)
            confirmReceipt(this.orderNumber).then(response => {
                let status = response.data.status
                if (status === '0') {
                    this.$message.info('确认收货成功！')
                    location.reload()
                } else {
                    this.$message.error(response.data.message)
                }
            })
        }
    }
}
</script>