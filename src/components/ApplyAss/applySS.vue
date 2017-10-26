<template>
         <div>
            <p class="blue_text pd_tb">
               {{$t('order.addressrequired')}}
            </p>
            <div class="form-group">
                <label for="">
                    <b>*</b>IMEI:</label>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-row class="row-bg" :gutter="30">
                    <el-col :md="6">
                        <el-form-item label="" prop="country">
                            <el-select v-model="ruleForm.country" :placeholder="$t('order.Country')" size="small">
                                <el-option label="" value="Poland"></el-option>
                                <el-option label="" value="USA"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="State">
                            <el-select v-model="ruleForm.State" :placeholder="$t('order.County')">
                                <el-option label="" value="State"></el-option>
                                <el-option label="" value="State2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="city">
                            <el-select v-model="ruleForm.city" :placeholder="$t('order.City')">
                                <el-option label="" value="shanghai"></el-option>
                                <el-option label="" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="Zipcode">
                            <el-input v-model="ruleForm.Zipcode" :placeholder="$t('order.PostCode')"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="" prop="add">
                    <el-input v-model="ruleForm.add" :placeholder="$t('order.DetailedAddress')"></el-input>
                </el-form-item>
                <div class="form-group">
                    <label for="">
                        <b>*</b> {{$t('order.ContactInfo')}}：</label>
                </div>
                <el-row class="row-bg" :gutter="30">
                    <el-col :md="6">
                        <el-form-item label="" prop="name">
                            <el-input v-model="ruleForm.name" :placeholder="$t('order.Fullname')"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="phone">
                            <el-input v-model="ruleForm.phone" :placeholder="$t('login.MobileNumber')"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="12">
                        <el-form-item label="" prop="email">
                            <el-input v-model="ruleForm.email":placeholder="$t('order.Email')"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="form-group mr_top2">
                    <label for="">
                        <b>*</b> {{$t('order.Alternativecontact')}}：</label>
                </div>
                <el-row class="row-bg" :gutter="30">
                    <el-col :md="6">
                        <el-form-item label="" prop="Relatedname">
                            <el-input v-model="ruleForm.Relatedname" :placeholder="$t('order.Fullname')"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="Relatedphone">
                            <el-input v-model="ruleForm.Relatedphone" :placeholder="$t('login.MobileNumber')"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="form-group mr_top2">
                    <label for="">
                        <b>*</b> {{$t('order.ServicePoint')}}:</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="radio" label="" min-width="5%">
                        <template scope="scope">
                            <input value="radio" name="radio" checked="" type="radio" v-model="radio">
                        </template>
                    </el-table-column>
                    <el-table-column prop="Outlets" :label="$t('order.Point')" min-width="15%">
                    </el-table-column>
                    <el-table-column prop="address" :label="$t('order.Address')" min-width="40%">
                    </el-table-column>
                    <el-table-column prop="Zipcode" :label="$t('order.PostCode')" min-width="10%">
                    </el-table-column>
                    <el-table-column prop="phone" :label="$t('order.Telephone')" min-width="15%">
                    </el-table-column>
                    <el-table-column prop="name" :label="$t('order.Contactperson')" min-width="15%">
                    </el-table-column>
                </el-table>
                <div class="not_in_area yellow_text">
                    {{$t('order.citynotinthearea')}}
                </div>
                <el-form-item class="pull-right mr_top">
                    <el-button :plain="true" type="info" @click="lastStep()">{{$t('order.Back')}}</el-button>
                    <el-button type="info" @click="submitForm('ruleForm')">{{$t('order.Submit')}}</el-button>
                </el-form-item>

            </el-form>
        </div>
</template>
<script>

export default {
    data () {
        return {
            radio: '',
            ruleForm: {
                add: '',
                country: '',
                State: '',
                city: '',
                Zipcode: '',
                name: '',
                phone: '',
                email: '',
                Relatedname: '',
                Relatedphone: ''
            },
            rules: {
                add: [
                    { required: true, message: this.$t('order.Detailedaddrequired'), trigger: 'blur' }// 详细地址不能为空
                ],
                Zipcode: [
                    { required: true, message: this.$t('order.Coderequired'), trigger: 'blur' }// 邮编不能为空
                ],
                name: [
                    { required: true, message: this.$t('order.FullNamerequired'), trigger: 'blur' }// 姓名不能为空
                ],
                phone: [
                    { required: true, message: this.$t('login.Mobilerequired'), trigger: 'blur' }// 手机不能为空
                ],
                Relatedname: [
                    { required: true, message: this.$t('order.FullNamerequired'), trigger: 'blur' }// 姓名不能为空
                ],
                Relatedphone: [
                    { required: true, message: this.$t('login.Mobilerequired'), trigger: 'blur' }// 手机不能为空
                ],
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
            },
            tableData: [{
                radio: '1',
                Outlets: '波兰001',
                address: 'somewhere in the european country but i cannot say where it is',
                Zipcode: '123456',
                phone: '12345678910',
                name: 'weapon'
            }, {
                radio: '1',
                Outlets: '波兰001',
                address: 'somewhere in the european country but i cannot say where it is',
                Zipcode: '123456',
                phone: '12345678910',
                name: 'weapon'
            }]
        }
    },
    methods: {
        lastStep() {
            this.$router.push('/ApplyAss')
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
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
