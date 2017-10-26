<template>
    <div class="WorkOrderTable">
        <h3>{{$t('login.OrderNumber')}} 12345678912</h3>
        <el-table :data="workOrderArray" style="width: 100%">
            <el-table-column prop="producttype" :label="$t('order.Modelinfo')" min-width="25%">{{this.workOrder.producttype}}</el-table-column>
            <el-table-column prop="imei" :label="$t('order.IMEI')" min-width="25%"></el-table-column>
            <el-table-column prop="troubleinfo" :label="$t('order.FailureDescription')" min-width="25%"></el-table-column>
            <el-table-column prop="createdate" :label="$t('WarrantyPayment.CreateTime')" min-width="25%"></el-table-column>
        </el-table>
    </div>
</template>

<script>

import { getOrderByRefnumber } from '@/api/order'

export default {
    props: {
      refNumberChild: ''
    },
    data () {
        return {
            tableData: [{
                model: 'Oneplus 5 64G',
                IMEI: '01234567894123156',
                description: '这儿坏了，那儿也坏了，哪哪都坏了',
                time: '2017/09/05 17:32:25'
            }],
            workOrder: {
              producttype: '',
              imei: '',
              troubleinfo: '',
              createdate: ''
            },
            workOrderArray: []
        }
    },
    created() {
      this.getWorkOrderInfo()
    },
    methods: {
      getWorkOrderInfo() {
        getOrderByRefnumber(this.refNumberChild).then(response => {
          if (response.data.status === '0') {
            this.workOrder = response.data
            this.workOrderArray.push(this.workOrder)
            console.dir(this.workOrderArray)
          } else {
            console.dir('报错....................')
          }
        })
      }
    }
}
</script>
<style type="text/css">
</style>
