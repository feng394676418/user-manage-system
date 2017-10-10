<template>
    <div>
        <div class="row">
            <!--默认都显示-->
            <div class="col-md-6 form-group">
                <el-button type="primary"  :plain="true" style="width:100%">
                    保内
                    <p>保内全部维修费用由XXXX承担。</p>
                </el-button>
            </div>
            <div class="col-md-6 form-group">
                <el-button type="primary" class="col-md-6" :plain="true" style="width:100%">
                    保外
                    <p>保外全部维修费用由客户承担。</p>
                </el-button>
            </div>
            <!--保内-->
            <div class="col-md-6 form-group">
                <el-button type="primary" style="width:100%">
                    保内
                    <p>保内全部维修费用由XXXX承担。</p>
                </el-button>
            </div>
            <div class="col-md-6 form-group">
                <el-button type="primary" class="col-md-6" :plain="true" style="width:100%">
                    保外
                    <p>保外全部维修费用由客户承担。</p>
                </el-button>
            </div>
            <!--保外-->
            <div class="col-md-6 form-group">
                <el-button type="primary" :plain="true" style="width:100%">
                    保内
                    <p>保内全部维修费用由XXXX承担。</p>
                </el-button>
            </div>
            <div class="col-md-6 form-group">
                <el-button type="primary" class="col-md-6 yellow_btn" style="width:100%">
                    保外
                    <p>保外全部维修费用由客户承担。</p>
                </el-button>
            </div>
        </div>
        <p class="blue_text pd_tb">
            此结论仅作参考，以实际检测结果为准，
            <a class="purple_text" href="#/checkprice">查询维修价格标准。</a>
        </p>
    </div>
</template>

<style>
.yellow_btn,
.yellow_btn:focus,
.yellow_btn:hover {
    background-color: #fff;
    border: 2px solid #f39800!important;
    border-radius: 10px;
    color: #f39800!important;
}
</style>
