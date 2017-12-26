/**
 * Created by Administrator on 2017/12/5.
 */
/**
 * Created by Administrator on 2017/12/5.
 */
let code = {};

code.base = `
<template>
<pie-chart :colors="fsPie.colors" :item-data="fsPie.itemData" :selected="false" :radius='[38, 52]' unit="%"></pie-chart>
</template>
<script>
  export default {
    data() {
      return {
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
                },
            ]
        }
      };
    }
  };
</script>`

code.size = `
<template>
<pie-chart :type="'h'" :height="200" :width="180" :colors="fsPie.colors" :item-data="fsPie.itemData" :radius='[38, 52]' unit="%" :chartHeight="55"></pie-chart>
</template>
<script>
    export default {
        data () {
            return {
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
                        },
                    ]
                }
            }
        }
    }
</script>`

code.cover = `
<template>
<pie-chart text="经济" :colors="fsPie.colors" :itemData="fsPie.itemData" :selected="false" unit="%" :kind="'overlayPie'" :radius="[['40%','60%'],['50%','70%'],['60%','80%']]" :startAngle="[40,30,45]"></pie-chart>
</template>
<script>
    export default {
        data () {
            return {
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
                        },
                    ]
                }
            }
        }
    }
</script>`

code.multi = `
<template>
<pieChart text="经济" :colors="fsPie.colors" :itemData="fsPie.itemData" :selected="false" :kind="'overlayPie'" :radius="[['40%','50%'],['50%','60%'],['60%','70%']]" :percent="true" :startAngle="[90,90,90]" unit="人" :hasRatio="true"></pieChart>
</template>
<script>
    export default {
        data () {
            return {
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
                        },
                    ]
                }
            }
        }
    }
</script>`;

export default code;