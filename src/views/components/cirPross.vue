
<template>
    <i-article>
        <article>
            <h1>圆形进度条</h1>
            <Anchor title="概述" h2></Anchor>
            <p>基本动画组件。</p>
            <Alert show-icon style="margin-top: 16px">注意：基本动画组件</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <cir-Pross class="cirPross" :percent="waterRing[0].rate" :radius="58" :lineWidth="12" color="#f9693f"></cir-Pross>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>percent</code> 来设置百分比值</p>
                    <p>通过
                        <code>radius</code> 来设置内环半径</p>
                    <p>通过
                        <code>lineWidth</code> 来设置环形宽度</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="cirPross props" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>percent</td>
                            <td>百分比值</td>
                            <td>Number | String</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>radius</td>
                            <td>内环半径</td>
                            <td>Number</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>lineWidth</td>
                            <td>环形宽度</td>
                            <td>Number</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>填充色</td>
                            <td>String</td>
                            <td>#f9693f</td>
                        </tr>
                        <tr>
                            <td>percentCor</td>
                            <td>中间百分比颜色</td>
                            <td>String</td>
                            <td>#000</td>
                        </tr>
                        <tr>
                            <td>font</td>
                            <td>中间文字字体</td>
                            <td>String</td>
                            <td>25px AgencyFBBold</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="cirPross events" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>返回值</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <Anchor title="cirPross slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Demo from "../../components/demo.vue";
import Code from "../../code/cirPross";
import Anchor from "../../components/anchor.vue";

export default {
  components: {
    iArticle,
    iCode,
    Demo,
    Anchor
  },
  data() {
    return {
      code: Code,
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
<style scoped>
.cirPross{
    position: relative;
    left:50%;
    transform: translateX(-50%)
}
</style>
