<template>
    <div>

        <p class="blue_text pd_tb">
            {{$t('order.addressrequired')}}
        </p>
        <div class="form-group">
            <label for="">
                <b>*</b>{{$t('WarrantyPayment.DeliveryAddress')}}</label>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
            <el-row class="row-bg" :gutter="30">
                <el-col :md="6">
                    <el-form-item label="" prop="country">
                        <el-select :placeholder="$t('order.Country')" size="small" filterable v-model="countryTmp" @change="countryChange">
                            <el-option v-for="country in countryList" :label="country.name" :key="country.sortname" :value="country.name + '-' + country.sortname + '-' +country.id">
                                {{country.name}}</el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :md="6">
                    <el-form-item label="" prop="province">
                        <el-select v-model="provinceTmp" :placeholder="$t('order.County')" filterable @change="stateChange">
                            <el-option v-for="province in stateList" :label="province.name" :key="province.name" :value="province.name + '-' + province.id + '-' + province.sortname"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :md="6">
                    <el-form-item label="" prop="city">
                        <el-select v-model="ruleForm.city" filterable allow-create :placeholder="$t('order.City')" @change="cityChange">
                            <el-option v-for="city in cityList" :label="city.name" :key="city.name" :value="city.name"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :md="6">
                    <el-form-item label="" prop="postCode">
                        <el-input v-model="ruleForm.postCode" :placeholder="$t('order.PostCode')"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="" prop="addressDetail">
                <el-input v-model="ruleForm.addressDetail" :placeholder="$t('order.DetailedAddress')" :maxlength="600" :minlength="3"></el-input>
            </el-form-item>
            <div class="form-group">
                <label for="">
                    <b>*</b> {{$t('order.ContactInfo')}}：</label>
            </div>
            <el-row class="row-bg" :gutter="30">
                <el-col :md="6">
                    <el-form-item label="" prop="userName">
                        <el-input v-model="ruleForm.userName" :placeholder="$t('order.Fullname')"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="6">
                    <el-form-item label="" prop="phone">
                        <el-input v-model="ruleForm.phone" :maxlength="15" :placeholder="$t('login.MobileNumber')"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="12">
                    <el-form-item label="" prop="email">
                        <el-input v-model="ruleForm.email" :placeholder="$t('order.Email')"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="form-group mr_top2">
                <label for="">
                    {{$t('order.Alternativecontact')}}：</label>
            </div>
            <el-row class="row-bg" :gutter="30">
                <el-col :md="6">
                    <el-form-item label="" prop="emergencyName">
                        <el-input v-model="ruleForm.emergencyName" :placeholder="$t('order.Fullname')"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="6">
                    <el-form-item label="" prop="emergencyPhone">
                        <el-input v-model="ruleForm.emergencyPhone" :placeholder="$t('login.MobileNumber')"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="form-group mr_top2">
                <label for="">
                    <b>*</b> {{$t('order.ServicePoint')}}:</label>
            </div>
            <template v-if="providerList.length > 0">
                <el-table :data="providerList" style="width: 100%">
                    <el-table-column prop="providerCode" label="" min-width="15%">
                        <template scope="scope">
                            <input name="radio" :checked="ruleForm.providerCode===scope.row.providerCode" type="radio" @click="clickRadio(scope.row.providerCode)"></input>
                        </template>
                    </el-table-column>
                    <el-table-column prop="providerName" :label="$t('order.Point')" min-width="15%">
                    </el-table-column>
                    <el-table-column prop="address" :label="$t('order.Address')" min-width="25%">
                    </el-table-column>
                    <el-table-column prop="postCode" :label="$t('order.PostCode')" min-width="10%">
                    </el-table-column>
                    <el-table-column prop="phone" :label="$t('order.Telephone')" min-width="15%">
                    </el-table-column>
                    <el-table-column prop="email" :label="$t('order.Contactperson')" min-width="15%">
                    </el-table-column>
                </el-table>
            </template>
            <template v-else>
                <div class="not_in_area yellow_text">
                    {{$t('order.citynotinthearea')}}
                </div>
            </template>
            <el-form-item class="pull-right mr_top">
                <el-button class="btn-info btn-infoh" :plain="true" type="info" @click="lastStep()">{{$t('order.Back')}}</el-button>
                <el-button class="btn-info btn-infoh" ref="btnSubmit" type="info" @click="submitForm('ruleForm')">{{$t('order.Submit')}}</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>
<script>
import { country, stateInfo, cityInfo } from '@/api/countryInfo'
import { getProviderList } from '@/api/provider'
import { orderCreate } from '@/api/order'

export default {
    props: { // 父组件传递信息
        userOrderInfoChild: {}
    },
    data() {
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
                expressCode: 'REPLUPS_S', // 运输方式CODE 客户系统一时固定UPS
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
                    { required: true, message: this.$t('order.Detailedaddrequired'), trigger: 'blur' }// 详细地址不能为空
                ],
                postCode: [
                    { required: true, message: this.$t('order.Coderequired'), trigger: 'blur' }// 邮编不能为空
                ],
                userName: [
                    { required: true, message: this.$t('order.FullNamerequired'), trigger: 'blur' }// 姓名不能为空
                ],
                phone: [
                    { required: true, message: this.$t('login.Mobilerequired'), trigger: 'blur' }// 手机不能为空
                ],
                // emergencyName: [
                //     { required: true, message: this.$t('order.FullNamerequired'), trigger: 'blur' }// 相关联系人姓名不能为空
                // ],
                // emergencyPhone: [
                //     { required: true, message: this.$t('login.Mobilerequired'), trigger: 'blur' }// 相关联系人手机不能为空
                // ],
                email: [
                    { required: true, message: this.$t('order.Emailrequired'), trigger: 'blur' },
                    // 邮箱不能为空
                    { type: 'email', message: this.$t('order.correctemailadd'), trigger: 'blur,change' }// 请输入正确的邮箱地址
                ],
                country: [
                    { required: true, message: this.$t('order.SelectCountry'), trigger: 'change' }// 请选择国家
                ],
                city: [
                    { required: true, message: this.$t('order.SelectCity'), trigger: 'change' }// 请选择城市
                ]
            }
        }
    },
    created() {
        this.countryAll()
        // console.dir('999999999999999999999')
        // console.dir(this.userOrderInfoChild)
        if (this.userOrderInfoChild.ruleForm !== undefined && this.userOrderInfoChild.ruleForm !== null) {
          this.ruleForm = this.userOrderInfoChild.ruleForm
          this.countryTmp = this.ruleForm.country
          this.provinceTmp = this.ruleForm.province
          // console.dir('_____________________  this.ruleForm  __________________')
          // console.dir(this.ruleForm)
          this.cityChange()
        }
    },
    methods: {
        clickRadio(val) {
            // console.dir(val)
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
                // console.log('----------country-response--------------')
                // console.dir(response)
                if (response.data.status === '0') {
                    this.countryList = response.data.rsltData
                } else {
                    this.$message.error(this.$t('order.Statelistfailed'))// 国家列表获取失败!
                }
            })
        },
        stateInfo(cid) {
            // 根据国家ID获取州信息
            stateInfo(cid).then(response => {
                // console.log('-----------state-response------------------')
                // console.dir(response)
                if (response.data.status === '0') {
                    this.stateList = response.data.rsltData
                } else {
                    this.$message.error(this.$t('order.Provincialfailed'))// 省州列表获取失败!
                }
            })
        },
        cityInfo(pid) {
            cityInfo(pid).then(response => {
                // console.log('-----------city-response------------------')
                // console.dir(response)
                if (response.data.status === '0') {
                    // console.log('城市列表获取------')
                    this.cityList = response.data.rsltData
                    // console.dir(this.cityList)
                } else {
                    this.$message.error(this.$t('order.Cityfailed'))// 城市列表获取失败!
                }
            })
        },
        cityChange() {
            // 根据国家二字码确定服务网点&货主CODE获取服务网点信息
            // console.log('服务商列表获取====》' + this.ruleForm.owner + this.ruleForm.countryCode)
            let countryTmpCD = this.ruleForm.countryCode
            // console.log('----countryTmpCD------>' + countryTmpCD)
            if (countryTmpCD === 'undefined' || countryTmpCD === '' || countryTmpCD !== 'PL') {
                // 目前只有波兰有服务点,暂定全部取波兰
                countryTmpCD = 'PL'
            }
            getProviderList(this.ruleForm.owner, countryTmpCD).then(response => {
                if (response.data.status === '0') {
                    this.providerList = response.data.data
                } else {
                    this.$message.error(this.$t('order.Servicefailed'))// 服务商列表获取失败
                }
            })
        },
        stateChange(val) {
            // console.log('省州选定--------')
            // console.dir(val)
            this.ruleForm.province = val.split('-')[0]
            let provinceId = val.split('-')[1]
            this.ruleForm.provinceCode = val.split('-')[2] === 'undefined' ? '' : val.split('-')[2]
            // console.dir(this.ruleForm)
            // 城市信息获取
            this.cityInfo(provinceId)
        },
        countryChange(val) {
            // console.log('-------国家选定--------')
            // console.dir(val)
            this.ruleForm.owner = this.userOrderInfoChild.owner
            this.ruleForm.country = val.split('-')[0]
            this.ruleForm.countryCode = val.split('-')[1]
            let countryId = val.split('-')[2]
            // console.log(countryId)
            // console.dir(this.ruleForm)
            this.stateInfo(countryId)
        },
        lastStep() {
            // 父组件传递数据回传
            // console.log('子组件中父组件传递过来数据再回传---userOrderInfoChild---')
            this.userOrderInfoChild.ruleForm = this.ruleForm
            // console.dir(this.userOrderInfoChild)
            this.$emit('user-order-info-back', this.userOrderInfoChild)
            // this.$ls.set('locatorRuleForm', JSON.stringify(this.ruleForm))
            // this.$router.push('/ApplyAss')
        },
        submitForm(formName) {
          // 路由网点信息删除
          if (this.$ls.get('locatorDataArray') !== null) {
            this.$ls.remove('locatorDataArray')
          }
          // 预报信息删除
          if (this.$ls.get('trackingInfo') !== null) {
            this.$ls.remove('trackingInfo')
          }

            // 防止连续点击两次
            this.$refs.btnSubmit.disabled = true
            setTimeout(() => {
               this.$refs.btnSubmit.disabled = false
            }, 5000)

            this.$refs[formName].validate((valid) => {
                if (this.ruleForm.providerCode === '') {
                    this.$message.error(this.$t('order.selectnetwork'))// 请选择服务网点！
                    return
                }
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
                    // console.log('表单提交------form信息')
                    // console.dir(this.ruleForm)
                    orderCreate(this.ruleForm).then(response => {
                        // console.log('表单提交 response')
                        // console.dir(response)
                        if (response.data.status === '0') {
                            this.$message.info(this.$t('order.createworkorder') + response.data.data)// 工单创建成功,创建工单:
                        //    this.$ls.remove('locatorRuleForm')
                            this.$router.push('/Expressorders/' + response.data.data)
                        } else {
                           // console.log(response.data.message)
                            this.$message.error(this.$t('order.Workorderfailed'))// 工单创建失败!
                        }
                    })
                } else {
                    // console.log('error submit!!')
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

.btn-infoh {
    width: 236px;
    height: 48px;
}
</style>
