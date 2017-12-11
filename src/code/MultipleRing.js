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
    
    <x-multiple-ring :size="60" :animate="true" :space="4"
                :outPercent=0.5 :outerWidth="6" outerColor="#386361"
                outTrailColor="#65e2f4" :innerWidth="6" innerColor="#edbaa0"
                innerTrailColor="#F63">
        <div :style="rotateY(0)" style="color:#82dfec;">133554</div>
        <div :style="rotateY(0)">
            <div class="ring-text">
                +7.1%
            </div>
        </div>
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
        },
        methods: {
            rotateY(index) {
                let trans = "";
                if (index % 2) {
                    trans = "transform: rotateY(180deg);";
                }
                return trans;
            },
        }
    }
</script>
<style>
    .ring-text{
        font-weight: 700;
        font-size: 14px;
        background-color: #f63;
        width: 60px;
        margin: 0 auto;
        border-radius: 10px;
        color: #fff
    }
</style>
`;

export default code;