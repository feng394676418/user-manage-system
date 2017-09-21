<template>
    <div class="TestReportTable">
        <h3>检测报告</h3>
        <div class="table-responsive">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table my_table">
                <tr>
                    <th scope="col">创建时间</th>
                    <th scope="col">维修类型</th>
                    <th scope="col">备件费</th>
                    <th scope="col">维修费</th>
                    <th scope="col">快递费</th>
                    <th scope="col">总计</th>
                    <th scope="col">保修覆盖</th>
                    <th scope="col">应付</th>
                </tr>
                <tr>
                    <td>2017/09/09 13:00:00</td>
                    <td>保内</td>
                    <td>屏幕€ <strong class="Orange_text">12</strong> / 后置摄像头€ <strong class="Orange_text">12</strong> / 外壳€ <strong class="Orange_text">12</strong> </td>
                    <td>L2级维修€ <strong class="Orange_text">12</strong></td>
                    <td>寄出€ <strong class="Orange_text">12</strong> / 寄回€ <strong class="Orange_text">12</strong></td>
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