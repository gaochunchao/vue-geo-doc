let code = {};
code.base=`
<template>
<div class="iconBox">
<icon-box v-for="(item,index) in tx" :img="item.img" :text="item.text" :name="item.name" :key="index" :isShow="false" :styles="{width:'50%',height:'100%'}"></icon-box>
</div>
</template>
<script>
export default {
    components: {
     
    },
    data() {
      return {
        tx: [
          {
            img: require("../images/phone.png"),
            text: "98%",
            name: "移动电话使用量"
          },
          {
            img: require("../images/router.png"),
            text: "98%",
            name: "宽带用户数"
          }
        ],
      };
    },
    methods: {
      
    }
  };
</script>
<style lang="less" scoped>
.iconBox {
  width: 100%;
  height: 50px;
}
</style>
`

code.base2=`
<template>
<div class="iconBox">
<icon-box v-for="(item,index) in tx2" :img="item.img" :text="item.text" :name="item.name" :key="index" :unit="item.unit" :isShow="true" :styles="{width:'50%',height:'100%'}"></icon-box>
</div>
</template>
<script>
export default {
    components: {
     
    },
    data() {
      return {
        tx2: [
          {
            img: require("../images/phone.png"),
            text: "235",
            unit:"万户",
            name: "移动电话使用量"
          },
          {
            img: require("../images/router.png"),
            text: "213",
            unit:"万户",
            name: "宽带用户数"
          }
        ]
      };
    },
    methods: {
      
    }
  };
</script>
<style lang="less" scoped>
.iconBox {
  width: 100%;
  height: 50px;
}
</style>
`
export default code;