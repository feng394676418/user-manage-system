<template>
    <div class="TestReportTable">
        <h3>{{$t('WarrantyPayment.DiagnosticReport')}}</h3>
        <div class="table-responsive">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table my_table">
                <tr>
                    <th scope="col">{{$t('WarrantyPayment.CreateTime')}}</th>
                    <th scope="col">{{$t('WarrantyPayment.ServiceType')}}</th>
                    <th scope="col">{{$t('WarrantyPayment.PartsCost')}}</th>
                    <th scope="col">{{$t('ConfirmPayment.ServiceCost')}}</th>
                    <th scope="col">{{$t('ConfirmPayment.DeliveryCost')}}</th>
                    <th scope="col">{{$t('WarrantyPayment.Total')}}</th>
                    <th scope="col">{{$t('WarrantyPayment.CoveredbyWarranty')}}</th>
                    <th scope="col">{{$t('WarrantyPayment.RemaintoPay')}}</th>
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
                        <template v-for="orderParts in checkReportInfo.orderParts">
                            {{orderParts.partename}}€ <strong class="Orange_text">{{orderParts.partcost}}</strong> /
                        </template>
                    <td>{{checkReportInfo.repairLevel}}€ <strong class="Orange_text">{{checkReportInfo.repairCost}}</strong></td>
                    <td>{{$t('checkprice.Sentout')}}€ <strong class="Orange_text">{{checkReportInfo.collectionCost}}</strong> / {{$t('checkprice.Sentback')}}€ <strong class="Orange_text">{{checkReportInfo.mailingcost}}</strong></td>
                    <td>€ <strong class="Orange_text">{{checkReportInfo.allCost}}</strong></td>
                    <td>€ <strong class="Orange_text">
                        <template v-if="checkReportInfo.serviceType==0">
                            {{checkReportInfo.allCost}}
                        </template>
                        <template v-if="checkReportInfo.serviceType==1">
                            0
                        </template></strong></td>
                    <td>€ <strong class="Orange_text">
                        <template v-if="checkReportInfo.serviceType==0">
                            0
                        </template>
                        <template v-if="checkReportInfo.serviceType==1">
                            {{checkReportInfo.allCost}}
                        </template></strong></td>
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