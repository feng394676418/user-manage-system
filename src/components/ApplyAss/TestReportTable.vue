<template>
    <div class="TestReportTable">
        <h3>{{$t('WarrantyPayment.DiagnosticReport')}}</h3>
        <div class="table-responsive">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table my_table">
                <tr>
                    <th width="15%" scope="col">{{$t('WarrantyPayment.CreateTime')}}</th>
                    <th width="7%" scope="col">{{$t('WarrantyPayment.ServiceType')}}</th>
                    <th width="15%" scope="col">{{$t('WarrantyPayment.PartsCost')}}</th>
                    <th width="9%" scope="col">{{$t('ConfirmPayment.ServiceCost')}}</th>
                    <th width="17%" scope="col">{{$t('ConfirmPayment.DeliveryCost')}}</th>
                    <th width="8%" scope="col">{{$t('WarrantyPayment.Total')}}</th>
                    <th width="8%" scope="col">{{$t('ConfirmPayment.VAT')}}(23%)</th>
                    <th width="7%" scope="col">{{$t('WarrantyPayment.CoveredbyWarranty')}}</th>
                    <th width="10%" scope="col">{{$t('WarrantyPayment.RemaintoPay')}}</th>
                </tr>
                <tr>
                    <td>{{checkReportInfo.createDate}}</td>
                    <td>
                        <template v-if="checkReportInfo.serviceType==0">
                            {{$t('order.InWarranty')}}
                        </template>
                        <template v-if="checkReportInfo.serviceType==1">
                            {{$t('order.OutofWarranty')}}
                        </template>
                    </td>
                    <!-- <td>{{$t('ConfirmPayment.Screen')}}€ <strong class="Orange_text">12</strong> / {{$t('checkprice.RearCamera')}}€ <strong class="Orange_text">12</strong> / {{$t('checkprice.OuterCasing')}}€ <strong class="Orange_text">12</strong> </td> -->
                    <td>
                        <template v-for="(orderParts, index) in checkReportInfo.orderParts">
                            {{orderParts.partename}}€ <strong class="Orange_text" :key="index">{{orderParts.partcost | money}}</strong>
                            <tag v-if="checkReportInfo.orderParts.length-1 === index" :key="index"></tag>
                            <tag v-else :key="index"> /</tag>
                        </template>
                    <td>{{checkReportInfo.repairLevel}}€ <strong class="Orange_text">{{checkReportInfo.repairCost | money}}</strong></td>
                    <td>{{$t('ConfirmPayment.Sentout')}}€ <strong class="Orange_text">{{checkReportInfo.collectionCost | money}}</strong> / {{$t('ConfirmPayment.Sentback')}}€ <strong class="Orange_text">{{checkReportInfo.mailingcost | money}}</strong></td>
                    <td>€ <strong class="Orange_text">{{checkReportInfo.allCost | money}}</strong></td>
                    <td>€ <strong class="Orange_text">16.56</strong></td>
                    <td>€ <strong class="Orange_text">{{checkReportInfo.coveredbyWarranty | money}}</strong></td>
                    <td>€ <strong class="Orange_text">{{checkReportInfo.remaintoPay | money}}</strong></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      checkReportInfo: ''
    },
    data () {
        return {
            tableData: [{
                time: '2017/09/09 13:00:00',
                model: this.$t('order.InWarranty'),
                // 保内
                parts: '',
                Maintenance: '',
                Courier: '',
                total: '',
                Warranty: '',
                Payables: ''
            }]
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
    created() {

    },
    methods: {
    }
}
</script>
<style type="text/css">
td:nth-last-child(1) strong:last-child{
    font-size:18px;
}
</style>
