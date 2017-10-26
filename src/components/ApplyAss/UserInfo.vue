<template>
    <div class="row userinfo">
        <div class="col-md-2">
            <dl>
                <dt>{{$t('order.Fullname')}}</dt>
                <dd>{{userInfoChild.username}}</dd>
            </dl>
        </div>
        <div class="col-md-2">
            <dl>
                <dt>{{$t('login.MobileNumber')}}</dt>
                <dd>{{userInfoChild.telphone}}</dd>
            </dl>
        </div>
        <div class="col-md-4">
            <dl>
                <dt>{{$t('order.Email')}}</dt>
                <dd>{{userInfoChild.email}}</dd>
            </dl>
        </div>
        <div class="col-md-2">
            <dl>
                <dt>{{$t('order.Alternativecontact')}}</dt>
                <dd>{{userInfoChild.emergencyname}}</dd>
            </dl>
        </div>
        <div class="col-md-2">
            <dl>
                <dt>{{$t('WarrantyPayment.AlternativeContact')}}</dt>
                <dd>{{userInfoChild.emergencyphone}}</dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      userInfoChild: ''
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>
<style type="text/css">

</style>
