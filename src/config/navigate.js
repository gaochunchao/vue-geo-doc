// 定义左侧导航

const list = {
    guide: [],
    beforeComponents: [{
        title: '安装',
        titleEn: 'Installation',
        path: '/docs/guide/install'
    }],
    components: [{
            type: 'Basic',
            title: '基础',
            list: [{
                title: '不规则边框',
                path: '/components/irBorder',
                img: 'input.png',
                icon: 'ios-photos-outline'
            },{
                title: '阴影边框',
                path: '/components/shadowBorder',
                img: 'input.png',
                icon: 'ios-photos'
            },{
                title: '标签列表',
                path: '/components/label',
                img: 'input.png',
                icon: 'social-buffer'
            },{
                title: '图例列表',
                path: '/components/legend',
                img: 'input.png',
                icon: 'ios-list'
            },{
                title: '图标列表(数字动态)',
                path: '/components/iconBox',
                img: 'input.png',
                icon: 'android-image'
            }]
        },
        {
            type: 'Form',
            title: '表单',
            list: [

            ]
        },
        {
            type: 'Animation',
            title: '动画',
            list: [{
                title: '圆环',
                path: '/components/MultipleRing',
                img: 'input.png',
                icon: 'pinpoint'
            }, {
                title: '圆形进度条',
                path: '/components/cirPross',
                img: 'input.png',
                icon: 'load-c'
            }, {
                title: '仪表盘',
                path: '/components/gauge',
                img: 'input.png',
                icon: 'speedometer'
            }]
        },
        {
            type: 'Navigation',
            title: '导航',
            list: []
        },
        {
            type: 'Chart',
            title: '图表',
            list: [{
                title: '柱状图',
                path: '/components/barChart',
                icon: 'stats-bars'
            }, {
                title: '折线图',
                path: '/components/lineChart',
                icon: 'ios-pulse-strong'
            }, {
                title: '饼状图',
                path: '/components/pieChart',
                icon: 'pie-graph'
            }, {
                title: '时间轴',
                path: '/components/timelineChart',
                icon: 'more'
            }, {
                title: '表格',
                path: '/components/table',
                icon: 'ios-grid-view'
            }]
        },
        {
            type: 'Other',
            title: '其它',
            list: []
        }
    ],
    practice: [],
    live: []
};

export default list;