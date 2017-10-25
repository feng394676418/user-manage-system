<template>
        <div>
            <div>
                <label>
                    <b>*</b>产品品牌：</label>
            </div>
            <ul class="list_menu">
                <li v-for="item in brandList" :key="item.code" :class="item.className" @click="active(item)">{{item.code}}</li>
                <!-- <li class="active">OnePlus</li> -->
            </ul>
            <div class="clearfix"></div>
            <p class="blue_text pd_tb">
                提示：服务地区仅限欧盟内，保外需要客户承担运费！
            </p>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="">
                        <b>*</b>IMEI:</label>
                    <input class="form-control" id="" placeholder="" type="text" v-model="OrderInfoFS.IMEI" @blur="getImeiInfo()"></input>
                </div>
                <div class="col-md-6 how_check">
                    <a class="purple_text" href="#/ViewIMEI" target="_blank">怎样查看IMEI码？</a>
                </div>
            </div>
            <template v-if="IMEINotExist && IMEIInfoShow">
            <p class="blue_text">
                此IMEI号不存在！请仔细核对。
            </p>
            </template>
            <template v-else-if="!IMEINotExist && IMEIInfoShow" >
            <div class="clearfix"></div>
            <IMEIExists :imeiInfoChild="imeiInfo" @on-time-in-out="timeInOut"></IMEIExists>
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
                    <el-upload
                      name="upFile"
                      ref="upFile"
                      action="api/file/upload"
                      list-type="picture-card"
                      :drag="false"
                      :file-list="phoneImageList"
                      :on-success="uploadSuccess"
                      :on-error="uploadError"
                      :before-upload="beforeAvatarUpload"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove">
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
import moment from 'moment'
import { brandList, getImeiInfo } from '@/api/apply'

export default {
    components: { IMEIExists },
    data () {
        return {
          OrderInfoFS: {
              step1: true, // 第一步
              productBrand: '', // 品牌
              owner: '', // 货主
              IMEI: '', // IMEI号码
              productName: '', // 产品名称
              productType: '', // 产品型号
              deadDate: '', // 保修期限
              repairStatus: '', // 保修类型
              serviceType: '', // 服务类型
              troubleInfo: '', // 故障描述
              imageUrlArray: '' // 上传图片地址
          },
            imeiInfo: {
              imei: '',
              producttype: '',
              deadtime: '',
              productname: '',
              imagesrc: '',
              remark: ''
            },
            IMEIInfoShow: false,
            IMEINotExist: true,
            brandList: [],
            phoneImageList: [],
            phoneImageUrlList: [],
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    created() {
      this.getBrandList()
    },
    methods: {
        timeInOut(functionButtonInfo) {
          console.log('子组件保内保外数据')
          console.dir(functionButtonInfo)
          // 0: 保内维修 1: 保外维修
          this.OrderInfoFS.serviceType = functionButtonInfo.timeIn ? '0' : '1'
          this.OrderInfoFS.repairStatus = functionButtonInfo.checkedRepairOptions.toString()
        },
        beforeAvatarUpload(file) {
            if (this.$refs.upFile.uploadFiles.length >= 3) {
                this.$refs.upFile.disabled = true
            }
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif'
            const isLt5M = file.size / 1024 / 1024 < 5

            const isCanUpload = this.phoneImageUrlList.length < 3
            if (!isCanUpload) {
              this.$message.error('最多可以上传3张图片!')
            }
            if (!isJPG) {
              this.$message.error(this.$t('文件格式不正确!'))
            }
            if (!isLt5M) {
              this.$message.error(this.$t('文件大小需小于2M!'))
            }
            return isJPG && isLt5M && isCanUpload
        },
        uploadSuccess(response, file, fileList) {
          console.log('upload success!')
          console.dir(response)
          if (response.status === '0') {
            this.phoneImageList.push(response)
            this.phoneImageUrlList.push(response.url)
          }
        },
        uploadError(err, file, fileList) {
          console.dir(err)
        },
        handleRemove(file, fileList) {
          console.dir(file)
          this.RemovePhoto(file)
        },
        RemovePhoto(fileItem) {
          let phoneImageListTmp = this.phoneImageList
          let phoneImageUrlListTmp = this.phoneImageUrlList
          this.phoneImageList.forEach((item, index) => {
            if (item.url === fileItem.url) {
                // 删除不要元素
                phoneImageListTmp.splice(index, 1)
            }
          })
          this.phoneImageUrlList.forEach((imageUrl, index) => {
            if (imageUrl === fileItem.url) {
              phoneImageUrlListTmp.splice(index, 1)
            }
          })

          this.phoneImageList = phoneImageListTmp
          this.phoneImageUrlList = phoneImageUrlListTmp

          console.dir(this.phoneImageUrlList)
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url
          this.dialogVisible = true
        },
        getImeiInfo() {
          getImeiInfo(this.OrderInfoFS.IMEI).then(response => {
            if (response.data.status === '0') {
              if (response.data.data === '' || response.data.data === null || response.data.data === 'undefined') {
                // IMEI对应信息不存在
                this.IMEIInfoShow = true
                this.IMEINotExist = true
                this.OrderInfoFS.productName = ''
                this.OrderInfoFS.productType = ''
                this.OrderInfoFS.deadDate = ''
              } else {
                this.IMEIInfoShow = true
                this.IMEINotExist = false
                this.imeiInfo = response.data.data
                this.imeiInfo.deadtime = moment(this.imeiInfo.deadtime).format('YYYY-MM-DD')
                this.OrderInfoFS.productName = this.imeiInfo.productname
                this.OrderInfoFS.productType = this.imeiInfo.producttype
                this.OrderInfoFS.deadDate = this.imeiInfo.deadtime
              }
            } else {
              this.$message.error(response.data.message)
            }
          })
        },
        active(item) {
          item.className = 'active'
          this.OrderInfoFS.productBrand = item.code
          this.OrderInfoFS.owner = item.owner
          // 其他元素式样置空
          this.brandListClassNameCLR(item)
        },
        brandListClassNameCLR(item) {
          this.brandList.forEach(brand => {
            if (brand.code === item.code) {
              // doNothing
            } else {
              brand.className = ''
            }
          })
        },
        // 品牌列表获取
        getBrandList() {
          brandList().then(response => {
            if (response.data.status === '0') {
              this.brandList = response.data.data
              this.brandList.forEach(item => {
                this.$set(item, 'className', '')
              })
              console.dir(this.brandList)
              // 品牌默认设定
              this.brandList[0].className = 'active'
              this.OrderInfoFS.productBrand = this.brandList[0].code
              this.OrderInfoFS.owner = this.brandList[0].owner
            } else {
              this.$message.error(response.data.message)
            }
          })
        },
        nextStep() {
            // 图片地址
            this.OrderInfoFS.imageUrlArray = this.phoneImageUrlList.toString()
            this.OrderInfoFS.step1 = false
            console.log('数据传送给父组件index')
            // 数据传送给父类 双向绑定
            this.$emit('apply-fs-order-info', this.OrderInfoFS)
            // this.$router.push('/Expressinfo')
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
