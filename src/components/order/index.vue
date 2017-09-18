<template>
  <div>
    <el-button @click="show = !show">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">{{$t('order.hello')}}</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">{{$t('order.china')}}</div>
      </transition>
    </div>
    <el-time-select
  v-model="value1"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  :placeholder="$t('order.checktime')">
</el-time-select>
  </div>
</template>

<script>
  export default {
      data: () => ({
          show: true,
          value1: ''
      })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #20A0FF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
