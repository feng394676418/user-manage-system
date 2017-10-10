<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="pull-right mr_top">
                    <el-button :plain="true" type="info" class="form-group"  @click="dialogVisible2 = true">放弃维修</el-button>
                    <el-button type="info"  class="form-group" @click="dialogVisible2 = true">同意报价</el-button>
                </div>
            </div>
        </div>
        <el-dialog title="" :visible.sync="dialogVisible2" size="tiny">
            <h3 class="text-center">您确认放弃维修吗？</h3>
            <p class="total_cost mr_top2 text-center">运费总计 <strong class="Orange_text">€12.00</strong></p>
            <p class="blue_text text-center pd_bt">拒绝维修后我们会为您寄回你的待维修件，您仅需要支付往返的快递费用，
支付完成后我们将为您发货。 </p>
            <span slot="footer" class="dialog-footer">                
                <el-button @click="dialogVisible2 = false" :plain="true" type="info" class="form-group">NO</el-button>
                <el-button type="info" class="form-group">YES</el-button>
            </span>
        </el-dialog>        
        <el-dialog title="" :visible.sync="dialogVisible" size="tiny">
            <h3 class="text-center">您确认同意报价吗？</h3>
            <p class="total_cost mr_top2 text-center">费用总计 <strong class="Orange_text">€600.00</strong></p>
            <p class="blue_text text-center pd_bt">费用总计€600.00 同意报价后，我们将开始为您维修，维修完成后您需要按报价金额结算。 </p>
            <span slot="footer" class="dialog-footer">                
                <el-button @click="dialogVisible = false" :plain="true" type="info" class="form-group">NO</el-button>
                <el-button type="info" class="form-group">YES</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            dialogVisible: false,
            dialogVisible2: false
        }
    },
    methods: {
    }
}
</script>
<style>
.el-dialog__footer{
    text-align: center;
}
.el-dialog__body{
    padding:0 50px 30px 50px;
    font-size:12px;
}
.el-dialog__headerbtn:focus .el-dialog__close, .el-dialog__headerbtn:hover .el-dialog__close {
    color: #eb6100;
}
.el-dialog__footer{
    padding: 10px 50px 48px 50px;
}
.total_cost{
    font-size: 14px;
    color:#666577;
    margin-bottom: 5px;
}
.el-dialog--tiny {
    width: auto;
}
</style>
