<template>
    <div class="WorkOrderTable">
        <h3>工单编号 12345678912</h3>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="model" label="产品型号" min-width="25%">
            </el-table-column>
            <el-table-column prop="IMEI" label="IMEI号码 " min-width="25%">
            </el-table-column>
            <el-table-column prop="description" label="故障描述" min-width="25%">
            </el-table-column>
            <el-table-column prop="time" label="创建时间" min-width="25%">
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