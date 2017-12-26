let code = {};
code.base=`
<template>
<div class="gaugeBox">
<gauge :percent="60">
    <div>污水处理率</div>
</gauge>
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
<style scoped>
.gaugeBox {
  width: 100%;
  height: 100px;
  position: relative;
}
.gaugeBox .geo-gauge {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
`
export default code;