<template>
    <i-article>
        <article>
            <h1>折线图 </h1>
            <Anchor title="概述" h2></Anchor>
            <p>折线图是用折线将各个数据点标志连接起来的图表，用于展现数据的变化趋势</p>
            <Alert show-icon style="margin-top: 16px">基本图表组件。</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <line-Chart :legend="jjzlLine.legend" :xAxis="jjzlLine.xAxis" :series="jjzlLine.series" :colors="jjzlLine.colors" :forceGap="true" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :stack="true"></line-Chart>
                </div>
                <div slot="desc">
                    <p>通过
                        <code>style</code> 来改变图表的宽高,默认500*300px</p>
                    <p>通过
                        <code>forceGap</code> 来设置图表两边是否留白</p>
                    <p>通过
                        <code>stack</code> 来设置折线是否重合</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="增加折点">
                <div slot="demo">
                    <line-Chart :legend="jjzlLine1.legend" :xAxis="jjzlLine1.xAxis" :series="jjzlLine1.series" :colors="jjzlLine1.colors" :forceGap="true" :isSymbol="true" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :min="100" :max="130"></line-Chart>
                </div>
                <div slot="desc">
                    <p>通过
                        <code>isSymbol</code> 来增加折点</p>
                    <p>通过
                        <code>min</code> 和
                        <code>max</code>来设置数值区间（适用于数值差异较小的数据）</p>
                </div>
                <i-code lang="html" slot="code">{{ code.symbol }}</i-code>
            </Demo>
            <Demo title="预测数据（虚线）">
                <div slot="demo">
                    <line-Chart :type="'assumed2'" :legend="jjzlLine3.legend" :xAxis="jjzlLine3.xAxis" :series="jjzlLine3.series" :colors="jjzlLine3.colors" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :forceGap="true" :tooltipFmt="jjzlLine3.tooltipFmt"></line-Chart>
                </div>
                <div slot="desc">
                    <p>通过
                        <code>type</code>来展示预测数据</p>
                    <p>通过
                        <code>tooltipFmt</code>来自定义提示框文字</p>
                </div>
                <i-code lang="html" slot="code">{{ code.assumed2 }}</i-code>
            </Demo>
            <Demo title="预测数据（变色）">
                <div slot="demo">
                    <line-Chart :type="'assumed3'" :legend="jjzlLine3.legend" :xAxis="jjzlLine3.xAxis" :series="jjzlLine3.series" :colors="jjzlLine3.colors" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :forceGap="true" :tooltipFmt="jjzlLine3.tooltipFmt" :isDataZoom="true" :grid="{bottom:75}"></line-Chart>
                </div>
                <div slot="desc">
                    <p>通过
                        <code>isDataZoom</code>来设置图表缩放效果</p>
                    <p>通过
                        <code>grid</code>来设置图表宽高及四周边距</p>
                </div>
                <i-code lang="html" slot="code">{{ code.assumed3 }}</i-code>
            </Demo>
            <Demo title="填充区域">
                <div slot="demo">
                    <line-Chart :legend="jjzlLine2.legend" :xAxis="jjzlLine2.xAxis" :series="jjzlLine2.series" :colors="jjzlLine2.colors" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :fillCor="true" :aColors="jjzlLine2.aColors"></line-Chart>
                </div>
                <div slot="desc">
                    <p>通过
                        <code>fillCor</code> 来设置是否填充颜色</p>
                    <p>通过
                        <code>aColors</code>来设置填充的颜色</p>
                </div>
                <i-code lang="html" slot="code">{{ code.fill }}</i-code>
            </Demo>
            <Demo title="预测数据（填充）">
                <div slot="demo">
                    <line-Chart :type="'assumed1'" :legend="jjzlLine3.legend" :xAxis="jjzlLine3.xAxis" :series="jjzlLine3.series" :colors="jjzlLine3.colors" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :tooltipFmt="jjzlLine3.tooltipFmt" :sShow="false"></line-Chart>
                </div>
                <div slot="desc">
                    <p>通过
                        <code>colors</code>来设置图表的填充颜色</p>
                    <p>通过
                        <code>sShow</code>来隐藏图表分割线</p>
                </div>
                <i-code lang="html" slot="code">{{ code.assumed1 }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="lineChart props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>组件宽度</td>
                            <td>Number | String</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>组件高度</td>
                            <td>Number | String</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>xAxis</td>
                            <td>X轴数据</td>
                            <td>Array</td>
                            <td>[ ]</td>
                        </tr>
                        <tr>
                            <td>series</td>
                            <td>Y轴数据</td>
                            <td>Array</td>
                            <td>[ ]</td>
                        </tr>
                        <tr>
                            <td>legend</td>
                            <td>图例</td>
                            <td>Array</td>
                            <td>[ ]</td>
                        </tr>
                        <tr>
                            <td>legCrl</td>
                            <td>图例文字颜色</td>
                            <td>String</td>
                            <td>"#000"</td>
                        </tr>
                        <tr>
                            <td>legPos</td>
                            <td>图例位置，可选值为
                                <code>left</code>、
                                <code>center</code>、
                                <code>right</code>或者不设置</td>
                            <td>String</td>
                            <td>"right"</td>
                        </tr>
                        <tr>
                            <td>legShow</td>
                            <td>是否显示图例</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>stack</td>
                            <td>是否堆叠</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>sShow</td>
                            <td>是否显示背景格子线</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>isHidden</td>
                            <td>是否隐藏所有的线条和刻度</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>xName</td>
                            <td>X轴单位</td>
                            <td>String</td>
                            <td>" "</td>
                        </tr>
                        <tr>
                            <td>yName</td>
                            <td>Y轴单位</td>
                            <td>String</td>
                            <td>" "</td>
                        </tr>
                        <tr>
                            <td>isSymbol</td>
                            <td>是否显示折点</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>symbol</td>
                            <td>折点形状，可选值为
                                <code>circle</code>、
                                <code>emptyCircle</code>或者不设置</td>
                            <td>String</td>
                            <td>"emptyCircle"</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>最小刻度值</td>
                            <td>Number</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>最大刻度值</td>
                            <td>Number</td>
                            <td>null</td>
                        </tr>
                        <tr>
                            <td>axisLineClr</td>
                            <td>X轴Y轴刻度线颜色</td>
                            <td>String</td>
                            <td>"#000"</td>
                        </tr>
                        <tr>
                            <td>axisLalClr</td>
                            <td>X轴Y轴的文字颜色</td>
                            <td>String</td>
                            <td>"#000"</td>
                        </tr>
                        <tr>
                            <td>splitLineClr</td>
                            <td>背景格子线条颜色</td>
                            <td>String</td>
                            <td>"#000"</td>
                        </tr>
                        <tr>
                            <td>zoomFillCrl</td>
                            <td>滚动条填充颜色</td>
                            <td>String</td>
                            <td>"grey"</td>
                        </tr>
                        <tr>
                            <td>zoomBgcCrl</td>
                            <td>滚动条背景色</td>
                            <td>String</td>
                            <td>"#fff"</td>
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
                            <td>fillCor</td>
                            <td>图表类型为nomarlLine时是否需要填充颜色</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>aColors</td>
                            <td>图表类型为nomarlLine时的填充颜色</td>
                            <td>Array</td>
                            <td>[ ]</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>图表类型，可选值为
                                <code>normalLine</code>、
                                <code>assumed1</code>、
                                <code>assumed2</code>、
                                <code>assumed3</code>、 或者不设置
                            </td>
                            <td>String</td>
                            <td>"normalLine"</td>
                        </tr>
                        <tr>
                            <td>isDataZoom</td>
                            <td>是否需要缩放图表(可用鼠标滚轮操控),设置这个之后需要设置gridBottom，让滚动条显示在数据下方</td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>colors</td>
                            <td>颜色集合(如果是assumed1类型的图表，则第一个颜色为实际数据的颜色，第二个颜色为预测数据的颜色，从第三个颜色开始为填充色)</td>
                            <td>Array</td>
                            <td>[ ]</td>
                        </tr>
                        <tr>
                            <td>tooltipFmt</td>
                            <td>提示框的文字格式化</td>
                            <td>Function</td>
                            <td>function(params){ <br> for (let i = 0; i
                                < params.length; i++) { <br>
                                    if (params[i].value) { <br> return params[i].seriesName + params[i].value[1]; <br> } <br> } <br> return "loading";<br> }
                            </td>
                        </tr>
                        <tr>
                            <td>grid</td>
                            <td>图表宽高，以及距上下左右的边距</td>
                            <td>Object</td>
                            <td> height: Number,<br> width: Number,<br> top: 30,<br> bottom: 5,<br> left: 10,<br> right: 15,<br> containLabel: true
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <Anchor title="lineChart events" h3></Anchor>
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
                <Anchor title="lineChart slot" h3></Anchor>
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
                <Anchor title="lineChart methods" h3></Anchor>
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
import Code from "../../code/lineChart";
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
        colors: ["#64e4f1", "#fe6b40"],
        legend: ["服饰", "美妆"],
        xAxis: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
        series: [
          [100, 120, 105, 96, 86, 97, 102],
          [70, 110, 85, 116, 76, 127, 122]
        ]
      },
      jjzlLine1: {
        colors: ["#64e4f1", "#fe6b40"],
        legend: ["服饰", "美妆"],
        xAxis: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
        series: [
          [100, 101, 103, 113, 120, 118, 123],
          [105, 109, 112, 106, 110, 126, 125]
        ]
      },
      jjzlLine2: {
        colors: ["#64e4f1"],
        aColors: [["#25d4e7", "#fe6b40"]],
        legend: ["服饰"],
        xAxis: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
        series: [[100, 101, 103, 113, 120, 118, 123]]
      },
      jjzlLine3: {
        colors: [
          "#469df7",
          "#ecbd6c",
          "#469df7",
          "#a581d2",
          "#ecbd6c",
          "#e5474b"
        ],
        legend: ["黄石", "孝感"],
        xAxis: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
        series: [
          [
            {
              value: 100,
              status: 0
            },
            {
              value: 95,
              status: 0
            },
            {
              value: 120,
              status: 0
            },
            {
              value: 80,
              status: 0
            },
            {
              value: 96,
              status: 0
            },
            {
              value: 58,
              status: 1
            },
            {
              value: 89,
              status: 1
            }
          ]
        ],
        tooltipFmt: function(params) {
          for (let i = 0; i < params.length; i++) {
            if (params[i].value) {
              return params[i].seriesName + "人数" + params[i].value[1];
            }
          }
          return "loading";
        }
      }
    };
  },
  methods: {}
};
</script>