/**
 * Created by aresn on 16/8/22.
 */

const routers = [
    {
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
    },
    {
        path: '/components/input',
        meta: {
            title: '输入框 Input'
        },
        component: (resolve) => require(['./views/components/input.vue'], resolve)
    },
    {
        path: '/components/MultipleRing',
        meta: {
            title: '动画圆环'
        },
        component: (resolve) => require(['./views/components/MultipleRing.vue'], resolve)
    },
    {
        path: '/components/barChart',
        meta: {
            title: '柱状图'
        },
        component: (resolve) => require(['./views/components/barChart.vue'], resolve)
    },
    {
        path: '/components/pieChart',
        meta: {
            title: '饼状图'
        },
        component: (resolve) => require(['./views/components/pieChart.vue'], resolve)
    },
    {
        path: '/components/lineChart',
        meta: {
            title: '折线图'
        },
        component: (resolve) => require(['./views/components/lineChart.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;
