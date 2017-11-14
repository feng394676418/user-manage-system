<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <div class="Bread_crumbs">
                <a href="#">{{$t('checkprice.home')}}</a>  >  <a href="#">{{$t('checkprice.FillProductInfo')}}</a>  >  <a href="#">{{$t('checkprice.PriceQuotation')}}</a>
            </div>
            <div class="step_nav mr_top">
                <span>{{$t('checkprice.OutPrices')}}</span>
            </div>
            <el-row class="row-bg" :gutter="30">
                <el-col :md="6">
                    <el-select v-model="productBrand" :placeholder="$t('order.Brands')" @change="getBrdModel">
                        <el-option v-for="item in brandList" :key="item.code" :label="item.enname" :value="item.code"></el-option>
                    </el-select>
                </el-col>
                <el-col :md="18">
                    <el-select v-model="productModel" :placeholder="$t('order.Modelinfo')" @change="selectModel">
                        <el-option v-for="item in models" :key="item.model" :label="item.model" :value="item.model+'-'+item.partsdetailprice"></el-option>
                    </el-select>
                </el-col>
            </el-row>
            <div class="form-group mr_top2" v-show="showPrice">
                <label for="" class="pro_price">
                    {{model}} <span>{{$t('checkprice.ServicePriceList')}}:</span></label>
            </div>
            <el-table :data="priceData" style="width: 100%" v-show="showPrice">
                <el-table-column prop="Screen" :label="$t('checkprice.Screen')" min-width="17%">
                </el-table-column>
                <el-table-column prop="Motherboard" :label="$t('checkprice.Motherboard')" min-width="17%">
                </el-table-column>
                <el-table-column prop="rearcamera" :label="$t('checkprice.RearCamera')" min-width="17%">
                </el-table-column>
                <el-table-column prop="Frontcamera" :label="$t('checkprice.Numbersonly')" min-width="17%">
                </el-table-column>
                <el-table-column prop="battery" :label="$t('checkprice.Battery')" min-width="16%">
                </el-table-column>
                <el-table-column prop="shell" :label="$t('checkprice.OuterCasing')" min-width="16%">
                </el-table-column>
            </el-table>
            <div class="mr_top2">
                <label for="">
                    {{$t('checkprice.PriceListNote')}}:</label>
                <p class="blue_text pd_tb">
                    1. {{$t('checkprice.referenceonly')}}<br/> 2. {{$t('checkprice.ServiceCharges')}}
                </p>
            </div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="level" :label="$t('checkprice.ServiceLevel')" min-width="12%">
                </el-table-column>
                <el-table-column prop="Content" :label="$t('checkprice.ServiceContents')" min-width="28%">
                </el-table-column>
                <el-table-column prop="project" :label="$t('checkprice.ServiceDetails')" min-width="46%">
                </el-table-column>
                <el-table-column prop="charge" :label="$t('checkprice.ServiceCharge')" min-width="14%">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import logintop from './logintop'
import { brandList } from '@/api/apply'
import { getBrdRepairPriceByCode } from '@/api/BrdRepairPrice'
export default {
    components: { logintop },
    data() {
        return {
            brandList: [],
            productBrand: '',
            productModel: '',
            models: [],
            model: '',
            showPrice: false,
            tableData: [{
                level: this.$t('checkprice.Level0'),
                // 0级维修
                Content: this.$t('checkprice.Diagnostics'),
                // 故障检测，软件升级，配件更换
                project: this.$t('checkprice.PowerCableAdaptor'),
                // 故障检测，软件升级，配件更换（数据线或适配器）
                charge: this.$t('checkprice.four')
                // 4-7欧元
            }, {
                level: this.$t('checkprice.Level1'),
                // 1级维修
                Content: this.$t('checkprice.DisassembleRepair'),
                // 拆机维修：机械零部件更换
                project: this.$t('checkprice.Partsinclude'),
                // 机械零部件包括但不限于前壳组件、后壳组件、内置电池、TP组件、显示模组、听筒、扬声器、麦克风、振动器、摄像头、RF连接线、内置天线、按键、FPC等
                charge: this.$t('checkprice.eight')
                // 8-11欧元
            }, {
                level: this.$t('checkprice.Level2'),
                // 2级维修
                Content: this.$t('checkprice.ConnectorReplacement'),
                // 拆机维修：接口类期间更换
                project: this.$t('checkprice.Connectorsinclude'),
                // 接口类包括但不限于电池连接器、耳机连接器、IO连接器、SIM卡座、Flash卡座等
                charge: this.$t('checkprice.twelve')
                // 12-15欧元
            }],
            priceData: []
        }
    },
    created() {
        this.getBrandList()
    },
    methods: {
         // 品牌列表获取
        getBrandList() {
            brandList().then(response => {
                if (response.data.status === '0') {
                    this.brandList = response.data.data
                } else {
                    this.$message.error(response.data.message)
                }
            })
        },
        getBrdModel(val) {
            this.getBrdRepairPriceByCode(val)
        },
        getBrdRepairPriceByCode(code) {
            getBrdRepairPriceByCode(code).then(response => {
                if (response.data.status === '0') {
                    this.models = response.data.data
                } else {
                    this.$message.error(response.data.message)
                }
            })
        },
        selectModel(val) {
            let tmpArr = val.split('-')
            console.dir(tmpArr)
            this.model = tmpArr[0]
            let priceArr = tmpArr[1].split(',')

            this.priceData = []
            let price = {}
            price.Screen = priceArr[0]
            price.Motherboard = priceArr[1]
            price.rearcamera = priceArr[2]
            price.Frontcamera = priceArr[3]
            price.battery = priceArr[4]
            price.shell = priceArr[5]
            this.priceData.push(price)

            this.showPrice = true
        }
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
