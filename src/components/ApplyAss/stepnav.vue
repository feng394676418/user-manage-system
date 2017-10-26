<template>
    <div>
      <template v-if="stepNav.step === '1'">
        <div class="step_nav">
            <span>1填写产品信息</span>
            <span class="gery_text">></span>
            <span class="gery_text">2填写快递信息</span>
            <span class="gery_text">></span>
            <span class="gery_text">3快递下单</span>
        </div>
      </template>
      <template v-else-if="stepNav.step === '2'">
        <div class="step_nav">
            <span>1填写产品信息</span>
            <span class="">></span>
            <span class="">2填写快递信息</span>
            <span class="gery_text">></span>
            <span class="gery_text">3快递下单</span>
        </div>
      </template>
      <template v-else-if="stepNav.step === '3'">
          <div class="step_nav">
          <span>1填写产品信息</span>
          <span class="">></span>
          <span class="">2填写快递信息</span>
          <span class="">></span>
          <span class="">3快递下单</span>
      </div>
      </template>
    </div>
</template>

<script>
export default {
  props: {
    stepNav: {}
  },
  data() {
    return {
    }
  }
}
</script>
