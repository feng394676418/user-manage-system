<template>
    <div class="WorkOrderTable">
        <h3>{{$t('login.OrderNumber')}} {{ refNumber }}</h3>
        <el-table :data="orderInfoChild" style="width: 100%">
            <el-table-column prop="producttype" :label="$t('order.Modelinfo')" min-width="25%"></el-table-column>
            <el-table-column prop="imei" :label="$t('order.IMEI')" min-width="25%"></el-table-column>
            <el-table-column prop="troubleinfo" :label="$t('order.FailureDescription')" min-width="25%"></el-table-column>
            <el-table-column prop="createdate" :label="$t('WarrantyPayment.CreateTime')" min-width="25%"></el-table-column>
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
