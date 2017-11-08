<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <step :status="11" ></step>
            <stepnav :stepNav="stepModel"></stepnav>
            <template v-if="step1">
              <!--维修申请第一步-->
              <apply-f-s @apply-fs-order-info="applyFSOrderInfo" :OrderInfoFS="userOrderInfo"></apply-f-s>
            </template>

            <template v-if="step2">
              <!--维修申请下一步-->
              <apply-s-s @user-order-info-back="applySSOrderInfo" :userOrderInfoChild="userOrderInfo"></apply-s-s>
            </template>
        </div>
    </div>
</template>

<script>
import logintop from './logintop'
import step from './step'
import stepnav from './stepnav'
import applyFS from './applyFS'
import applySS from './applySS'

export default {
    components: { logintop, step, stepnav, applyFS, applySS },
    data () {
        return {
            userOrderInfo: {
              productBrand: '', // 品牌
              owner: '', // 货主CODE
              IMEI: '', // IMEI号码
              productName: '', // 产品名称
              productType: '', // 产品型号
              deadDate: '', // 保修期限
              repairStatus: '', // 保修类型
              serviceType: '', // 服务类型
              troubleInfo: '', // 故障描述
              photogroup: '' // 上传图片组
            },
            stepModel: {
              step: '1'
            },
            step1: true,
            step2: false
        }
    },
    // watch: {
    //   userOrderInfo(val) {
    //     console.log('监视----val')
    //     console.dir(val)
    //   }
    // },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList)
        },
        nextStep() {
           //
        },
        applyFSOrderInfo(OrderInfoFS) {
          console.log('获取子组件applyFS信息')
          console.dir(OrderInfoFS)
          this.step1 = OrderInfoFS.step1
          this.step2 = true
          this.stepModel.step = '2'
          // 数据传递
          this.userOrderInfo.productBrand = OrderInfoFS.productBrand
          this.userOrderInfo.IMEI = OrderInfoFS.IMEI
          this.userOrderInfo.productName = OrderInfoFS.productName
          this.userOrderInfo.owner = OrderInfoFS.owner
          this.userOrderInfo.productType = OrderInfoFS.productType
          this.userOrderInfo.deadDate = OrderInfoFS.deadDate
          this.userOrderInfo.repairStatus = OrderInfoFS.repairStatus
          this.userOrderInfo.serviceType = OrderInfoFS.serviceType
          this.userOrderInfo.troubleInfo = OrderInfoFS.troubleInfo
          this.userOrderInfo.photogroup = OrderInfoFS.photogroup
        },
        applySSOrderInfo(userOrderInfoChildF) { // 机能未启用
          console.log('获取子组件applySS信息')
          console.dir(userOrderInfoChildF)
          this.userOrderInfo = userOrderInfoChildF
          this.step1 = true
          this.step2 = false
          this.stepModel.step = '1'
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

.el-dropdown-link {
    color: #00a0e9;
    font-size: 12px;
    cursor: pointer;
}

.Warranty_type .el-checkbox__label {
    font-weight: normal;
    font-size: 14px;
    color: #666577;
    margin-left: 10px;
}

.el-checkbox {
    width: 100%
}

.checkbox {
    margin-left: 0;
}

.el-button+.el-button {
    margin-left: 0;
}

.btn-primary {
    height: 96px!important;
    font-size: 18px!important;
}

.purple_text:hover {
    color: #7757f6;
}

.el-upload__input {
    display: none!important;
}

.el-upload--picture-card {
    background-color: #f3f6fa!important;
    border: 1px solid #aab0d1!important;
}
</style>
