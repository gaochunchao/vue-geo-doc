<template>
    <i-article>
        <article>
            <h1>时间轴图表</h1>
            <Anchor title="概述" h2></Anchor>
            <p>时间轴图表可以更直观的看到不同时期的数据变化。</p>
            <Alert show-icon style="margin-top: 16px">高级图表组件。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <timeline-bar :colors="jjzlLine.colors" :xAxis="jjzlLine.xAxis" :timeData="jjzlLine.timeData" :series="jjzlLine.series"></timeline-bar>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>style</code> 来改变图表的宽高,默认500*300px。</p>
                    <p>通过
                        <code>timelineData</code> 来设置时间轴的文字。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="基础用法">
                <div slot="demo">
                    <timeline-bar :colors="jjzlLine.colors" :xAxis="jjzlLine.xAxis" :timeData="jjzlLine.timeData" :series="jjzlLine.series" :xAxisDec="jjzlLine.xAxisDec" :yAxisDec="jjzlLine.yAxisDec"></timeline-bar>
                </div>
                <div slot="desc">
                    <p>通过
                        <code>xAxisDec</code> 来设置X轴的各个属性</p>
                    <p>通过
                        <code>yAxisDec</code> 来设置Y轴的各个属性</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base2 }}</i-code>
            </Demo>
            <Demo title="基础用法">
                <div slot="demo">
                    <timeline-bar :colors="jjzlLine.colors" :xAxis="jjzlLine.xAxis" :timeData="jjzlLine.timeData" :series="jjzlLine.series" :xAxisDec="jjzlLine.xAxisDec" :yAxisDec="jjzlLine.yAxisDec" :type="'bar'"></timeline-bar>
                </div>
                <div slot="desc">
                    <p>通过
                        <code>type</code> 改变图表类型</p>
                    <p>通过
                        <code>kewwords</code> 来设置相应的数据变色</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base3 }}</i-code>
            </Demo>
            <Demo title="基础用法">
                <div slot="demo">
                    <timeline-bar :colors="jjzlLine1.colors" :xAxis="jjzlLine1.xAxis" :timeData="jjzlLine1.timeData" :series="jjzlLine1.series" :xAxisDec="jjzlLine1.xAxisDec" :yAxisDec="jjzlLine1.yAxisDec" :type="'bar'" :tLabel="jjzlLine1.tLabel" :tLine="jjzlLine1.tLine" :grid="{top:40,left:40,right:40,bottom:0}"></timeline-bar>
                </div>
                <div slot="desc">
                    <p>通过
                        <code>tLabel</code> 改变提示文字的位置、内容和颜色</p>
                    <p>通过
                        <code>tLine</code> 来设置时间轴的各个参数</p>
                    <p>通过
                        <code>grid</code> 来设置图表的高宽和四周边距</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base4 }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="timelineChart props" h3></Anchor>
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
                            <td>x轴数据</td>
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
                            <td>timeData</td>
                            <td>时间轴数据</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>colors</td>
                            <td>颜色集合</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>keyWord</td>
                            <td>要变色的关键字</td>
                            <td>String</td>
                            <td>"孝感"</td>
                        </tr>
                        <tr>
                            <td>lUnit</td>
                            <td>设置提示文字的单位</td>
                            <td>String</td>
                            <td>""</td>
                        </tr>
                        <tr>
                            <td>barWidth</td>
                            <td>柱子的宽度</td>
                            <td>Number</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>timer</td>
                            <td>切换的速度</td>
                            <td>Number</td>
                            <td>3000</td>
                        </tr>
                        <tr>
                            <td>timelineLabel</td>
                            <td>设置时间轴的文字是否显示及位置</td>
                            <td>Object</td>
                            <td>{ show: "true", position: 10 };
                            </td>
                        </tr>
                        <tr>
                            <td>tColors</td>
                            <td>时间轴颜色(第一个为轴的颜色，第二个为点的颜色)</td>
                            <td>Array</td>
                            <td>[]</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>图表类型，可选值为
                                <code>line</code>、
                                <code>bar</code>
                                或者不设置
                            </td>
                            <td>String</td>
                            <td>"line"</td>
                        </tr>
                        <tr>
                            <td>tLine</td>
                            <td>设置时间轴的位置以及是否显示</td>
                            <td>Object</td>
                            <td>{ <br> show: true, <br> top: "80%", <br> left: "10%", <br> right: "5%" <br> };
                            </td>
                        </tr>
                        <tr>
                            <td>tLabel</td>
                            <td>设置提示文字是否显示，位置，格式及颜色</td>
                            <td>Object</td>
                            <td>
                                { <br> show: true, <br> position: "top", <br> formatter: "{c}" + this.lUnit, <br> textStyle: { color: "#000" } <br> };
                            </td>
                        </tr>
                        <tr>
                            <td>grid</td>
                            <td>图表的宽高及距四周的边距</td>
                            <td>Object</td>
                            <td>{ <br> height: Number, <br> width: Number, <br> top: 20, <br> bottom: 60, <br> left: 10, <br> right: 15, <br> containLabel: true <br> };
                            </td>
                        </tr>
                        <tr>
                            <td>xAxisDec</td>
                            <td>设置整个x轴的样式</td>
                            <td>Object</td>
                            <td>{ <br> type: "category", <br> axisLine: { show: true }, <br> axisTick: { show: true }, <br> axisLabel: { show: true}, <br> textStyle: { color: "#9D9EA0", fontSize: 12 },<br>splitLine: { show: true }, <br> data: this.xAxis<br> };
                            </td>
                        </tr>
                        <tr>
                            <td>yAxisDec</td>
                            <td>设置整个Y轴的样式</td>
                            <td>Object</td>
                            <td>{ <br> type: "value", <br> axisLine: { show: true }, <br> axisTick: { show: true }, <br> axisLabel: { show: true}, <br> textStyle: { color: "#9D9EA0", fontSize: 12 <br>}, splitLine: { show: false }, <br> data: [] <br> };
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="timelineChart events" h3></Anchor>
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
                <Anchor title="timelineChart slot" h3></Anchor>
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
                <Anchor title="timelineChart methods" h3></Anchor>
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
import Code from "../../code/timelineChart";
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
      jjzlLine: {
        colors: ["#25d4e7", "#fe6b40"],
        timeData: ["2012", "2013", "2014", "2015", "2016"],
        xAxis: ["黄石", "十堰", "荆州", "荆门", "孝感", "黄冈"],
        series: [
          [747, 658, 733, 581, 707, 562],
          [733, 581, 707, 683, 398, 586],
          [398, 595, 658, 733, 581, 456],
          [543, 435, 420, 635, 710, 580],
          [453, 530, 472, 382, 637, 560]
        ],
        xAxisDec: {
          type: "category",
          axisLabel: { show: true },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: ["黄石", "十堰", "荆州", "荆门", "孝感", "黄冈"]
        },
        yAxisDec: {
          type: "value",
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: true },
          data: []
        }
      },
      jjzlLine1: {
        colors: ["#25d4e7", "#fe6b40"],
        timeData: ["2012", "2013", "2014", "2015", "2016"],
        xAxis: ["黄石", "十堰", "荆州", "荆门", "孝感", "黄冈"],
        series: [
          [747, 658, 733, 581, 707, 562],
          [733, 581, 707, 683, 398, 586],
          [398, 595, 658, 733, 581, 456],
          [543, 435, 420, 635, 710, 580],
          [453, 530, 472, 382, 637, 560]
        ],
        xAxisDec: {
          type: "value",
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: []
        },
        yAxisDec: {
          type: "category",
          axisLabel: { show: true },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: ["黄石", "十堰", "荆州", "荆门", "孝感", "黄冈"]
        },
        tLabel: {
          show: true,
          position: [400, 0],
          formatter: "{c}" + "亿元",
          textStyle: {
            color: "#000"
          }
        },
        tLine: {
          show: true,
          top: 0,
          left: "5%",
          right: "10%"
        }
      }
    };
  },
  methods: {}
};
</script>