<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <step></step>
            <stepnav></stepnav>
            <h2 class="text-center generate_title">{{$t('login.OrderNumber')}}
                <span class="sky_blue_text">AS201708290001</span>， {{$t('order.downloadorder')}}</h2>
            <p class="blue_text text-center pd_top">
                 {{$t('order.sentemail')}}
            </p>
            <div class="form-group mr_top2">
                <label for="">
                    <b>*</b> {{$t('order.servicepoint')}}：</label>
            </div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="Outlets" :label="$t('order.Point')" min-width="18%">
                </el-table-column>
                <el-table-column prop="address" :label="$t('order.Address')" min-width="26%">
                </el-table-column>
                <el-table-column prop="Zipcode" :label="$t('order.PostCode')" min-width="9%">
                </el-table-column>
                <el-table-column prop="phone" :label="$t('order.Telephone')" min-width="14%">
                </el-table-column>
                <el-table-column prop="time" :label="$t('order.Workinghour')" min-width="30%">
                </el-table-column>
            </el-table>
            <div class="row mr_top">
                <div class="col-md-8">
                    <!-- 图片形式 -->
                    <!-- <img src="../../../static/img/pdf.png" /> -->
                    <!-- Pdf形式 -->
                    <embed src="../../../static/img/CS6.pdf" width="600px" height="800px" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="pull-right">
                        <el-button type="info">Download</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logintop from './logintop'
import step from './step'
import stepnav from './stepnav'
export default {
    components: { logintop, step, stepnav },
    data () {
        return {
            tableData: [{
                Outlets: 'UPS法国南希东大街网点',
                address: '法国一二三四城市喜喜喜喜大道250号',
                Zipcode: '123433',
                phone: '1234312265453',
                time: '9a.m.-5p.m.  周一-周五10a.m.-3p.m.  周六周日休息'
            }]
        }
    },
    methods: {
    }
}
</script>
<style scoped>
@import '/static/css/bootstrap.min.css';
@import '/static/css/demo.css';
@import '/static/css/reset.css';
@import '/static/css/style.css';
@import '/static/css/style-responsive.css';
</style>
<style type="text/css">
.icon {
    /* 通过设置 font-size 来改变图标大小 */
    width: 1em;
    height: 1em;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -0.15em;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: currentColor;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
             normalize.css 中也包含这行 */
    overflow: hidden;
}

.el-button {
    width: 236px;
    height: 48px;
}
</style>
