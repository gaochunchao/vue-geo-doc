<template>
    <i-article>
        <article>
            <h1>饼状图 </h1>
            <Anchor title="概述" h2></Anchor>
            <p>基本图表组件，饼图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例。</p>
            <Alert show-icon style="margin-top: 16px">饼图更适合表现数据相对于总数的百分比等关系。如果只是表示不同类目数据间的大小，建议使用 柱状图，人们对于微小的弧度差别相比于微小的长度差别更不敏感，或者也可以通过配置 roseType 显示成南丁格尔图，通过半径大小区分数据的大小。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="横向饼状图">
                <div slot="demo">
                    <pie-chart :colors="fsPie.colors" :item-data="fsPie.itemData" :selected="false" :radius='[38, 52]' unit="%"></pie-chart>
                </div>
                <div slot="desc">
                    <p>可以直接设置 style 来改变图表的宽度，默认 398 * 160px。</p>
                    <p>通过设置
                        <code>radius</code>来设置饼图的大小</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="纵向饼状图">
                <div slot="demo">
                    <pie-chart :type="'h'" :height="200" :width="180" :colors="fsPie.colors" :selected="false" :item-data="fsPie.itemData" :radius='[38, 52]' unit="%" :chartHeight="'55'"></pie-chart>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>type</code>来改变图表和图例的方向</p>
                    <p>通过设置
                        <code>chartHeight</code>来控制图表的高度</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="重合饼状图">
                <div slot="demo">
                    <pie-chart text="经济" :colors="fsPie.colors" :itemData="fsPie.itemData" :selected="false" unit="%" :kind="'overlayPie'" :radius="[['40%','60%'],['50%','70%'],['60%','80%']]" :startAngle="[40,30,45]"></pie-chart>
                </div>
                <div slot="desc">
                        <p>通过<code>kind</code>来改变图表的类型</p>
                        <p>通过<code>startAngle</code>来改变每个环形开始的角度</p>
                        <p>通过<code>text</code>可以增加中间的文字</p>
                </div>
                <i-code lang="html" slot="code">{{ code.cover }}</i-code>
            </Demo>
            <Demo title="多层饼状图">
                <div slot="demo">
                    <pieChart text="经济" :colors="fsPie.colors" :itemData="fsPie.itemData" :selected="false" :kind="'overlayPie'" :radius="[['40%','50%'],['50%','60%'],['60%','70%']]" :percent="true" :startAngle="[90,90,90]" unit="人" :hasRatio="true"></pieChart>
                </div>
                <div slot="desc">
                        <p>通过<code>percent</code>判断环形的比例是依据总和还是其中某一项作为总数</p>
                        <p>通过<code>unit</code>来添加提示框单位</p>
                        <p>通过<code>hasRatio</code>来显示所占百分比</p>
                </div>
                <i-code lang="html" slot="code">{{ code.multi }}</i-code>
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
                            <td>饼形图横向或者纵向，可选
                                <code>v</code>、
                                <code>h</code>或者不设置</td>
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
                            <td>chartWidth</td>
                            <td>饼形图的高度</td>
                            <td>String</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>colors</td>
                            <td>颜色</td>
                            <td>Array</td>
                            <td>["#25d4e7", "#fe6b40", "#6bb592"]</td>
                        </tr>
                        <tr>
                            <td>radius</td>
                            <td>内外环的直径</td>
                            <td>Array</td>
                            <td> [38, 50]</td>
                        </tr>
                        <tr>
                            <td>unit</td>
                            <td>提示框单位</td>
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
                            <td>percent</td>
                            <td>判断环形的比例是依据总和还是其中某一项作为总数</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>titleCor</td>
                            <td>中间文字颜色</td>
                            <td>String</td>
                            <td>#000</td>
                        </tr>
                        <tr>
                            <td>qty</td>
                            <td>是否显示数据总和</td>
                            <td>Boolean</td>
                            <td>false</td>
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
                            <td>tShow</td>
                            <td>是否显示overlay类型图表的提示框</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>hasRatio</td>
                            <td>图例上面是否显示百分比</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>kind</td>
                            <td> 饼形图展现形式，可选
                                <code>normalPie</code>、
                                <code>overlayPie</code>或者不设置</td>
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
                <Anchor title="pieChart events" h3></Anchor>
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
                <Anchor title="pieChart slot" h3></Anchor>
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
                <Anchor title="pieChart methods" h3></Anchor>
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
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Demo from "../../components/demo.vue";
import Code from "../../code/pieChart";
import Anchor from "../../components/anchor.vue";

export default {
  components: {
    iArticle,
    iCode,
    Demo,
    Anchor
  },
  data() {
    return {
      code: Code,
      fsPie: {
        colors: ["#25D4E7", "#FE6B40", "#459DF7", "#AF83E8"],
        title: "工业废水行业分布",
        itemData: [
          {
            value: 26,
            name: "造纸和纸制品业"
          },
          {
            value: 24,
            name: "金属制品业"
          },
          {
            value: 22,
            name: "纺织业"
          }
        ]
      }
    };
  },
};
</script>
<style>
ul{
    list-style: none;
}
</style>
