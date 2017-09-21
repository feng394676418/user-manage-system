// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import en from './lang/en'
import zh from './lang/zh'
import ElementLocale from 'element-ui/lib/locale'
require('../static/iconfont/iconfont.js')

Vue.use(VueI18n)

Vue.config.productionTip = false

// cookie存放

// 国际化
const messages = {
    en,
    zh
}

const i18n = new VueI18n({
    locale: 'zh', // set locale
    messages // set locale messages
})

Vue.use(ElementUI)
ElementLocale.i18n((key, value) => i18n.t(key, value))

/* eslint-disable no-new */
new Vue({
    i18n,
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
