// 定义左侧导航

const list = {
    guide: [],
    beforeComponents: [
        {
            title: '安装',
            titleEn: 'Installation',
            path: '/docs/guide/install'
        }
    ],
    components: [
        {
            type: 'Basic',
            title: '基础',
            list: []
        },
        {
            type: 'Form',
            title: '表单',
            list: [
                {
                    title: 'Input 输入框',
                    path: '/components/input',
                    img: 'input.png',
                    icon: 'ios-compose-outline'
                }
            ]
        },
        {
            type: 'Animation',
            title: '动画',
            list: [{
                title: '圆环',
                path: '/components/MultipleRing',
                img: 'input.png',
                icon: 'load-c'
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
                img: 'input.png',
                icon: 'stats-bars'
            },{
                title: '饼状图',
                path: '/components/pieChart',
                img: 'input.png',
                icon: 'pie-graph'
            },{
                title: '折线图',
                path: '/components/lineChart',
                img: 'input.png',
                icon: 'arrow-graph-up-right'
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
