<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="pull-right mr_top">
                    <!--放弃维修-->
                    <el-button :plain="true" type="info" class="btn-info form-group"  @click="dialogVisible2 = true">{{$t('WarrantyPayment.notrepair')}}</el-button>
                    <!--同意报价-->
                    <el-button type="info"  class="btn-info form-group" @click="dialogVisible = true">{{$t('WarrantyPayment.Continue')}}</el-button>
                </div>
            </div>
        </div>
        <!--放弃维修弹出框-->
        <el-dialog title="" :visible.sync="dialogVisible2" size="tiny" class="mydialog-footer">
            <h3 class="text-center">{{$t('WarrantyPayment.surenotrepair')}}</h3>
            <!-- 增值税23% TOOD 税率维护-->
            <p class="total_cost mr_top2 text-center">{{$t('WarrantyPayment.Deliverytotal')}} <strong class="Orange_text">€{{(checkReportInfo.collectionCost + checkReportInfo.mailingcost) + (checkReportInfo.collectionCost + checkReportInfo.mailingcost) * 0.23 | money}}</strong></p>
            <p class="blue_text text-center pd_bt">{{$t('WarrantyPayment.sendphone')}}</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false" :plain="true" type="info" class="btn-info form-group">NO</el-button>
                <el-button ref="btnsubmit_no" type="info" class="btn-info form-group" @click="repair(false)">YES</el-button>
            </span>
        </el-dialog>
        <!--同意报价弹出框-->
        <el-dialog title="" :visible.sync="dialogVisible" size="tiny" class="mydialog-footer">
            <h3 class="text-center">{{$t('WarrantyPayment.agreequote')}}</h3>
            <p class="total_cost mr_top2 text-center">{{$t('WarrantyPayment.TotalCost')}} <strong class="Orange_text">€{{checkReportInfo.remaintoPay | money}}</strong></p>
            <p class="blue_text text-center pd_bt">{{$t('WarrantyPayment.startrepair')}} </p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" :plain="true" type="info" class="form-group btn-info">NO</el-button>
                <el-button ref="btnsubmit_yes" type="info" class="form-group btn-info" @click="repair(true)" v-loading.fullscreen.lock="fullscreenLoading">YES</el-button>
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
            fullscreenLoading: false,
            dialogVisible: false,
            dialogVisible2: false
        }
    },
    filters: {
        money(val) {
            val = val.toString().replace(/\$|,/g, '')
            if (isNaN(val)) {
            val = '0'
            }
            const sign = val === (val = Math.abs(val))
            val = Math.floor(val * 100 + 0.50000000001)
            let cents = val % 100
            val = Math.floor(val / 100).toString()
            if (cents < 10) {
            cents = '0' + cents
            }
            for (let i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
                val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3))
            }

            return sign ? '' : val + '.' + cents
            }
    },
    methods: {
        repair(isRepair) {
            //  isRepair 是否继续维修  true  false
            if (isRepair) {
                this.fullscreenLoading = true
                // 同意报价维修  防止连续点击两次
                this.$refs.btnsubmit_yes.disabled = true
                setTimeout(() => {
                    this.$refs.btnsubmit_yes.disabled = false
                }, 20000)

                // 同意报价 全价付款(保外)
                confirmQuotes(this.checkReportInfo.orderNunber).then(response => {
                        console.dir('##############   confirmQuotes   ###############')
                        console.dir(response)
                        this.$router.push('/ConfirmPayment/' + this.checkReportInfo.orderNunber + '/' + isRepair)
                })
            } else {
                this.fullscreenLoading = true
                // 拒绝报价放弃维修 防止连续点击两次
                this.$refs.btnsubmit_no.disabled = true
                setTimeout(() => {
                    this.$refs.btnsubmit_no.disabled = false
                }, 20000)

                // 不同意报价 邮寄(收件+寄件)费用付款(保外)
                notRepair(this.checkReportInfo.orderNunber).then(response => {
                        console.log('############   notRepair  #################')
                        console.dir(response)
                        this.$router.push('/ConfirmPayment/' + this.checkReportInfo.orderNunber + '/' + isRepair)
                })
            }
        }
    }
}
</script>
<style>
.mydialog-footer .el-dialog__footer {
  text-align: center !important;
}
.mydialog-footer .btn-info{
  margin-bottom: 15px;
}
.el-dialog__body {
  padding: 0 50px 30px 50px;
  font-size: 12px;
}
.el-dialog__headerbtn:focus .el-dialog__close,
.el-dialog__headerbtn:hover .el-dialog__close {
  color: #eb6100;
}
.el-dialog__footer {
  padding: 10px 50px 48px 50px;
}
.total_cost {
  font-size: 14px;
  color: #666577;
  margin-bottom: 5px;
}
.el-dialog--tiny {
  width: auto;
}

</style>
