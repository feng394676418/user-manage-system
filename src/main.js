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
import Cookies from 'js-cookie'
import VueLocalStorage from 'vue-localstorage'
import layer from 'vue-layer'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

require('../static/iconfont/iconfont.js')

Vue.use(VueLocalStorage, {
    name: 'ls',
    createComputed: true // created computed members from your variable declarations
})

Vue.use(VueI18n)

Vue.config.productionTip = false

// cookie存放

// 国际化
const messages = {
    en,
    zh
}

const umssLang = Cookies.get('umsLang') == null ? 'en' : Cookies.get('umsLang')
Cookies.set('umsLang', umssLang)
const i18n = new VueI18n({
    locale: umssLang,
    messages
})

Vue.use(ElementUI)
ElementLocale.i18n((key, value) => i18n.t(key, value))

Vue.prototype.AppLanguage = function(lang) {
    i18n.locale = lang
}
Vue.prototype.getAppLanguage = function() {
    return i18n.locale
}

Vue.prototype.$layer = layer(Vue)

// router配置
router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.matched.length === 0 && to.fullPath !== '/') {
        next({ path: '/' })
        NProgress.done()
        return
    }
    next()
})

router.afterEach(route => {
    NProgress.done()
})

/* eslint-disable no-new */
new Vue({
    i18n,
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})