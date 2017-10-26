<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="pull-right mr_top">
                    <el-button :plain="true" type="info" class="form-group"  @click="dialogVisible2 = true">{{$t('WarrantyPayment.notrepair')}}</el-button>
                    <el-button type="info"  class="form-group" @click="dialogVisible2 = true">{{$t('WarrantyPayment.Continue')}}</el-button>
                </div>
            </div>
        </div>
        <el-dialog title="" :visible.sync="dialogVisible2" size="tiny">
            <h3 class="text-center">{{$t('WarrantyPayment.surenotrepair')}}</h3>
            <p class="total_cost mr_top2 text-center">{{$t('WarrantyPayment.Deliverytotal')}} <strong class="Orange_text">€12.00</strong></p>
            <p class="blue_text text-center pd_bt">{{$t('WarrantyPayment.sendphone')}}</p>
            <span slot="footer" class="dialog-footer">                
                <el-button @click="dialogVisible2 = false" :plain="true" type="info" class="form-group">NO</el-button>
                <el-button type="info" class="form-group">YES</el-button>
            </span>
        </el-dialog>        
        <el-dialog title="" :visible.sync="dialogVisible" size="tiny">
            <h3 class="text-center">{{$t('WarrantyPayment.agreequote')}}</h3>
            <p class="total_cost mr_top2 text-center">{{$t('WarrantyPayment.TotalCost')}} <strong class="Orange_text">€600.00</strong></p>
            <p class="blue_text text-center pd_bt">{{$t('WarrantyPayment.TotalCost')}}€600.00 {{$t('WarrantyPayment.startrepair')}} </p>
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
