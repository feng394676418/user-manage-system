<template>
    <div>
        <div class="row">
            <div class="index_product">
                <div class="col-md-3">
                    <img src="../../../static/img/product.jpg" />
                </div>
                <div class="col-md-9">
                    <h2>Original Oneplus 5 in stock 6GB 64GB Snapdragon 835 Octa Core 2.45GHz LTE smartphone 5.5" Cornin g Gorill a Glass 5 3300mAh</h2>
                    <p>产品型号：Oneplus 5 月岩灰 8G+128G</p>
                    <p>IMEI号码：123456789012345</p>
                    <p>保修期限：2018/08/28</p>
                </div>
            </div>
        </div>
        <div class="row Warranty_type">
            <div class="form-group col-md-12">
                <label for="">
                    <b>*</b>保修类型：</label>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">均无以上情况</el-checkbox>
            </div>
        </div>
        <Functionbutton></Functionbutton>
    </div>
</template>
<script>
import Functionbutton from './Functionbutton'
const cityOptions = ['您的手机有进液的情况。', '您的手机未经授权拆开过/修理过。', '您的手机有被人为损坏。']
export default {
    components: { Functionbutton },
    data () {
        return {
            checkAll: true,
            checkedCities: ['您的手机有进液的情况。'],
            cities: cityOptions,
            isIndeterminate: true
        }
    },
    methods: {
        handleCheckAllChange(event) {
            this.checkedCities = event.target.checked ? cityOptions : []
            this.isIndeterminate = false
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length
            this.checkAll = checkedCount === this.cities.length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
        }
    }
}
</script>
