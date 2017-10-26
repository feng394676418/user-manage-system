<template>
         <div>
            <p class="blue_text pd_tb">
                提示：此寄件地址会用做寄回地址，以下内容需填写真实有效信息以防包裹丢失。“*”为必填内容。
            </p>
            <div class="form-group">
                <label for="">
                    <b>*</b>IMEI:{{userOrderInfoChild.IMEI}}</label>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-row class="row-bg" :gutter="30">
                    <el-col :md="6">
                        <el-form-item label="" prop="country">
                            <el-select placeholder="*国家" size="small" filterable v-model="countryTmp" @change="countryChange">
                                <el-option v-for="country in countryList" :label="country.name" :key="country.sortname" :value="country.name + '-' + country.sortname + '-' +country.id">
                                  {{country.name}}</el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="province">
                            <el-select v-model="provinceTmp" placeholder="州" @change="stateChange">
                                <el-option v-for="province in stateList" :label="province.name" :key="province.name" :value="province.name + '-' + province.id + '-' + province.sortname"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="city">
                            <el-select v-model="ruleForm.city" filterable allow-create placeholder="*城市">
                                <el-option v-for="city in cityList" :label="city.name" :key="city.name" :value="city.name"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="postCode">
                            <el-input v-model="ruleForm.postCode" placeholder="*邮编"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="" prop="addressDetail">
                    <el-input v-model="ruleForm.addressDetail" placeholder="*详细地址"></el-input>
                </el-form-item>
                <div class="form-group">
                    <label for="">
                        <b>*</b>联系方式：</label>
                </div>
                <el-row class="row-bg" :gutter="30">
                    <el-col :md="6">
                        <el-form-item label="" prop="userName">
                            <el-input v-model="ruleForm.userName" placeholder="*姓名"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="phone">
                            <el-input v-model="ruleForm.phone" placeholder="*手机"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="12">
                        <el-form-item label="" prop="email">
                            <el-input v-model="ruleForm.email" placeholder="*电子邮箱"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="form-group mr_top2">
                    <label for="">
                        <b>*</b>相关联系人：</label>
                </div>
                <el-row class="row-bg" :gutter="30">
                    <el-col :md="6">
                        <el-form-item label="" prop="emergencyName">
                            <el-input v-model="ruleForm.emergencyName" placeholder="*姓名"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="emergencyPhone">
                            <el-input v-model="ruleForm.emergencyPhone" placeholder="*手机"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="form-group mr_top2">
                    <label for="">
                        <b>*</b>服务网点:</label>
                </div>
                <template v-if="providerList.length > 0">
                <el-table :data="providerList" style="width: 100%">
                    <el-table-column prop="providerCode" label="" min-width="5%">
                        <template scope="scope">
                            <input name="radio" type="radio" @click="clickRadio(scope.row.providerCode)"></input>
                        </template>
                    </el-table-column>
                    <el-table-column prop="providerName" label="网点" min-width="15%">
                    </el-table-column>
                    <el-table-column prop="address" label="地址" min-width="40%">
                    </el-table-column>
                    <el-table-column prop="postCode" label="邮编" min-width="10%">
                    </el-table-column>
                    <el-table-column prop="phone" label="电话" min-width="15%">
                    </el-table-column>
                    <el-table-column prop="email" label="联系人" min-width="15%">
                    </el-table-column>
                </el-table>
                </template>
                <template v-else>
                <div class="not_in_area yellow_text">
                    对不起，您选择的城市不在我们的服务区域内!
                </div>
                </template>
                <el-form-item class="pull-right mr_top">
                    <el-button :plain="true" type="info" @click="lastStep()">上一步</el-button>
                    <el-button type="info" @click="submitForm('ruleForm')">提交申请</el-button>
                </el-form-item>

            </el-form>
        </div>
</template>
<script>
import { country, stateInfo, cityInfo } from '@/api/countryInfo'
import { getProviderList } from '@/api/provider'

export default {
    props: { // 父组件传递信息
      userOrderInfoChild: {}
    },
    data () {
        return {
            radio: '0',
            countryList: [], // 国家list
            stateList: [], // 省州list
            cityList: [], // 城市list
            providerList: [], // 服务商list
            countryTmp: '',
            provinceTmp: '',
            cityTmp: '',
            ruleForm: {
                productBrand: '', // 品牌
                IMEI: '', // IMEI号码
                productName: '', // 产品名称
                owner: '', // 货主CODE
                providerCode: '', // 服务商CODE
                providerAddress: '', // 客户寄件地址 服务商地址
                expressCode: 'UPS', // 运输方式CODE 客户系统一时固定UPS
                productType: '', // 产品型号
                deadDate: '', // 保修期限
                repairStatus: '', // 保修类型 手机进水等等
                serviceType: '', // 服务类型 0:保内维修 1:保外维修
                troubleInfo: '', // 故障描述
                photoGroup: '', // 上传图片组
                addressDetail: '',
                country: '',
                countryCode: '', // 国家二字码
                province: '',
                provinceCode: '', // 省州二字码
                city: '',
                postCode: '',
                userName: '',
                phone: '',
                email: '',
                emergencyName: '',
                emergencyPhone: ''
            },
            rules: {
                addressDetail: [
                    { required: true, message: '详细地址不能为空', trigger: 'blur' }
                ],
                postCode: [
                    { required: true, message: '邮编不能为空', trigger: 'blur' }
                ],
                userName: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '手机不能为空', trigger: 'blur' }
                ],
                emergencyName: [
                    { required: true, message: '相关联系人姓名不能为空', trigger: 'blur' }
                ],
                emergencyPhone: [
                    { required: true, message: '相关联系人手机不能为空', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                ],
                country: [
                    { required: true, message: '请选择国家', trigger: 'change' }
                ],
                city: [
                    { required: true, message: '请选择城市', trigger: 'change' }
                ]
            }
        }
    },
    created() {
      this.countryAll()
    },
    methods: {
        clickRadio(val) {
          this.ruleForm.providerCode = ''
          this.providerList.forEach(item => {
            if (item.providerCode === val) {
              this.ruleForm.providerCode = val
              this.ruleForm.providerAddress = item.address
            } else {
              // doNothing
            }
          })
        },
        countryAll() {
          // 获取国家所有信息
            country().then(response => {
              console.log('----------country-response--------------')
              console.dir(response)
              if (response.data.status === '0') {
                this.countryList = response.data.rsltData
              } else {
                this.$message.error('国家列表获取失败!')
              }
            })
        },
        stateInfo(cid) {
          // 根据国家ID获取州信息
          stateInfo(cid).then(response => {
            console.log('-----------state-response------------------')
            console.dir(response)
            if (response.data.status === '0') {
              this.stateList = response.data.rsltData
            } else {
              this.$message.error('省州列表获取失败!')
            }
          })
        },
        cityInfo(pid) {
          cityInfo(pid).then(response => {
            console.log('-----------city-response------------------')
            console.dir(response)
            if (response.data.status === '0') {
              console.log('城市列表获取------')
              this.cityList = response.data.rsltData
              console.dir(this.cityList)
            } else {
              this.$message.error('城市列表获取失败!')
            }
          })
        },
        stateChange(val) {
          console.log('省州选定--------')
          console.dir(val)
          this.ruleForm.province = val.split('-')[0]
          let provinceId = val.split('-')[1]
          this.ruleForm.provinceCode = val.split('-')[2] === 'undefined' ? '' : val.split('-')[2]
          console.dir(this.ruleForm)
          // 城市信息获取
          this.cityInfo(provinceId)
        },
        countryChange(val) {
          console.log('-------国家选定--------')
          console.dir(val)
          this.ruleForm.owner = this.userOrderInfoChild.owner
          this.ruleForm.country = val.split('-')[0]
          this.ruleForm.countryCode = val.split('-')[1]
          let countryId = val.split('-')[2]
          console.log(countryId)
          console.dir(this.ruleForm)
          this.stateInfo(countryId)
          // 根据国家二字码确定服务网点&货主CODE获取服务网点信息
          console.log('服务商列表获取====》' + this.ruleForm.owner + this.ruleForm.countryCode)
          getProviderList(this.ruleForm.owner, this.ruleForm.countryCode).then(response => {
            if (response.data.status === '0') {
              this.providerList = response.data.data
            } else {
              this.$message.error('服务商列表获取失败!')
            }
          })
        },
        lastStep() {
            // 父组件传递数据回传
            console.log('子组件中父组件传递过来数据再回传---userOrderInfoChild---')
            console.dir(this.userOrderInfoChild)
            this.$emit('user-order-info-back', this.userOrderInfoChild)
            // this.$router.push('/ApplyAss')
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                  // 表单提交
                  this.ruleForm.productBrand = this.userOrderInfoChild.productBrand
                  this.ruleForm.IMEI = this.userOrderInfoChild.IMEI
                  this.ruleForm.productName = this.userOrderInfoChild.productName
                  this.ruleForm.productType = this.userOrderInfoChild.productType
                  this.ruleForm.deadDate = this.userOrderInfoChild.deadDate
                  this.ruleForm.repairStatus = this.userOrderInfoChild.repairStatus
                  this.ruleForm.serviceType = this.userOrderInfoChild.serviceType
                  this.ruleForm.troubleInfo = this.userOrderInfoChild.troubleInfo
                  this.ruleForm.photoGroup = this.userOrderInfoChild.photogroup
                  console.log('表单提交------form信息')
                  console.dir(this.ruleForm)
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
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

.el-button {
    width: 236px;
}
</style>
