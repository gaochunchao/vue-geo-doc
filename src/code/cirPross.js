let code = {};
code.base=`
<template>
<cir-Pross class="cirPross" :percent="waterRing[0].rate" :radius="58" :lineWidth="12" color="#f9693f"></cir-Pross>
</template>
<script>
export default {
    components: {

    },
    data() {
      return {
         waterRing: [
          {
            rate: 80,
            name: "污水处理率"
          }
        ]
      };
    },
    methods: {
      
    }
  };
</script>
`
export default code;