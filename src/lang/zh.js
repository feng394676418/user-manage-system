import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
export default {
    login: {
        CSS: '客户售后系统',
        OrderNumber: '工单编号',
        MobileNumber: '手机号',
        CheckProgress: '查看售后进度',
        ApplyService: '申请售后服务',
        Orderrequired: '工单编号不能为空',
        Mobilerequired: '手机号不能为空',
        Numbersonly: '手机号只能为数字'
    },
    order: {
        hello: '你好!',
        Language: '语言',
        checktime: '选择时间',
        Apply: '申请',
        Delivery: '寄出',
        inDepot: '收件',
        Test: '检测',
        Quotation: '报价',
        Repair: '维修',
        Payment: '结算',
        Dispatch: '发货',
        Done: '完成',
        FillProductInfo: '填写产品信息',
        FillDeliveryInfo: '填写快递信息',
        OrderDelivery: '快递下单',
        Brands: '产品品牌',
        Note: '提示：服务地区仅限欧盟内，保外需要客户承担运费！',
        enterIMEI: '请输入IMEI码',
        checkIMEI: '怎样查看IMEI码？',
        IMEInotexisted: '此IMEI号不存在！请仔细核对。',
        Modelinfo: '产品型号',
        IMEI: 'IMEI号码',
        WarrantyDate: '保修期限',
        TypeServices: '保修类型',
        repairNameArray: [
            { name: '您的手机有进液的情况。', status: '0' },
            { name: '您的手机未经授权拆开过/修理过。', status: '1' },
            { name: '您的手机有被人为损坏。', status: '2' }
        ],
        NonAbove: '均无以上情况',
        InWarranty: '保内',
        costwarranty: '保内全部维修费用由厂商承担',
        OutofWarranty: '保外',
        costnotwarranty: '保外全部维修费用由您承担',
        conclusionreference: '此结论仅作参考，以实际检测结果为准',
        ServicePrices: '查询维修价格标准。',
        FailureDescription: '故障描述',
        faultdescriptionempty: '故障描述不能为空',
        UploadPhotos: '上传图片',
        picturenotempty: '图片不能为空',
        threepictures: '最多可以上传3张图片!',
        formatincorrect: '文件格式不正确!',
        Filesize: '文件大小需小于2M!',
        Next: '下一步',
        addressrequired: '提示：此寄件地址会用做寄回地址，以下内容需填写真实有效信息以防包裹丢失。“*”为必填内容。',
        Country: '国家',
        SelectCountry: '请选择国家',
        County: '州',
        City: '城市',
        SelectCity: '请选择城市',
        PostCode: '邮编',
        Coderequired: '邮编不能为空',
        DetailedAddress: '详细地址',
        Detailedaddrequired: '详细地址不能为空',
        ContactInfo: '联系方式',
        Fullname: '姓名',
        FullNamerequired: '姓名不能为空',
        Email: '电子邮箱',
        Emailrequired: '邮箱不能为空',
        correctemailadd: '请输入正确的邮箱地址',
        Alternativecontact: '相关联系人',
        ServicePoint: '服务网点',
        Point: '网点',
        Address: '地址',
        Telephone: '电话',
        Contactperson: '联系人',
        citynotinthearea: '对不起，您选择的城市不在我们的服务区域内!',
        Back: '上一步',
        Submit: '提交申请',
        downloadorder: '运单已经生成！您现在可以下载运单，打包发货了！',
        sentemail: '运单及工单信息已经发送到您的邮箱，请注意查收。',
        servicepoint: '您附近可用的UPS服务网点',
        Workinghour: '工作时间',
        Statelistfailed: '国家列表获取失败!',
        Provincialfailed: '省州列表获取失败!',
        Cityfailed: '城市列表获取失败!',
        Servicefailed: '服务商列表获取失败!',
        createworkorder: '工单创建成功,创建工单:',
        Workorderfailed: '工单创建失败!',
        Applicationaccepted: '申请成功!',
        deliverynote: '正在为您生成运单……',
        Pleasewait: '运单生成大约需要1分钟时间，请稍等。',
        deliveryfailure: '运单生成失败',
        WHY: '失败原因',
        resubmitorder: '请重新下单',
        selectnetwork: '请选择服务网点！',
        Confirmreceipt: '确认收货',
        receiptsuccess: '确认收货成功！'
    },
    checkprice: {
        home: '首页',
        FillProductInfo: '填写产品信息',
        PriceQuotation: '价格查询',
        OutPrices: '保外维修参考价格查询',
        ServicePriceList: '的保外维修常用备件参考价',
        Screen: '屏幕组件',
        Motherboard: '主板',
        RearCamera: '后置摄像头',
        Numbersonly: '前置摄像头',
        Battery: '电池',
        OuterCasing: '外壳',
        PriceListNote: '收费说明',
        referenceonly: '以上查询结果为维修配件参考价。无法查询的维修配件价格，请咨询售后服务中心。',
        ServiceCharges: '非保维修收费=往来快递费用+维修配件价+服务费，服务费收费标准如下',
        ServiceLevel: '维修级别',
        ServiceContents: '服务内容',
        ServiceDetails: '维修项目',
        ServiceCharge: '服务费',
        Level0: 'L0级维修',
        Diagnostics: '故障检测，软件升级，配件更换',
        PowerCableAdaptor: '故障检测，软件升级，配件更换（数据线或适配器）',
        four: '4-7欧元',
        Level1: 'L1级维修',
        DisassembleRepair: '拆机维修：机械零部件更换',
        Partsinclude: '机械零部件包括但不限于前壳组件、后壳组件、内置电池、TP组件、显示模组、听筒、扬声器、麦克风、振动器、摄像头、RF连接线、内置天线、按键、FPC等',
        eight: '8-11欧元',
        Level2: 'L2级维修',
        ConnectorReplacement: '拆机维修：接口类期间更换',
        Connectorsinclude: '接口类包括但不限于电池连接器、耳机连接器、IO连接器、SIM卡座、Flash卡座等',
        twelve: '12-15欧元'
    },
    ConfirmPayment: {
        ServiceProgress: '维修进度',
        Payment: '付款',
        Invoice: '费用明细',
        Categories: '费用项目',
        Items: '明细',
        Price: '价格',
        ServiceParts: '备件',
        Screen: '屏幕',
        ServiceCost: '维修费',
        DeliveryCost: '快递费',
        Sentout: '寄出',
        Sentback: '寄回',
        TotalCost: '总价',
        RemaintoPay: '实付',
        WaystoPay: '支付方式',
        Paylater: '稍后再付',
        PayNow: '去付款'
    },
    WarrantyPayment: {
        DiagnosticReport: '检测报告',
        CreateTime: '创建时间',
        AlternativeContact: '相关联系人电话',
        ServiceType: '维修类型',
        PartsCost: '备件费',
        Total: '总计',
        CoveredbyWarranty: '保修覆盖',
        RemaintoPay: '应付',
        DiagnosticResults: '故障原因',
        DeliveryInfo: '客户发货信息',
        DeliveryAddress: '寄件地址',
        Carrier: '寄到网点渠道',
        TrackingNo: '寄到网点运单号',
        Sendlogisticsinfo: '寄出物流信息',
        ReceivedPoint: '网点已收件',
        Paylater: '展示详细信息',
        notrepair: '放弃维修',
        surenotrepair: '您确认放弃维修吗？',
        Deliverytotal: '运费总计',
        sendphone: '拒绝维修后我们会为您寄回你的待维修件，您仅需要支付往返的快递费用，支付完成后我们将为您发货。',
        Continue: '同意报价',
        agreequote: '您确认同意报价吗？',
        TotalCost: ' 费用总计',
        startrepair: ' 同意报价后，我们将开始为您维修，维修完成后您需要按报价金额结算。'
    },
    Warranty: {
        Rate: '评价',
        rateservice: '请给我们打个评分',
        highestcomment: '五星代表满分好评',
        suggestions: '你对我们的服务有什么意见和建议吗？ ',
        Done: '提交评价',
        ShipmentInfo: '网点发货信息',
        deliveryaddress: '网点发货地址',
        Carrier: '网点发货渠道',
        TrackingNo: '网点发货运单号',
        DeliveryInfo: '发货物流信息',
        Receivedcustomer: '客户已收件',
        Servicescore: '维修商服务评分',
        Comments: '服务建议与意见'
    },
    ViewIMEI: {
        CheckIMEI: '查看IMEI',
        Howtocheck: '如何查询手机IMEI号？',
        Method1: '方法一：手机外包装底部查看IMEI。',
        bottompackaging: '包装底部 ',
        Method2: '方法二：拨号查看',
        dialingpage: '打开拨号界面输入 ＊#06#',
        IMEIpageshowed: '弹出显示IMEI窗口',
        Method3: '方法三：在设置里查看。',
        OpenSettings: '打开设置',
        Select: '选择打开 ',
        IMEIshowed: '显示IMEI'
    },
    ...zhLocale
}
