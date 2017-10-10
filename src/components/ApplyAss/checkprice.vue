<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <div class="Bread_crumbs">
                <a href="#">首页</a>  >  <a href="#">填写产品信息</a>  >  <a href="#">价格查询</a>
            </div>
            <div class="step_nav mr_top">
                <span>保外维修参考价格查询</span>
            </div>
            <el-row class="row-bg" :gutter="30">
                <el-col :md="6">
                    <el-select v-model="value" placeholder="品牌">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-col>
                <el-col :md="18">
                    <el-select v-model="value2" placeholder="型号">
                        <el-option v-for="item in model" :key="item.value2" :label="item.label" :value="item.value2"></el-option>
                    </el-select>
                </el-col>
            </el-row>
            <div class="form-group mr_top2">
                <label for="" class="pro_price">
                    OnePlus 5 64G <span>的保外维修常用备件参考价:</span></label>
            </div>
            <el-table :data="tableData2" style="width: 100%">
                <el-table-column prop="Screen" label="屏幕组件" min-width="17%">
                </el-table-column>
                <el-table-column prop="Motherboard" label="主板" min-width="17%">
                </el-table-column>
                <el-table-column prop="rearcamera" label="后置摄像头" min-width="17%">
                </el-table-column>
                <el-table-column prop="Frontcamera" label="前置摄像头" min-width="17%">
                </el-table-column>
                <el-table-column prop="battery" label="电池" min-width="16%">
                </el-table-column>
                <el-table-column prop="shell" label="外壳" min-width="16%">
                </el-table-column>                
            </el-table>
            <div class="mr_top2">
                <label for="">
                    收费说明:</label>
                <p class="blue_text pd_tb">
                    1. 以上查询结果为维修配件参考价。无法查询的维修配件价格，请咨询售后服务中心。<br/> 2. 非保维修收费=往来快递费用+维修配件价+服务费，服务费收费标准如下：
                </p>
            </div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="level" label="维修级别" min-width="10%">
                </el-table-column>
                <el-table-column prop="Content" label="服务内容" min-width="28%">
                </el-table-column>
                <el-table-column prop="project" label="维修项目" min-width="48%">
                </el-table-column>
                <el-table-column prop="charge" label="服务费" min-width="14%">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import logintop from './logintop'
export default {
    components: { logintop },
    data() {
        return {
            options: [{
                value: '1',
                label: 'OnePlus'
            }, {
                value: '2',
                label: 'OPPO'
            }],
            value: '',
            model: [{
                value2: '1',
                label: 'OnePlus+T1'
            }, {
                value2: '2',
                label: 'OnePlus+T3'
            }],
            value2: '',
            tableData: [{
                level: '0级维修',
                Content: '故障检测，软件升级，配件更换',
                project: '故障检测，软件升级，配件更换（数据线或适配器）',
                charge: '4-7欧元'
            }, {
                level: '1级维修',
                Content: '拆机维修：机械零部件更换',
                project: '机械零部件包括但不限于前壳组件、后壳组件、内置电池、TP组件、显示模组、听筒、扬声器、麦克风、振动器、摄像头、RF连接线、内置天线、按键、FPC等',
                charge: '8-11欧元'
            }, {
                level: '2级维修',
                Content: '拆机维修：接口类期间更换',
                project: '接口类包括但不限于电池连接器、耳机连接器、IO连接器、SIM卡座、Flash卡座等',
                charge: '12-15欧元'
            }],
            tableData2: [{
                Screen: '€12',
                Motherboard: '€12',
                rearcamera: '€12',
                Frontcamera: '€12',
                battery: '€12',
                shell: '€12'
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

.el-select {
    display: block;
}
</style>
