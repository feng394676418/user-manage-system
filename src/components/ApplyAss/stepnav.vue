<template>
    <div>
      <template v-if="stepNav.step === '1'">
        <div class="step_nav">
            <span>1{{$t('order.FillProductInfo')}}</span>
            <span class="gery_text">></span>
            <span class="gery_text">2{{$t('order.FillDeliveryInfo')}}</span>
            <span class="gery_text">></span>
            <span class="gery_text">3{{$t('order.OrderDelivery')}}</span>
        </div>
      </template>
      <template v-else-if="stepNav.step === '2'">
        <div class="step_nav">
            <span>1{{$t('order.FillProductInfo')}}</span>
            <span class="">></span>
            <span class="">2{{$t('order.FillDeliveryInfo')}}</span>
            <span class="gery_text">></span>
            <span class="gery_text">3{{$t('order.OrderDelivery')}}</span>
        </div>
      </template>
      <template v-else-if="stepNav.step === '3'">
          <div class="step_nav">
          <span>1{{$t('order.FillProductInfo')}}</span>
          <span class="">></span>
          <span class="">2{{$t('order.FillDeliveryInfo')}}</span>
          <span class="">></span>
          <span class="">3{{$t('order.OrderDelivery')}}</span>
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
