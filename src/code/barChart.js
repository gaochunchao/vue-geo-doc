/**
 * Created by Administrator on 2017/12/5.
 */
let code = {};

code.base = `
<template>
     <bar-chart :xAxis="lrZe.xAxis" :colorList="lrZe.colorList" :series="lrZe.series"
               :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'" :gridBottom="30">
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
    <bar-chart :legend="lrZe1.legend" legPos="left" :xAxis="lrZe1.xAxis" :colorList="lrZe1.colorList" :series="lrZe1.series"
        :axisLineClr="'#000'" :axisLalClr="'#000'" :legCrl="'#000'"></bar-chart>
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

code.icon = `
<template>
    <Input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px"></Input>
</template>
<script>
    export default {
        data () {
            return {
                value4: ''
            }
        }
    }
</script>
`;

code.textarea = `
<template>
    <Input v-model="value5" type="textarea" placeholder="Enter something..."></Input>
    <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>
</template>
<script>
    export default {
        data () {
            return {
                value5: '',
                value6: ''
            }
        }
    }
</script>
`;

code.autosize = `
<template>
    <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></Input>
    <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
</template>
<script>
    export default {
        data () {
            return {
                value7: '',
                value8: ''
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <Input v-model="value9" disabled placeholder="Enter something..."></Input>
    <Input v-model="value10" disabled type="textarea" placeholder="Enter something..."></Input>
</template>
<script>
    export default {
        data () {
            return {
                value9: '',
                value10: ''
            }
        }
    }
</script>
`;

code.addon = `
<template>
    <Input v-model="value11">
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
    </Input>
    <br>
    <Input v-model="value12">
        <Select v-model="select1" slot="prepend" style="width: 80px">
            <Option value="http">http://</Option>
            <Option value="https">https://</Option>
        </Select>
        <Select v-model="select2" slot="append" style="width: 70px">
            <Option value="com">.com</Option>
            <Option value="org">.org</Option>
            <Option value="io">.io</Option>
        </Select>
    </Input>
    <br>
    <Input v-model="value13">
        <Select v-model="select3" slot="prepend" style="width: 80px">
            <Option value="day">Day</Option>
            <Option value="month">Month</Option>
        </Select>
        <Button slot="append" icon="ios-search"></Button>
    </Input>
</template>
<script>
    export default {
        data () {
            return {
                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        }
    }
</script>
`;

export default code;