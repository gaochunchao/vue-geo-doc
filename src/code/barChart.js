/**
 * Created by Administrator on 2017/12/5.
 */
let code = {};

code.base = `
<template>
     <bar-chart :xAxis="lrZe.xAxis" :colorList="lrZe.colorList" :series="lrZe.series" :tLabel="{show:false}">
    </bar-chart>
</template>
<script>
  export default {
    data() {
      return {
        lrZe: {            
            xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            colorList: ["#fe6b40"],
            series: [
                {
                    type: "bar",
                    data: [287, 229, 333, 481, 367, 233, 148]
                }
            ]
        }
      };
    }
  };
</script>

`;

code.size = `
<template>
<bar-chart :legend="lrZe1.legend" legPos="left" :xAxis="lrZe1.xAxis" :colorList="lrZe1.colorList" :series="lrZe1.series" :tLabel="{show:false}"></bar-chart>
</template>
<script>
    export default {
        data () {
            return {
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
                }
            }
        }
    }
</script>
`;

code.stack = `
<template>
<bar-chart :legend="lrZe2.legend" :xAxis="lrZe2.xAxis" :colorList="lrZe2.colorList" :series="lrZe2.series" :tLabel="{show:false}" :stack="true"></bar-chart>
</template>
<script>
    export default {
        data () {
            return {
                lrZe2: {
                    legend: ["增幅", "全市累积","年度利率"],
                    xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    colorList: ["#fe6b40", "#1f7be8","#AF83E8"],
                    series: [
                        {
                        type: "bar",
                        data: [287, 229, 333, 481, 367, 233, 148]
                        },{
                        type: "bar",
                        data: [747, 658, 733, 581, 707, 683, 398]
                        },{
                        type: "bar",
                        data: [132, 102, 111, 254, 156, 148, 179]
                        }
                    ]
                }
            }
        }
    }
</script>
`;

code.mix = `
<template>
<bar-chart :legend="lrZe3.legend" :xAxis="lrZe3.xAxis" :colorList="lrZe3.colorList" :series="lrZe3.series" :avDataLine="lrZe3.series[1].amount" :tLabel="{show:false}" :avLineCrl="lrZe3.avLineCrl" :isY="true"></bar-chart>
</template>
<script>
    export default {
        data () {
            return {
                lrZe3: {
                    legend: ["增幅", "全市累积"],
                    xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    colorList: ["#fe6b40", "#1f7be8"],
                    avLineCrl:["#AF83E8"],
                    series: [
                      {
                        type: "bar",
                        data: [287, 229, 333, 481, 367, 233, 148]
                      },
                      {
                        type: "line",
                        amount:[510],
                        data: [747, 658, 733, 581, 707, 683, 398]
                      }
                    ]
                }
            }
        }
    }
</script>
`;

code.zoom= `
<template>
    <bar-chart :legend="lrZe.legend" :xAxis="lrZe.xAxis" :colorList="lrZe.colorList" :series="lrZe.series" :tLabel="{show:false}" :isDataZoom="true" :grid="{bottom:75}" :axisLabFmt="true" :wordsNum="1"></bar-chart>
</template>
<script>
    export default {
        data () {
            return {
                lrZe: {
                    xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    colorList: ["#fe6b40"],
                    series: [
                      {
                        type: "bar",
                        data: [287, 229, 333, 481, 367, 233, 148]
                      }
                    ]
                },
            }
        }
    }
</script>
`

code.bgc=`
<template>
    <bar-chart :legend="lrZe.legend" :xAxis="lrZe.xAxis" :colorList="lrZe.colorList" :series="lrZe.series" :percent="true" :isHidden="true" :isBgc="true" :grid="{left:20}"></bar-chart>
</template>
<script>
    export default {
        data () {
            return {
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
            }
        }
    }
</script>
`

code.H=`
<template>
<bar-chart :legend="lrZe.legend" :xAxis="lrZe.xAxis" :colorList="lrZe.colorList" :series="lrZe.series" :changeDir="true" :axisLineClr="'rgba(0,0,0,0)'" :tLabel="lrZe.tLabel" ></bar-chart>
</template>
<script>
    export default {
        data () {
            return {
                lrZe: {
                    xAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    colorList: ["#fe6b40"],
                    series: [
                      {
                        type: "bar",
                        data: [287, 229, 333, 481, 367, 233, 148]
                      }
                    ]
                },
            }
        }
    }
</script>
`
export default code;