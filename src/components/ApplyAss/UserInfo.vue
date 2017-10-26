<template>
    <div class="row userinfo">
        <div class="col-md-2">
            <dl>
                <dt>姓名</dt>
                <dd>{{userInfoChild.username}}</dd>
            </dl>
        </div>
        <div class="col-md-2">
            <dl>
                <dt>手机号</dt>
                <dd>{{userInfoChild.telphone}}</dd>
            </dl>
        </div>
        <div class="col-md-4">
            <dl>
                <dt>邮箱</dt>
                <dd>{{userInfoChild.email}}</dd>
            </dl>
        </div>
        <div class="col-md-2">
            <dl>
                <dt>相关联系人</dt>
                <dd>{{userInfoChild.emergencyname}}</dd>
            </dl>
        </div>
        <div class="col-md-2">
            <dl>
                <dt>相关联系人电话</dt>
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
