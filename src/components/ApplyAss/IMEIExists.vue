<template>
    <div>
        <div class="row">
            <div class="index_product">
                <div class="col-md-3">
                    <img :src="imeiInfoChild.imagesrc" />
                </div>
                <div class="col-md-9">
                    <h2>{{imeiInfoChild.productname}}</h2>
                    <p>产品型号：{{imeiInfoChild.producttype}}</p>
                    <p>IMEI号码：{{imeiInfoChild.imei}}</p>
                    <p>保修期限：{{imeiInfoChild.deadtime}}</p>
                </div>
            </div>
        </div>
        <div class="row Warranty_type">
            <div class="form-group col-md-12">
                <label for="">
                    <b>*</b>保修类型：</label>
                <el-checkbox-group v-model="checkedRepairOptions" @change="handleCheckedRepairOptionsChange">
                    <el-checkbox v-for="repair in repairOptionArray" :label="repair" :key="repair">{{repair}}</el-checkbox>
                </el-checkbox-group>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkNot" @change="handleCheckNotChange">均无以上情况</el-checkbox>
            </div>
        </div>
        <Functionbutton :functionButtonInfoChild="functionButtonInfo"></Functionbutton>
    </div>
</template>
<script>
import Functionbutton from './Functionbutton'
import moment from 'moment'

const repairOptions = ['您的手机有进液的情况。', '您的手机未经授权拆开过/修理过。', '您的手机有被人为损坏。']
export default {
    components: { Functionbutton },
    props: {
      imeiInfoChild: {}
    },
    data () {
        return {
            functionButtonInfo: {
              timeIn: false,
              timeOutClassName: ''
            },
            checkNot: true,
            checkedRepairOptions: [],
            repairOptionArray: repairOptions,
            isIndeterminate: false
        }
    },
    created() {
      if (this.checkTimeIn()) {
        // 保修内
        this.functionButtonInfo.timeIn = true
        this.timeInOutClassName(this.functionButtonInfo.timeIn)
      } else {
        this.functionButtonInfo.timeIn = false
        this.timeInOutClassName(this.functionButtonInfo.timeIn)
      }
    },
    methods: {
        handleCheckNotChange(event) {
            this.checkedRepairOptions = event.target.checked ? [] : repairOptions
            if (this.checkedRepairOptions.length === 0) {
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
        },
        handleCheckedRepairOptionsChange(value) {
            console.log('======================>' + this.imeiInfoChild.deadtime)
            const checkedCount = value.length
            console.log('aaaaaaaaaaaaaaaaaaaa')
            console.dir(value)
            if (checkedCount === 0) {
              // 没有人为之类损坏
              console.log('-------------------------------')
              this.checkNot = true
              if (this.checkTimeIn()) {
                this.functionButtonInfo.timeIn = true
              } else {
                this.functionButtonInfo.timeIn = false
              }
            } else {
              this.checkNot = false
              this.functionButtonInfo.timeIn = false
            }
            console.log('-------->>保内>>>--' + this.functionButtonInfo.timeIn)
            this.timeInOutClassName(this.functionButtonInfo.timeIn)
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
