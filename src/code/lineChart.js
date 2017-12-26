/**
 * Created by Administrator on 2017/12/5.
 */
let code = {};

code.base=`
<template>
<line-Chart :legend="jjzlLine.legend" :xAxis="jjzlLine.xAxis" :series="jjzlLine.series" :colors="jjzlLine.colors" :forceGap="true" :isSymbol="true" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" ></line-Chart>
</template>
<script>
export default {
    data () {
        return {
            jjzlLine: {
                colors: [
                "#64e4f1",
                "#fe6b40",
                ],
                legend: ["服饰", "美妆"],
                xAxis: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
                series: [
                [100,120,105,96,86,97,102],
                [70,110,85,116,76,127,122],]
            },
        }
    }
}
</script>
`

code.symbol=`
<template>
<line-Chart :legend="jjzlLine1.legend" :xAxis="jjzlLine1.xAxis" :series="jjzlLine1.series" :colors="jjzlLine1.colors" :forceGap="true" :isSymbol="true" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :min="100" :max="130"></line-Chart>
</template>
<script>
export default {
    data () {
        return {
            jjzlLine1: {
                colors: [
                "#64e4f1",
                "#fe6b40",
                ],
                legend: ["服饰", "美妆"],
                xAxis: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
                series: [
                [100,101,103,113,120,118,123],
                [105,109,112,106,110,126,125],]
            },
        }
    }
}
</script>
`

code.fill=`
<template>
<line-Chart :legend="jjzlLine2.legend" :xAxis="jjzlLine2.xAxis" :series="jjzlLine2.series" :colors="jjzlLine2.colors" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :fillCor="true" :aColors="jjzlLine2.aColors"></line-Chart>
</template>
<script>
export default {
    data () {
        return {
            jjzlLine2: {
                colors: [
                "#64e4f1"
                ],
                aColors:[["#25d4e7", "#fe6b40"]],
                legend: ["服饰"],
                xAxis: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
                series: [[100,101,103,113,120,118,123]]
            },
        }
    }
}
</script>
`

code.assumed2=`
<template>
<line-Chart :type="'assumed2'" :legend="jjzlLine3.legend" :xAxis="jjzlLine3.xAxis" :series="jjzlLine3.series" :colors="jjzlLine3.colors" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :forceGap="true" :tooltipFmt="jjzlLine3.tooltipFmt"></line-Chart>
</template>
<script>
export default {
    data () {
        return {
            jjzlLine3: {
                colors: [
                "#64e4f1",
                "#fe6b40",
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
                ]],
                tooltipFmt: function(params) {
                for (let i = 0; i < params.length; i++) {
                    if (params[i].value) {
                    return params[i].seriesName + "人数" + params[i].value[1];
                    }
                }
                return "loading";
                }
            }
        }
    }
}
</script>
`

code.assumed3=`
<template>
<line-Chart :type="'assumed3'" :legend="jjzlLine3.legend" :xAxis="jjzlLine3.xAxis" :series="jjzlLine3.series" :colors="jjzlLine3.colors" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :forceGap="true" :tooltipFmt="jjzlLine3.tooltipFmt" :isDataZoom="true" :grid="{bottom:75}"></line-Chart>
</template>
<script>
export default {
    data () {
        return {
            jjzlLine3: {
                colors: [
                "#64e4f1",
                "#fe6b40",
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
                ]],
                tooltipFmt: function(params) {
                for (let i = 0; i < params.length; i++) {
                    if (params[i].value) {
                    return params[i].seriesName + "人数" + params[i].value[1];
                    }
                }
                return "loading";
                }
            }
        }
    }
}
</script>
`

code.assumed1=`
<template>
<line-Chart :type="'assumed3'" :legend="jjzlLine3.legend" :xAxis="jjzlLine3.xAxis" :series="jjzlLine3.series" :colors="jjzlLine3.colors" :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :forceGap="true" :tooltipFmt="jjzlLine3.tooltipFmt" :isDataZoom="true" :grid="{bottom:75}"></line-Chart>
</template>
<script>
export default {
    data () {
        return {
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
                ]],
                tooltipFmt: function(params) {
                for (let i = 0; i < params.length; i++) {
                    if (params[i].value) {
                    return params[i].seriesName + "人数" + params[i].value[1];
                    }
                }
                return "loading";
                }
            }
        }
    }
}
</script>
`
export default code;