<template>
    <div class="container">
        <logintop></logintop>
        <div class="main_content main_form_input">
            <step :status="11"></step>
            <stepnav :stepNav="stepModel"></stepnav>
            <template v-if="trackingWait">
              <!--等待生成运单-->
              <h2 class="text-center generate_title">{{$t('order.Applicationaccepted')}}{{$t('login.OrderNumber')}}
                  <span class="sky_blue_text">{{refNumber}}</span>，{{$t('order.deliverynote')}}</h2>
              <p class="blue_text text-center pd_top">
                  {{$t('order.Pleasewait')}}
              </p>
            </template>
            <template v-else>
                <template v-if="trackingNoFlg">
                  <!--成功生成运单-->
                  <h2 class="text-center generate_title">{{$t('login.OrderNumber')}}
                    <span class="sky_blue_text">{{refNumber}}</span>， {{$t('order.downloadorder')}}</h2>
                  <p class="blue_text text-center pd_top">
                      {{$t('order.sentemail')}}
                        <a class="purple_text" @click="openServiceProgress">{{$t('order.selectProgress')}}</a>
                  </p>
                </template>
                <template v-else>
                  <!--运单生成失败-->
                  <h2 class="text-center generate_title">{{$t('login.OrderNumber')}}
                      <span class="sky_blue_text">{{refNumber}}</span>，{{$t('order.deliveryfailure')}}</h2>
                  <p class="blue_text text-center pd_top"> <!--错误信息显示-->
                      {{$t('order.WHY')}}：{{trackingFailMsg}}<a class="purple_text" href="/#/ApplyAss">{{$t('order.resubmitorder')}}</a>
                  </p>
                  <p class="text-center mr_top">
                      <img src="../../../static/img/Construction_failed.png" />
                  </p>
                </template>
              </template>
            <div class="form-group mr_top2">
                <label for="">
                    <b>*</b> {{$t('order.servicepoint')}}：</label>
            </div>
            <el-table :data="locatorDataArray" style="width: 100%">
                <el-table-column prop="code" :label="$t('order.Point')" min-width="18%">UPS
                </el-table-column>
                <el-table-column prop="address" :label="$t('order.Address')" min-width="26%">
                </el-table-column>
                <el-table-column prop="postCode" :label="$t('order.PostCode')" min-width="9%">
                </el-table-column>
                <el-table-column prop="telPhone" :label="$t('order.Telephone')" min-width="14%">
                </el-table-column>
                <el-table-column prop="operationlTime" :label="$t('order.Workinghour')" min-width="30%">
                </el-table-column>
            </el-table>
            <div class="row mr_top">
                <div class="col-md-8">
                  <template v-if="imgFlg">
                    <!-- 图片形式 -->
                    <img :src="surfaceURL" width="600px" height="800px" />
                  </template>
                  <template v-if="pdfFlg">
                    <!-- Pdf形式 -->
                    <embed :src="surfaceURL" width="600px" height="800px" />
                  </template>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="pull-right">
                        <el-button class="btn-info btn-infos" type="info" v-if="imgFlg || pdfFlg" @click="download()">{{$t('order.Download')}}</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getTrackingno, getLogisticsLocatorList } from '@/api/tracking'
import logintop from './logintop'
import step from './step'
import stepnav from './stepnav'
import $ from 'jquery'

export default {
    components: { logintop, step, stepnav },
    data () {
        return {
            stepModel: {
              step: '3'
            },
            orderNumber: '', // 系统内部单号
            trackingNoFlg: false, // 运单号获取flag
            trackingFailMsg: '', // 运单号获取失败原因
            imgFlg: false,
            pdfFlg: false,
            trackingWait: true,
            surfaceURL: '',
            refNumber: this.$route.params.refNumber,
            locatorDataArray: [],
            flushFlg: false
        }
    },
    created() {
      this.getLogisticsLocatorList()
      if (!this.flushFlg) {
        this.getTrackingno()
      }
      $(window).bind('beforeunload', function() {
        console.log('flush')
        this.flushFlg = true
        console.log(this.flushFlg)
        return ''
      })
    },
    methods: {
      // 附近网点list获取
      getLogisticsLocatorList() {
        if (this.$ls.get('locatorDataArray') !== null) {
          this.locatorDataArray = JSON.parse(this.$ls.get('locatorDataArray'))
          return
        }
        getLogisticsLocatorList(this.refNumber).then(response => {
          console.log('获取附近网点信息')
          console.dir(this.locatorDataArray)
          if (response.data.status === '0') {
            this.locatorDataArray = response.data.data
            this.locatorDataArray.forEach(item => {
                console.log(item.operationlTime)
                this.$set(item, 'operationlTime', item.operationlTime.replace(/CLOSED_ALL_DAY/g, 'After Hours:').replace(/ null~null /g, '').replace(/OPEN_BY_HOURS/g, 'Opening Hours:'))
                this.$set(item, 'code', 'UPS')
            })
            this.$ls.set('locatorDataArray', JSON.stringify(this.locatorDataArray))
            // console.dir(JSON.parse(this.$ls.get('locatorDataArray')))
          }
        })
      },
      // 获取运单号
      getTrackingno() {
        getTrackingno(this.refNumber).then(response => {
          console.log('获取运单号结果信息')
          console.dir(response)
          console.log('运单号获取结束')
          if (response.data.status === '0') {
            this.surfaceURL = response.data.data.sendSurfaceURL
            this.orderNumber = response.data.data.ordernumber
            this.trackingWait = false
            this.trackingNoFlg = true
            if (this.surfaceURL.substr(this.surfaceURL.length - 1) === 'g') {
              this.imgFlg = true
              this.pdfFlg = false
            } else {
              this.pdfFlg = true
              this.imgFlg = false
            }
          } else if (response.data.status === '2') {
            if (response.data.message !== '') {
              this.$message.info(response.data.message)
            }
            this.surfaceURL = response.data.data.sendSurfaceURL
            this.orderNumber = response.data.data.ordernumber
            this.trackingWait = false
            this.trackingNoFlg = true
            if (this.surfaceURL.substr(this.surfaceURL.length - 1) === 'g') {
              this.imgFlg = true
              this.pdfFlg = false
            } else {
              this.pdfFlg = true
              this.imgFlg = false
            }
          } else {
            this.trackingWait = false
            this.trackingNoFlg = false
            // this.$message.error('运单单号获取失败,稍后客户会和您联系,请稍等!') 一期 重新下单
            console.log(response.data.message)
            this.trackingFailMsg = response.data.message
          }
        })
      },
      download() {
        window.open('api/checkReport/download?refNumber=' + this.refNumber + '&fileUrl=' + this.surfaceURL)
        // window.open('/GuaranteedCompletion/' + this.orderNumber, '_self')
        // this.$router.push('/GuaranteedCompletion/' + this.orderNumber)
      },
      openServiceProgress() {
        //  this.$router.push('/GuaranteedCompletion/' + this.orderNumber)
        window.open('#/GuaranteedCompletion/' + this.orderNumber)
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

.btn-infos {
    width: 236px;
    height: 48px;
}
</style>
