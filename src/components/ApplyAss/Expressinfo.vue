<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <step></step>
            <stepnav></stepnav>
            <p class="blue_text pd_tb">
                提示：此寄件地址会用做寄回地址，以下内容需填写真实有效信息以防包裹丢失。“*”为必填内容。
            </p>
            <div class="form-group">
                <label for="">
                    <b>*</b>IMEI:</label>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-row class="row-bg" :gutter="30">
                    <el-col :md="6">
                        <el-form-item label="" prop="country">
                            <el-select v-model="ruleForm.country" placeholder="*国家" size="small">
                                <el-option label="" value="Poland"></el-option>
                                <el-option label="" value="USA"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="State">
                            <el-select v-model="ruleForm.State" placeholder="州">
                                <el-option label="" value="State"></el-option>
                                <el-option label="" value="State2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="city">
                            <el-select v-model="ruleForm.city" placeholder="*城市">
                                <el-option label="" value="shanghai"></el-option>
                                <el-option label="" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="Zipcode">
                            <el-input v-model="ruleForm.Zipcode" placeholder="*邮编"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="" prop="add">
                    <el-input v-model="ruleForm.add" placeholder="*详细地址"></el-input>
                </el-form-item>
                <div class="form-group">
                    <label for="">
                        <b>*</b>联系方式：</label>
                </div>
                <el-row class="row-bg" :gutter="30">
                    <el-col :md="6">
                        <el-form-item label="" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="*姓名"></el-input>
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
                        <el-form-item label="" prop="Relatedname">
                            <el-input v-model="ruleForm.Relatedname" placeholder="*姓名"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :md="6">
                        <el-form-item label="" prop="Relatedphone">
                            <el-input v-model="ruleForm.Relatedphone" placeholder="*手机"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="form-group mr_top2">
                    <label for="">
                        <b>*</b>服务网点:</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="radio" label="" min-width="5%">
                        <template scope="scope">
                            <input value="radio" name="radio" checked="" type="radio" v-model="radio">
                        </template>
                    </el-table-column>
                    <el-table-column prop="Outlets" label="网点" min-width="15%">
                    </el-table-column>
                    <el-table-column prop="address" label="地址" min-width="40%">
                    </el-table-column>
                    <el-table-column prop="Zipcode" label="邮编" min-width="10%">
                    </el-table-column>
                    <el-table-column prop="phone" label="电话" min-width="15%">
                    </el-table-column>
                    <el-table-column prop="name" label="联系人" min-width="15%">
                    </el-table-column>
                </el-table>
                <div class="not_in_area yellow_text">
                    对不起，您选择的城市不在我们的服务区域内!
                </div>
                <el-form-item class="pull-right mr_top">
                    <el-button :plain="true" type="info" @click="lastStep()">上一步</el-button>
                    <el-button type="info" @click="submitForm('ruleForm')">提交申请</el-button>
                </el-form-item>

            </el-form>
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
                    { required: true, message: '详细地址不能为空', trigger: 'blur' }
                ],
                Zipcode: [
                    { required: true, message: '邮编不能为空', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '手机不能为空', trigger: 'blur' }
                ],
                Relatedname: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                Relatedphone: [
                    { required: true, message: '手机不能为空', trigger: 'blur' }
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
    height: 48px;
}
</style>
