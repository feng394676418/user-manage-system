<template>
    <div class="WorkOrderTable">
        <h3>{{$t('login.OrderNumber')}} 12345678912</h3>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="model" :label="$t('order.Modelinfo')" min-width="25%">
            </el-table-column>
            <el-table-column prop="IMEI" :label="$t('order.IMEI')" min-width="25%">
            </el-table-column>
            <el-table-column prop="description" :label="$t('order.FailureDescription')" min-width="25%">
            </el-table-column>
            <el-table-column prop="time" :label="$t('WarrantyPayment.CreateTime')" min-width="25%">
            </el-table-column>            
        </el-table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableData: [{
                model: 'Oneplus 5 64G',
                IMEI: '01234567894123156',
                description: '这儿坏了，那儿也坏了，哪哪都坏了',
                time: '2017/09/05 17:32:25'
            }]
        }
    },
    methods: {
    }
}
</script>
<style type="text/css">
</style>