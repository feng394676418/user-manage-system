<template>
    <div class="container">
        <div class="login_top">
            <img src="../../../static/img/login_logo.png" />
            <div class="pull-right">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        简体中文
                        <i class="icon-language"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item ><a @click="changeUmsLang('en')">English</a></el-dropdown-item>
                        <el-dropdown-item ><a @click="changeUmsLang('zh')">简体中文</a></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="form-signin">
            <h1>{{$t('login.CSS')}}</h1>
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="0px" class="demo-ruleForm" label-position="left">
                <el-form-item label="" prop="orderno">
                    <span class="svg-container">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-orderno"></use>
                        </svg>
                    </span>
                    <el-input v-model.number="ruleForm2.orderno" :placeholder="$t('login.OrderNumber')"></el-input>
                </el-form-item>
                <el-form-item label="" prop="phone">
                    <span class="svg-container">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-phone"></use>
                        </svg>
                    </span>
                    <el-input v-model.number="ruleForm2.phone" :placeholder="$t('login.MobileNumber')"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="info" style="width:100%;" @click="progressInfo()">{{$t('login.CheckProgress')}}</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button :plain="true" type="info" style="width:100%;" @click="routeTO">{{$t('login.ApplyService')}}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="copy">Copyright： Wing sing supply chain co.,Ltd © wingsingsupplychain.com All Rights Reserved.</div>
    </div>
</template>

<script>

import { test } from '@/api/test'
import Cookies from 'js-cookie'

export default {
    data() {
        var checkOrderno = (rule, value, callback) => {
            if (!value) {
                return callback(new Error(this.$t('login.Orderrequired')))// 工单编号不能为空
            }
        }
        var checkPhone = (rule, value, callback) => {
            if (!value) {
                return callback(new Error(this.$t('login.Mobilerequired')))// 手机号不能为空
            }
        }
        return {
            ruleForm2: {
                orderno: '',
                phone: ''
            },
            rules2: {
                orderno: [
                    { validator: checkOrderno, trigger: 'blur' }
                ],
                phone: [
                    { validator: checkPhone, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        changeUmsLang(lang) {
            // 转换全局语言
            Cookies.set('umsLang', lang)
            location.reload()
        },
        progressInfo() {
            test().then(response => {
                console.log('response--------test----------info')
                console.dir(response)
            })
        },
        routeTO() {
            this.$router.push('/ApplyAss')
            // location.reload()
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

.el-form-item__content {
    position: relative;
}

.svg-container {
    color: #b3b3b3;
    position: absolute;
    top: 5px;
    left: 10px;
    z-index: 10;
    font-size:16px;
}

.form-signin .el-input__inner {
    padding-left: 30px;
    height: 48px!important;
    line-height: 48px!important;
}

body {
    background: #f7f8fd url(../../../static/img/login_bg.jpg) no-repeat fixed center center / cover;
}

h1 {
    font-size: 18px;
    color: #666577;
    margin-bottom: 50px;
    text-align: center;
}

.form-signin {
    max-width: 400px;
    margin: 150px auto 0;
}

.el-button {
    padding: 16px 15px;
}
.el-dropdown-link{
    color:#fff;
    cursor: pointer;
}
.copy{
    color:#fff;
    text-align:center;
    margin-top:320px;
}
/* .copy{
    color:#fff;
    position: absolute;
    bottom:20px;
    padding-left:16%
} */

.el-dropdown-menu__item a{
    display: block;
    text-decoration:none;
}

</style>
