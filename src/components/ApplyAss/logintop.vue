<template>
            <div class="login_top">
            <a href="#/ApplyAss"><img src="../../../static/img/logo.png" /></a>
            <div class="pull-right">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        {{$t('order.Chinese')}}
                        <i class="icon-language"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item ><a @click="changeUmsLang('en')">English</a></el-dropdown-item>
                        <el-dropdown-item ><a @click="changeUmsLang('zh')">{{$t('order.Chinese')}}</a></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
</template>

<script>

import Cookies from 'js-cookie'

export default {
    methods: {
        changeUmsLang(lang) {
            // 转换全局语言
            Cookies.set('umsLang', lang)
            location.reload()
        }
    }
}
</script>
<style type="text/css">
body{
    background: #f3f6fa;
}
.el-dropdown-link {
    color: #00a0e9;
    font-size: 12px;
    cursor: pointer;
}
.el-dropdown-menu__item a{
    display: block;
    text-decoration:none!important;
}
</style>