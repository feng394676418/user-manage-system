<template>
  <div>
    <div class="row">
      <div class="index_product">
        <div class="col-md-3">
          <img :src="imeiInfoChild.imagesrc" />
        </div>
        <div class="col-md-9">
          <h2>{{imeiInfoChild.productname}}</h2>
          <p>{{$t('order.Modelinfo')}}：{{imeiInfoChild.producttype}}</p>
          <p>{{$t('order.IMEI')}}：{{imeiInfoChild.imei}}</p>
          <p>{{$t('order.WarrantyDate')}}：{{imeiInfoChild.deadtime}}</p>
        </div>
      </div>
    </div>
    <div class="row Warranty_type">
      <div class="form-group col-md-4">
        <label for="">
          <b>*</b>{{$t('order.TypeServices')}}：</label>
        <el-checkbox-group v-model="functionButtonInfo.checkedRepairOptions" @change="handleCheckedRepairOptionsChange">
          <el-checkbox v-for="repair in repairOptionArray" :label="repair" :key="repair" class="checkboxs">{{repair | repairName}}</el-checkbox>
        </el-checkbox-group>
        <el-checkbox  class="checkboxs" :indeterminate="isIndeterminate" v-model="functionButtonInfo.checkNot" @change="handleCheckNotChange">{{$t('order.NonAbove')}}</el-checkbox>
      </div>
    </div>
    <Functionbutton :functionButtonInfoChild="functionButtonInfo"></Functionbutton>
  </div>
</template>
<script>
import Functionbutton from './Functionbutton'
import moment from 'moment'
import Vue from 'vue'

const repairOptions = ['0', '1', '2']
// {key: '0', value: '您的手机有进液的情况。'},
// {key: '1', value: '您的手机未经授权拆开过/修理过。'},
// {key: '2', value: '您的手机有被人为损坏。'}]
export default {
  components: { Functionbutton },
  props: {
    imeiInfoChild: {}
  },
  data() {
    return {
      repairNameArray: this.$t('order.repairNameArray'),
      functionButtonInfo: {
        timeIn: false,
        checkNot: false,
        timeOutClassName: '',
        checkedRepairOptions: [] // 维修工单状态
      },
      repairOptionArray: repairOptions,
      isIndeterminate: false
    }
  },
  beforeCreate() {
    const this_ = this
    let repairName = ''
    Vue.filter('repairName', status => {
      this_.repairNameArray.forEach(item => {
        if (item.status === status) {
          repairName = item.name
          return
        }
      })
      return repairName
    })
  },
  watch: {
    // 监视事件
    imeiInfoChild(val) {
      console.dir(val)
      if (this.checkTimeIn()) {
        // 保修内
        this.functionButtonInfo.timeIn = true
        this.timeInOutClassName(this.functionButtonInfo.timeIn)
      } else {
        this.functionButtonInfo.timeIn = false
        this.timeInOutClassName(this.functionButtonInfo.timeIn)
      }
      console.log('transfer data---> father')
      // 父组件数据传递
      this.$emit('on-time-in-out', this.functionButtonInfo)
    }
  },
  // filters: {

  //   repairNameFilter(status) {
  //     const repairOptionsMap = {
  //           '0': '您的手机有进液的情况。', // 您的手机有进液的情况。
  //           '1': '您的手机未经授权拆开过/修理过。', // 您的手机未经授权拆开过/修理过。
  //           '2': '您的手机有被人为损坏。'} // 您的手机有被人为损坏。
  //     return repairOptionsMap[status]
  //   }
  // },
  //
  created() {
    console.log('---------------imeiInfoChild---------------------')
    console.dir(this.imeiInfoChild)
    if (this.checkTimeIn()) {
      // 保修内
      this.functionButtonInfo.timeIn = true
      this.timeInOutClassName(this.functionButtonInfo.timeIn)
    } else {
      this.functionButtonInfo.timeIn = false
      this.timeInOutClassName(this.functionButtonInfo.timeIn)
    }
    console.log('transfer data---> father')
    // 父组件数据传递
    this.$emit('on-time-in-out', this.functionButtonInfo)
  },
  methods: {
    handleCheckNotChange(event) {
      this.functionButtonInfo.checkedRepairOptions = event.target.checked ? [] : []
      if (this.functionButtonInfo.checkedRepairOptions.length === 0) {
        if (this.checkTimeIn()) {
          this.functionButtonInfo.timeIn = true
        } else {
          this.functionButtonInfo.timeIn = false
        }
      } else {
        this.functionButtonInfo.timeIn = false
      }
      console.log('-------->>保内>>>--' + this.functionButtonInfo.timeIn)
      this.timeInOutClassName(this.functionButtonInfo.timeIn)
      // 父组件数据传递
      this.$emit('on-time-in-out', this.functionButtonInfo)
    },
    handleCheckedRepairOptionsChange(value) {
      console.log('======================>' + this.imeiInfoChild.deadtime)
      const checkedCount = value.length
      console.log('aaaaaaaaaaaaaaaaaaaa')
      console.dir(value)
      if (checkedCount === 0) {
        // 没有人为之类损坏
        console.log('-------------------------------')
       // this.checkNot = true
        if (this.checkTimeIn()) {
          this.functionButtonInfo.timeIn = true
        } else {
          this.functionButtonInfo.timeIn = false
        }
      } else {
        this.functionButtonInfo.checkNot = false
        this.functionButtonInfo.timeIn = false
      }
      console.log('-------->>保内>>>--' + this.functionButtonInfo.timeIn)
      this.timeInOutClassName(this.functionButtonInfo.timeIn)
      console.log('transfer data---> father')
      // 父组件数据传递
      this.$emit('on-time-in-out', this.functionButtonInfo)
    },
    checkTimeIn() {
      // 保修期内
      return moment(moment().format('YYYY-MM-DD')).isBefore(this.imeiInfoChild.deadtime)
    },
    timeInOutClassName(val) {
      if (val) {
        // 保内
        this.functionButtonInfo.timeOutClassName = ''
      } else {
        // 保外
        this.functionButtonInfo.timeOutClassName = 'yellow_btn'
      }
    }
  }
}
</script>
