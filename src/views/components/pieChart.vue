<template>
    <i-article>
        <article>
            <h1>饼状图 </h1>
            <Anchor title="概述" h2></Anchor>
            <p>基本图表组件，饼图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例。</p>
            <Alert show-icon style="margin-top: 16px">饼图更适合表现数据相对于总数的百分比等关系。如果只是表示不同类目数据间的大小，建议使用 柱状图，人们对于微小的弧度差别相比于微小的长度差别更不敏感，或者也可以通过配置 roseType 显示成南丁格尔图，通过半径大小区分数据的大小。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <pieChart text="经济" :colors="fsPie.colors" :item-data="fsPie.itemData" :selected="false" :radius='[38, 52]'
                              unit="%"></pieChart>
                </div>
                <div slot="desc">
                    <p>基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。</p>
                    <p>可以直接设置 style 来改变图表的宽度，默认 100%。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="多条柱状图">
                <div slot="demo">
                    <pieChart :type="'h'" :height="150" :width="180" :colors="fsPie.colors" :item-data="fsPie.itemData"
                              :selected="false" :radius='[38, 52]' unit="%"></pieChart>
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
                        <td>398</td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>图表高度，单位 px</td>
                        <td>Number | String</td>
                        <td>160</td>
                    </tr>
                    <tr>
                        <td>tColor</td>
                        <td>图例文字颜色</td>
                        <td>String</td>
                        <td>#000</td>
                    </tr>
                    <tr>
                        <td>type</td>
                        <td>饼形图横向或者纵向，可选<code>v</code>、<code>h</code>或者不设置</td>
                        <td>String</td>
                        <td>v</td>
                    </tr>
                    <tr>
                        <td>selected</td>
                        <td>是否默认被选中状态</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>chartWidth</td>
                        <td>饼形图的宽度</td>
                        <td>String</td>
                        <td>45</td>
                    </tr>
                    <tr>
                        <td>colors</td>
                        <td>颜色</td>
                        <td>Array</td>
                        <td>["#22afc3", "#ff6633"]</td>
                    </tr>
                    <tr>
                        <td>radius</td>
                        <td>内外环的直径</td>
                        <td>Array</td>
                        <td> [38, 50]</td>
                    </tr>
                    <tr>
                        <td>unit</td>
                        <td>单位</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>itemData</td>
                        <td>数据</td>
                        <td>Array</td>
                        <td>[ {value: -, name: ""}]</td>
                    </tr>
                    <tr>
                        <td>text</td>
                        <td>饼图中间文字</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>titleCor</td>
                        <td>中间文字颜色</td>
                        <td>String</td>
                        <td>#000</td>
                    </tr>
                    <tr>
                        <td>qty</td>
                        <td>是否显示中间数字</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>secText</td>
                        <td>自定义中间数字显示内容</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>textFont</td>
                        <td>中间文字大小</td>
                        <td>Number</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>kind</td>
                        <td> 饼形图展现形式，可选<code>normalPie</code>、<code>overlayPie</code>或者不设置</td>
                        <td>String</td>
                        <td>normalPie</td>
                    </tr>
                    <tr>
                        <td>startAngle</td>
                        <td>开始旋转的角度</td>
                        <td>Array</td>
                        <td>[40, 30, 60]</td>
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
                fsPie: {
                    colors: ["#25D4E7", "#FE6B40", "#459DF7", "#AF83E8", "#EBAE43"],
                    title: "工业废水行业分布",
                    itemData: [
                        {
                            value: 26,
                            name: "造纸和纸制品业"
                        },
                        {
                            value: 22,
                            name: "金属制品业"
                        },
                        {
                            value: 24,
                            name: "纺织业"
                        },
                        {
                            value: 29,
                            name: "其他"
                        }
                    ]
                }
            }
        },
        methods: {

        }
    }
</script>