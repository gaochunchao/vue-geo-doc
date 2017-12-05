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
            list: []
        },
        {
            type: 'Navigation',
            title: '导航',
            list: []
        },
        {
            type: 'Chart',
            title: '图表',
            list: []
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
