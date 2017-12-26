<template>
    <i-article>
        <article>
            <h1>柱状/条形图 </h1>
            <Anchor title="概述" h2></Anchor>
            <p>柱状/条形图 通过 柱形的高度/条形的宽度 来表现数据的大小，用于有至少一个类目轴或时间轴的直角坐标系上。</p>
            <Alert show-icon style="margin-top: 16px">基本图表组件。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <bar-chart :xAxis="lrZe.xAxis" :colorList="lrZe.colorList" :series="lrZe.series" :tLabel="{show:false}"></bar-chart>
                </div>
                <div slot="desc">
                    <!-- <p>基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。</p> -->
                    <p>可以直接设置 style 来改变图表的宽高,默认500*300px。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="多条柱状图">
                <div slot="demo">
                    <bar-chart :legend="lrZe1.legend" legPos="left" :xAxis="lrZe1.xAxis" :colorList="lrZe1.colorList" :series="lrZe1.series" :tLabel="{show:false}"></bar-chart>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>legend</code>、
                        <code>colorList</code>和
                        <code>series</code>设置为柱状图个数。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.size }}</i-code>
            </Demo>
            <Demo title="堆叠柱状图">
                <div slot="demo">
                    <bar-chart :legend="lrZe2.legend" :xAxis="lrZe2.xAxis" :colorList="lrZe2.colorList" :series="lrZe2.series" :tLabel="{show:false}" :stack="true"></bar-chart>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>stack</code>可将数据堆叠</p>
                </div>
                <i-code lang="html" slot="code">{{ code.stack }}</i-code>
            </Demo>
            <Demo title="折柱混合">
                <div slot="demo">
                    <bar-chart :legend="lrZe3.legend" :xAxis="lrZe3.xAxis" :colorList="lrZe3.colorList" :series="lrZe3.series" :avDataLine="lrZe3.series[1].amount" :tLabel="{show:false}" :avLineCrl="lrZe3.avLineCrl" :isY="true"></bar-chart>
                </div>
                <div slot="desc">
                    <p>通过设置 series 的 type 可实现折柱混合</p>
                    <p>通过设置
                        <code>isY</code>可显示折线的Y轴</p>
                    <p>通过设置
                        <code>avDataLine</code>或者
                        <code>avDataBar</code>可设置对应的平均线</p>
                    <p>通过设置
                        <code>avLineCrl</code>或者
                        <code>avBarCrl</code>可设置平均线的颜色</p>
                </div>
                <i-code lang="html" slot="code">{{ code.mix }}</i-code>
            </Demo>
            <Demo title="缩放图表">
                <div slot="demo">
                    <bar-chart :legend="lrZe.legend" :xAxis="lrZe.xAxis" :colorList="lrZe.colorList" :series="lrZe.series" :tLabel="{show:false}" :isDataZoom="true" :grid="{bottom:75}" :axisLabFmt="true" :wordsNum="1"></bar-chart>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>isDataZoom</code>来实现图表缩放</p>
                    <p>! 这个功能必须配合
                        <code>grid</code>来使用，通过gridBottom来设置滚动条的位置</p>
                    <p>通过设置
                        <code>axisLabFmt</code>来让x轴文字换行</p>
                    <p>通过设置
                        <code>wordsNum</code>来设置每行字数</p>
                </div>
                <i-code lang="html" slot="code">{{ code.zoom }}</i-code>
            </Demo>
            <Demo title="带背景的图表">
                <div slot="demo">
                    <bar-chart :legend="lrZe.legend" :xAxis="lrZe.xAxis" :colorList="lrZe.colorList" :series="lrZe.series" :percent="true" :isHidden="true" :isBgc="true" :grid="{left:20}"></bar-chart>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>percent</code>来显示图表所占总数百分比</p>
                    <p>通过设置
                        <code>isHidden</code>来隐藏所有XY轴线条</p>
                    <p>通过设置
                        <code>isBgc</code>来设置柱子背景</p>
                </div>
                <i-code lang="html" slot="code">{{ code.bgc }}</i-code>
            </Demo>
            <Demo title="横向图表">
                <div slot="demo">
                    <bar-chart :legend="lrZe.legend" :xAxis="lrZe.xAxis" :colorList="lrZe.colorList" :series="lrZe.series" :changeDir="true" :axisLineClr="'rgba(0,0,0,0)'" :tLabel="lrZe.tLabel" ></bar-chart>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>changeDir</code>来改变图表的显示方向</p>
                    <p>通过设置
                        <code>tLabel</code>来设置文字的显示位置、颜色</p>
                </div>
                <i-code lang="html" slot="code">{{ code.H }}</i-code>
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
                            <td>组件宽度，单位 px</td>
                            <td>Number | String</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>组件高度，单位 px</td>
                            <td>Number | String</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>xAxis</td>
                            <td>x轴</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>series</td>
                            <td>Y轴数据</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>colorList</td>
                            <td>颜色集合</td>
                            <td>Array</td>
                            <td>["#25d4e7", "#fe6b40", "#6bb592"]</td>
                        </tr>
                        <tr>
                            <td>lineColors</td>
                            <td>当折柱混合，且柱状图是隔行变色时，单独设置折线的颜色</td>
                            <td>Array</td>
                            <td>["#25d4e7", "#fe6b40", "#6bb592"]</td>
                        </tr>
                        <tr>
                            <td>legend</td>
                            <td>图例</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>legCrl</td>
                            <td>图例文字颜色</td>
                            <td>String</td>
                            <td>#000</td>
                        </tr>
                        <tr>
                            <td>legShow</td>
                            <td>是否显示图例</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>legPos</td>
                            <td>图例位置，可选值为
                                <code>left</code>、
                                <code>center</code>、
                                <code>right</code>或者不设置</td>
                            <td>String</td>
                            <td>right</td>
                        </tr>
                        <tr>
                            <td>barWidth</td>
                            <td>柱宽</td>
                            <td>Number</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>barGap</td>
                            <td>柱状之间的距离</td>
                            <td>Number</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>stack</td>
                            <td>是否堆叠</td>
                            <td>Boolean</td>
                            <td>false</td>
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
                            <td>lineName</td>
                            <td>折柱混合图的情况下，单独设置折线图Y轴的名称</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>lUnit</td>
                            <td>设置label时,如果需要在数据后面加单位</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>isMix</td>
                            <td>是否需要隔行变色</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>isY</td>
                            <td>是否显示折线的Y轴</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>isHidden</td>
                            <td>是否隐藏所有线条和刻度(X轴的标签不会隐藏,如不需要,可设置axisLalClr为透明色)</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>isDataZoom</td>
                            <td>设置图表缩放效果,设置这个之后需要设置gridBottom，让滚动条显示在数据下方</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>zoomFillCrl</td>
                            <td>滚动条填充颜色</td>
                            <td>String</td>
                            <td>grey</td>
                        </tr>
                        <tr>
                            <td>zoomBgcCrl</td>
                            <td>滚动条背景颜色</td>
                            <td>String</td>
                            <td>#fff</td>
                        </tr>
                        <tr>
                            <td>zoomBorCrl</td>
                            <td>滚动条边框颜色</td>
                            <td>String</td>
                            <td>grey</td>
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
                            <td>axisLineClr</td>
                            <td>刻度线颜色</td>
                            <td>String</td>
                            <td>#000</td>
                        </tr>
                        <tr>
                            <td>axisLalClr</td>
                            <td>X轴Y轴的文字颜色</td>
                            <td>String</td>
                            <td>#000</td>
                        </tr>
                        <tr>
                            <td>splitLineClr</td>
                            <td>背景分割线颜色</td>
                            <td>String</td>
                            <td>#ddd</td>
                        </tr>
                        <tr>
                            <td>axisLabFmt</td>
                            <td>定义X轴刻度的格式（文字太多设置换行）</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>wordsNum</td>
                            <td>设置X轴文字每行的字数</td>
                            <td>Number</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>isBgc</td>
                            <td>是否需要柱状背景色</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>avDataBar</td>
                            <td>与柱状图对应的平均线</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>avDataLine</td>
                            <td>折线图对应的平均线</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>avLineCrl</td>
                            <td>折线平均线颜色</td>
                            <td>Array</td>
                            <td>["#fe6b40", "#edea10"]</td>
                        </tr>
                        <tr>
                            <td>avBarCrl</td>
                            <td>柱子平均线颜色</td>
                            <td>Array</td>
                            <td>["#edea10","#fe6b40"]</td>
                        </tr>
                        <tr>
                            <td>avPosition</td>
                            <td>平均线数值的位置，可选值为
                                <code>start</code>、
                                <code>middle</code>、
                                <code>end</code>或者不设置</td>
                            <td>String</td>
                            <td>middle</td>
                        </tr>
                        <tr>
                            <td>percent</td>
                            <td>显示每条数据所占百分比</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>changeDir</td>
                            <td>更改图表展示方向</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>barEvent</td>
                            <td>bar点击事件</td>
                            <td>Object</td>
                            <td>
                                eventType: "",<br> callBack: null
                            </td>
                        </tr>
                        <tr>
                            <td>tLabel</td>
                            <td>设置label的位置，颜色，内容</td>
                            <td>Object</td>
                            <td>
                                show: true,<br> position: "top",<br> formatter: "{c}" + this.lUnit,<br> textStyle: { <br> color: "#000"<br> }
                            </td>
                        </tr>
                        <tr>
                            <td>grid</td>
                            <td>图表宽高，以及距上下左右的边距</td>
                            <td>Object</td>
                            <td> height: Number,<br> width: Number,<br> top: 30,<br> bottom: 5,<br> left: 10,<br> right: 15,<br> containLabel: true
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="bar events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                        <tr>
                            <td>click</td>
                            <td>点击柱子时触发</td>
                            <td>callBack: (params) => {}</td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <Anchor title="bar slot" h3></Anchor>
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
                <Anchor title="bar methods" h3></Anchor>
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
import Code from "../../code/barChart";
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
      lrZe: {
        xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        colorList: ["#fe6b40"],
        series: [
          {
            type: "bar",
            data: [287, 229, 333, 481, 367, 233, 148]
          }
        ],
        tLabel: {
          show: true,
          position: "right",
          formatter: "{c}",
          textStyle: {
            color: "#000"
          }
        }
      },
      lrZe1: {
        legend: ["增幅", "全市累积"],
        xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        colorList: ["#fe6b40", "#1f7be8"],
        series: [
          {
            type: "bar",
            data: [287, 229, 333, 481, 367, 233, 148]
          },
          {
            type: "bar",
            data: [747, 658, 733, 581, 707, 683, 398]
          }
        ]
      },
      lrZe2: {
        legend: ["增幅", "全市累积", "年度利率"],
        xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        colorList: ["#fe6b40", "#1f7be8", "#AF83E8"],
        series: [
          {
            type: "bar",
            data: [287, 229, 333, 481, 367, 233, 148]
          },
          {
            type: "bar",
            data: [747, 658, 733, 581, 707, 683, 398]
          },
          {
            type: "bar",
            data: [132, 102, 111, 254, 156, 148, 179]
          }
        ]
      },
      lrZe3: {
        legend: ["增幅", "全市累积"],
        xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        colorList: ["#fe6b40", "#1f7be8"],
        avLineCrl: ["#AF83E8"],
        series: [
          {
            type: "bar",
            data: [287, 229, 333, 481, 367, 233, 148]
          },
          {
            type: "line",
            amount: [510],
            data: [747, 658, 733, 581, 707, 683, 398]
          }
        ]
      },
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",
      value11: "",
      value12: "",
      value13: "",
      select1: "http",
      select2: "com",
      select3: "day"
    };
  },
  methods: {}
};
</script>