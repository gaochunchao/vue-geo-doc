<template>
    <i-article>
        <article>
            <h1>柱状/条形图 </h1>
            <Anchor title="概述" h2></Anchor>
            <p>基本图表组件，通过 柱形的高度/条形的宽度 来表现数据的大小，用于有至少一个类目轴或时间轴的直角坐标系上。</p>
            <Alert show-icon style="margin-top: 16px">基本图表组件。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <bar-chart :xAxis="lrZe.xAxis" :colorList="lrZe.colorList" :series="lrZe.series"
                               :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'"></bar-chart>
                </div>
                <div slot="desc">
                    <p>基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。</p>
                    <p>可以直接设置 style 来改变图表的宽度，默认 100%。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="多条柱状图">
                <div slot="demo">
                    <bar-chart :legend="lrZe1.legend" legPos="left" :xAxis="lrZe1.xAxis" :colorList="lrZe1.colorList" :series="lrZe1.series"
                               :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'"></bar-chart>
                </div>
                <div slot="desc">
                    <p>通过设置<code>legend</code>、<code>colorList</code>和<code>series</code>设置为柱状图个数。</p>
                    <p>通过设置<code>barWidth</code>设置柱状图宽度</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="barChart props" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>width</td>
                        <td>图表宽度，单位 px</td>
                        <td>Number | String</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>图表高度，单位 px</td>
                        <td>Number | String</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>柱状图类型，可选值为<code>normalLine</code>、<code>assumed1</code>、<code>assumed2</code>、<code>assumed3</code>或者不设置</td>
                        <td>String</td>
                        <td>normalLine</td>
                    </tr>
                    <tr>
                        <td>legend</td>
                        <td>图例</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>legShow</td>
                        <td>是否显示图例</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>legCrl</td>
                        <td>图例文字颜色</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>legPos</td>
                        <td>图例位置，可选值为<code>left</code>、<code>center</code>、<code>right</code>或者不设置</td>
                        <td>String</td>
                        <td>right</td>
                    </tr>
                    <tr>
                        <td>stack</td>
                        <td>是否堆叠</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>colors</td>
                        <td>颜色集合</td>
                        <td>Array</td>
                        <td>["#25d4e7", "#fe6b40", "#6bb592"]</td>
                    </tr>
                    <tr>
                        <td>xAxis</td>
                        <td>x轴</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>sShow</td>
                        <td>是否显示圖表分割線</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>isHidden</td>
                        <td>是否隐藏所有线条和刻度</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>series</td>
                        <td>Y轴数据</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>xName</td>
                        <td>X轴单位</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>yName</td>
                        <td>Y轴单位</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>forceGap</td>
                        <td> 如果type为bar,或者设置为true，则图表两边会留白</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>isSymbol</td>
                        <td>是否显示折点</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>isDataZoom</td>
                        <td>图表数据太多需要使用的滚动条和缩放效果,设置这个之后需要设置gridBottom，让滚动条显示在数据下方</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>min</td>
                        <td>最小刻度值</td>
                        <td>Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>最大刻度值</td>
                        <td>Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>axisLineClr</td>
                        <td>刻度线颜色</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>axisLalClr</td>
                        <td>X轴Y轴的文字颜色</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>splitLineClr</td>
                        <td>背景分割线颜色</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>zoomFillCrl</td>
                        <td>滚动条填充颜色</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>zoomStart</td>
                        <td>数据窗口范围的起始百分比</td>
                        <td>Number</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>zoomEnd</td>
                        <td>数据窗口范围的结束百分比</td>
                        <td>Number</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>gridHeight</td>
                        <td>图表高度</td>
                        <td>Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>gridWidth</td>
                        <td>图表宽度</td>
                        <td>Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>gridLeft</td>
                        <td>图表距离左侧的位置</td>
                        <td>Number</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>gridRight</td>
                        <td>图表距离右侧的位置</td>
                        <td>Number</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>gridBottom</td>
                        <td>图表距离底部的距离</td>
                        <td>Number</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>gridTop</td>
                        <td>图表距离顶部的距离</td>
                        <td>Number</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>tooltipFmt</td>
                        <td>tooltip的文字格式化</td>
                        <td>Function</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>axisLabFmt</td>
                        <td>定义X轴刻度的格式（文字太多设置换行）</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>wordsNum</td>
                        <td>tooltip的文字格式化</td>
                        <td>Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>isAssumed</td>
                        <td>是否有预测</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>fillCor</td>
                        <td>normalLine是否填充</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>aColors</td>
                        <td>normalLine填充的颜色</td>
                        <td>Array</td>
                        <td>[["#25d4e7", "#25d4e7"], ["#fe6b40", "#fe6b40"], ["#6bb592", "#6bb592"]]</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="Input events" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>返回值</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <Anchor title="Input slot" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <Anchor title="Input methods" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>方法名</th>
                        <th>说明</th>
                        <th>参数</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/barChart';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code,
                lrZe: {
                    xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    colorList: ["#fe6b40"],
                    series: [
                        {
                            type: "bar",
                            data: [287, 229, 333, 481, 367, 233, 148]
                        }
                    ]
                },
                lrZe1: {
                    legend: ["增幅", "全市累积"],
                    xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    colorList: ["#fe6b40", "#1f7be8"],
                    series: [
                        {
                            type: "bar",
                            data: [287, 229, 333, 481, 367, 233, 148]
                        },{
                            type: "bar",
                            data: [747, 658, 733, 581, 707, 683, 398]
                        }
                    ]
                },
                value: '',
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: '',
                value9: '',
                value10: '',
                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        },
        methods: {

        }
    }
</script>