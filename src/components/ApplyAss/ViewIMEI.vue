<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <div class="Bread_crumbs">
                <a href="#">首页</a> >
                <a href="#">填写产品信息</a> >
                <a href="#">查看IMEI</a>
            </div>
            <div class="step_nav mr_top">
                <span>如何查询手机IMEI号？</span>
            </div>
            <p class="mr_top pd_tb">方法一：手机外包装底部查看IMEI。</p>
            <div class="text-center">
                <img class="img-responsive center-block" src="../../../static/img/package.png" />
                <p class="blue_text pd_tb">包装底部</p>
            </div>
            <p class="pd_tb">方法二：拨号查看。</p>
            <div class="text-center">
                <div class="dial">
                    <img class="img-responsive center-block" src="../../../static/img/dial1.png" />
                    <p class="blue_text pd_tb">1.打开拨号界面输入
                        <span class="yellow_text">＊#06#</span>
                    </p>
                </div>
                <div class="dial">
                    <img class="img-responsive center-block" src="../../../static/img/dial2.png" />
                    <p class="blue_text pd_tb">2.弹出显示IMEI窗口</p>
                </div>
            </div>
            <p class="pd_tb">方法三：在设置里查看。</p>
            <div class="text-center">
                <div class="set">
                    <img class="img-responsive center-block" src="../../../static/img/set1.png" />
                    <p class="blue_text pd_tb">1.打开设置</p>
                </div>
                <div class="set">
                    <img class="img-responsive center-block" src="../../../static/img/set2.png" />
                    <p class="blue_text pd_tb">2.选择打开
                        <span class="yellow_text">About phone</span>
                    </p>
                </div>
                <div class="set">
                    <img class="img-responsive center-block" src="../../../static/img/set3.png" />
                    <p class="blue_text pd_tb">3.选择打开
                        <span class="yellow_text">Status</span>
                    </p>
                </div>
                <div class="set">
                    <img class="img-responsive center-block" src="../../../static/img/set4.png" />
                    <p class="blue_text pd_tb">4.选择打开
                        <span class="yellow_text">SIM status</span>
                    </p>
                </div>                                                
                <div class="set">
                    <img class="img-responsive center-block" src="../../../static/img/set5.png" />
                    <p class="blue_text pd_tb">5.显示IMEI</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logintop from './logintop'
export default {
    components: { logintop },
    data () {
        return {
        }
    },
    methods: {
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

.dial {
    display: inline-block;
    margin: 0 10px;
}
.set{
    display: inline-block;
    margin:5px;
}
</style>
