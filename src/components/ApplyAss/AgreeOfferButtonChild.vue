<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="pull-right mr_top">
                    <!--放弃维修-->
                    <el-button :plain="true" type="info" class="form-group"  @click="dialogVisible2 = true">{{$t('WarrantyPayment.notrepair')}}</el-button>
                    <!--同意报价-->
                    <el-button type="info"  class="form-group" @click="dialogVisible = true">{{$t('WarrantyPayment.Continue')}}</el-button>
                </div>
            </div>
        </div>
        <!--放弃维修弹出框-->
        <el-dialog title="" :visible.sync="dialogVisible2" size="tiny">
            <h3 class="text-center">{{$t('WarrantyPayment.surenotrepair')}}</h3>
            <p class="total_cost mr_top2 text-center">{{$t('WarrantyPayment.Deliverytotal')}} <strong class="Orange_text">€{{checkReportInfo.collectionCost + checkReportInfo.mailingcost}}</strong></p>
            <p class="blue_text text-center pd_bt">{{$t('WarrantyPayment.sendphone')}}</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false" :plain="true" type="info" class="form-group">NO</el-button>
                <el-button type="info" class="form-group" @click="repair(false)">YES</el-button>
            </span>
        </el-dialog>
        <!--同意报价弹出框-->
        <el-dialog title="" :visible.sync="dialogVisible" size="tiny">
            <h3 class="text-center">{{$t('WarrantyPayment.agreequote')}}</h3>
            <p class="total_cost mr_top2 text-center">{{$t('WarrantyPayment.TotalCost')}} <strong class="Orange_text">€{{checkReportInfo.allCost}}</strong></p>
            <p class="blue_text text-center pd_bt">{{$t('WarrantyPayment.TotalCost')}}€{{checkReportInfo.allCost}} {{$t('WarrantyPayment.startrepair')}} </p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" :plain="true" type="info" class="form-group">NO</el-button>
                <el-button type="info" class="form-group" @click="repair(true)">YES</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { confirmQuotes, notRepair } from '@/api/checkReport'
export default {
    props: {
      checkReportInfo: ''
    },
    name: 'hello',
    data () {
        return {
            dialogVisible: false,
            dialogVisible2: false
        }
    },
    methods: {
        repair(isRepair) {
            //  isRepair 是否继续维修  true  false
            if (isRepair) {
                // 同意报价 全价付款(保外)
                confirmQuotes(this.checkReportInfo.orderNunber).then(response => {
                        console.dir('##############   confirmQuotes   ###############')
                        console.dir(response)
                        this.$router.push('/ConfirmPayment/' + this.checkReportInfo.orderNunber + '/' + isRepair)
                })
            } else {
                // 不同意报价 邮寄费用付款(保外)
                notRepair(this.checkReportInfo.orderNunber).then(response => {
                        console.dir('############   notRepair  #################')
                        console.dir(response)
                        this.$router.push('/ConfirmPayment/' + this.checkReportInfo.orderNunber + '/' + isRepair)
                })
            }
        }
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
