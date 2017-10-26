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
                    <td>2017/09/09 13:00:00</td>
                    <td>{{$t('order.InWarranty')}}</td>
                    <td>{{$t('ConfirmPayment.Screen')}}€ <strong class="Orange_text">12</strong> / {{$t('checkprice.RearCamera')}}€ <strong class="Orange_text">12</strong> / {{$t('checkprice.OuterCasing')}}€ <strong class="Orange_text">12</strong> </td>
                    <td>{{$t('checkprice.Level2')}}€ <strong class="Orange_text">12</strong></td>
                    <td>{{$t('checkprice.Sentout')}}€ <strong class="Orange_text">12</strong> / {{$t('checkprice.Sentback')}}€ <strong class="Orange_text">12</strong></td>
                    <td>€ <strong class="Orange_text">72</strong></td>
                    <td>€ <strong class="Orange_text">0</strong></td>
                    <td>€ <strong class="Orange_text">72</strong></td>
                </tr>            
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableData: [{
                time: '2017/09/09 13:00:00',
                model: '保内',
                parts: '',
                Maintenance: '',
                Courier: '',
                total: '',
                Warranty: '',
                Payables: ''
            }]
        }
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