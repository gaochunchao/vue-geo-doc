/**
 * Created by gaochunchao on 2017/12/5.
 */
let code = {};

code.base = `
<template>
    <x-multiple-ring :size="size" :animate="animate" :space="space" :outPercent="outPercent" :outerWidth="outerWidth" :outerColor="outerColor"
               :outTrailColor="outTrailColor" :innerWidth="innerWidth" :innerColor="innerColor" :innerTrailColor="innerTrailColor">
        <div>{{value}}</div>
    </x-multiple-ring>
</template>
<script>
    export default {
        data () {
            return {
                value: '社会保障',
                size:70,
                animate:false,
                space:4,
                outPercent:0.5,
                outerWidth:6,
                outerColor:'#386361',
                outTrailColor:'#65e2f4',
                innerWidth:6,
                innerColor:'#edbaa0',
                innerTrailColor:'#F63'
            }
        }
    }
</script>
`;

export default code;