let code = {};
code.base=`
<template>
<div class="border">
<shadow-border title="全市工业增加值" style="margin-top:20px" :width="'50%'" :height="200" :borderColor="'#25d4e7'" :titleColor="'#25d4e7'"></shadow-border>
<shadow-border title="全市工业增加值" style="margin-top:20px" :borderColor="'#fe6b40'" :titleColor="'#fe6b40'" :width="'50%'" :height="200"></shadow-border>
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
.border {
    width: 100%;
    height: 430px;
  }
</style>
`
export default code;