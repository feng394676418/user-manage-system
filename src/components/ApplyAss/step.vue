<template>
    <div>
    <div v-if="status==11" class="step step1"></div>
    <div v-if="status==21" class="step step2"></div>
    <div v-if="status==31" class="step step3"></div>
    <div v-if="status==13" class="step step4"></div>
    <div v-if="status==14" class="step step5"></div>
    <div v-if="status==15" class="step step6"></div>
    <div v-if="status==17" class="step step7"></div>
    <div v-if="status==18" class="step step8"></div>
    <div v-if="status==19" class="step step9"></div>
    <!-- <div class="step step2"></div>
                <div class="step step3"></div>
                <div class="step step4"></div>
                <div class="step step5"></div>
                <div class="step step6"></div>
                <div class="step step7"></div>
                <div class="step step8"></div>
                <div class="step step9"></div> -->
            <ul class="steps">
                <li>{{$t('order.Apply')}}</li>
                <li>{{$t('order.Delivery')}}</li>
                <li>{{$t('order.inDepot')}}</li>
                <li>{{$t('order.Test')}}</li>
                <li>{{$t('order.Quotation')}}</li>
                <li>{{$t('order.Repair')}}</li>
                <li>{{$t('order.Payment')}}</li>
                <li>{{$t('order.Dispatch')}}</li>
                <li>{{$t('order.Done')}}</li>
            </ul>
    </div>
</template>

<script>
export default {
    props: {
      status: ''
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>