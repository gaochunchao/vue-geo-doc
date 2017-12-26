let code = {};
code.xLabel=`
<template>
<div class="xLabelBox">
<x-label num="100" :styles="{width:'50%'}"></x-label>
<x-label num="100" :styles="{width:'50%'}" :isUnit="false" :nuSty="{color:'#469df7',width:'60%',fontSize:'28px'}" :badSty="{color:'#e47f61',fontSize:'12px'}"></x-label>
</div>
</template>
<script>
export default {
    components: {
     
    },
    data() {
      return {
      };
    },
    methods: {
      
    }
  };
</script>
<style lang="less" scoped>
.xLabelBox {
    width: 100%;
    height: 50px;
  }
</style>
`
code.yLabel=`
<template>
<div class="yLabelBox">
<y-label v-for="(item,index) in nygy" :key="index" :name="item.name" :val="item.val" :unit="item.unit" :uColor="'#333'" :styles="{width:'33.3%'}"></y-label>
</div>
</template>
<script>
export default {
    components: {
     
    },
    data() {
      return {
        nygy: [
            //能源供应
            {
              val: "56",
              unit: "亿/m³",
              name: "供水量"
            },
            {
              val: "34",
              unit: "亿/m³",
              name: "供气量"
            },
            {
              val: "13",
              unit: "亿/千瓦时",
              name: "供电量"
            }
        ]
      };
    },
    methods: {
      
    }
  };
</script>
<style lang="less" scoped>
.yLabelBox {
    width: 100%;
    height: 70px;
  }
</style>
`
export default code;