let code = {};
code.base=`
<template>
<div class="border">
<ir-border title="边框1" :type="'small'" style="margin-top:20px;"></ir-border>
<ir-border title="边框2" :type="'middle'" style="margin-top:20px;width:400px"></ir-border>
<ir-border title="边框3" :type="'big'" style="margin-top:20px;width:400px"></ir-border>
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
  height: 550px;
}
</style>
`
export default code;