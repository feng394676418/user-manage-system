<template>
        <div>
            <div>
                <label>
                    <b>*</b>产品品牌：</label>
            </div>
            <ul class="list_menu">
                <li class="active">OnePlus</li>
                <li>OPPO</li>
                <li>vivo</li>
                <li>MI</li>
            </ul>
            <div class="clearfix"></div>
            <p class="blue_text pd_tb">
                提示：服务地区仅限欧盟内，保外需要客户承担运费！
            </p>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="">
                        <b>*</b>IMEI:</label>
                    <input class="form-control" id="" placeholder="" type="text" v-model="OrderInfoFS.IMEI"></input>
                </div>
                <div class="col-md-6 how_check">
                    <a class="purple_text" href="#/ViewIMEI">怎样查看IMEI码？</a>
                </div>
            </div>
            <template v-if="IMEINotExist && IMEIInfoShow">
            <p class="blue_text">
                此IMEI号不存在！请仔细核对。
            </p>
            </template>
            <template v-else-if="!IMEINotExist && IMEIInfoShow" >
            <div class="clearfix"></div>
            <IMEIExists></IMEIExists>
            </template>
            <div class="row mr_top">
                <div class="form-group col-md-12">
                    <label for="">
                        <b>*</b>故障描述:</label>
                    <textarea class="form-control" id="" placeholder="" rows="3" type="text" v-model="OrderInfoFS.troubleInfo"></textarea>
                </div>
            </div>
            <div class="row mr_top">
                <div class="form-group col-md-12">
                    <label for="">
                        <b>*</b>上传图片:</label>
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"  :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-12">
                    <div class="pull-right">
                        <el-button type="info" class="next_step mr_top" @click="nextStep()">下一步</el-button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import IMEIExists from './IMEIExists'
import { brandList } from '@/api/apply'

export default {
    components: { IMEIExists },
    data () {
        return {
          OrderInfoFS: {
              productBrand: '', // 品牌
              IMEI: '', // IMEI号码
              productName: '', // 产品名称
              productType: '', // 产品型号
              deadDate: '', // 保修期限
              repairStatus: [], // 保修类型
              serviceType: '', // 服务类型
              troubleInfo: '' // 故障描述
          },
            IMEIInfoShow: false,
            IMEINotExist: true,
            brandList: []
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
              console.log('ddddddddddddddddddddddddddd')
              console.dir(this.brandList)
            }
          })
        },
        handleRemove(file, fileList) {
            console.log(file, fileList)
        },
        nextStep() {
            this.$router.push('/Expressinfo')
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

.el-checkbox+.el-checkbox {
    margin-left: 0;
}

.el-button+.el-button {
    margin-left: 0;
}

.el-button--primary {
    height: 96px;
    font-size: 18px;
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
