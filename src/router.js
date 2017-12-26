/**
 * Created by aresn on 16/8/22.
 */

const routers = [{
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/docs/guide/install',
        meta: {
            title: '安装'
        },
        component: (resolve) => require(['./views/guide/install.vue'], resolve)
    }, {
        path: '/components/irBorder',
        meta: {
            title: '不规则边框'
        },
        component: (resolve) => require(['./views/components/irBorder.vue'], resolve)
    },{
        path: '/components/shadowBorder',
        meta: {
            title: '阴影边框'
        },
        component: (resolve) => require(['./views/components/shadowBorder.vue'], resolve)
    },
    {
        path: '/components/iconBox',
        meta: {
            title: '图标列表'
        },
        component: (resolve) => require(['./views/components/iconBox.vue'], resolve)
    },{
        path: '/components/label',
        meta: {
            title: '标签列表'
        },
        component: (resolve) => require(['./views/components/label.vue'], resolve)
    },{
        path: '/components/legend',
        meta: {
            title: '图例列表'
        },
        component: (resolve) => require(['./views/components/legend.vue'], resolve)
    },
    {
        path: '/components/MultipleRing',
        meta: {
            title: '动画圆环'
        },
        component: (resolve) => require(['./views/components/MultipleRing.vue'], resolve)
    },
    {
        path: '/components/cirPross',
        meta: {
            title: '圆形进度条'
        },
        component: (resolve) => require(['./views/components/cirPross.vue'], resolve)
    }, {
        path: '/components/gauge',
        meta: {
            title: '仪表盘'
        },
        component: (resolve) => require(['./views/components/gauge.vue'], resolve)
    },
    {
        path: '/components/barChart',
        meta: {
            title: '柱状图'
        },
        component: (resolve) => require(['./views/components/barChart.vue'], resolve)
    },
    {
        path: '/components/lineChart',
        meta: {
            title: '折线图'
        },
        component: (resolve) => require(['./views/components/lineChart.vue'], resolve)
    },
    {
        path: '/components/pieChart',
        meta: {
            title: '饼状图'
        },
        component: (resolve) => require(['./views/components/pieChart.vue'], resolve)
    },
    {
        path: '/components/timelineChart',
        meta: {
            title: '时间轴'
        },
        component: (resolve) => require(['./views/components/timelineChart.vue'], resolve)
    },
    {
        path: '/components/table',
        meta: {
            title: '表格'
        },
        component: (resolve) => require(['./views/components/table.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;