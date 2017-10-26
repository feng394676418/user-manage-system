<template>
    <div class="WorkOrderTable">
        <h3>工单编号 {{ refNumber }}</h3>
        <el-table :data="orderInfoChild" style="width: 100%">
            <el-table-column prop="producttype" label="产品型号" min-width="25%"></el-table-column>
            <el-table-column prop="imei" label="IMEI号码 " min-width="25%"></el-table-column>
            <el-table-column prop="troubleinfo" label="故障描述" min-width="25%"></el-table-column>
            <el-table-column prop="createdate" label="创建时间" min-width="25%"></el-table-column>
        </el-table>
    </div>
</template>

<script>

export default {
    props: {
      orderInfoChild: '',
      refNumber: ''
    },
    data () {
        return {

        }
    },
    created() {

    },
    methods: {

    }
}
</script>
<style type="text/css">
</style>
