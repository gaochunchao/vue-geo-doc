
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
                    <div class="gaugeBox">
                        <gauge :percent="60">
                            <div>污水处理率</div>
                        </gauge>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>percent</code> 来设置百分比值</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="gauge props" h3></Anchor>
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
                            <td>Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>animated</td>
                            <td>动画效果</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>styles</td>
                            <td>设置外盒的样式</td>
                            <td>Object</td>
                            <td>{}</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="gauge events" h3></Anchor>
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
                <Anchor title="gauge slot" h3></Anchor>
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
import Code from "../../code/gauge";
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
      code: Code
    };
  },
  methods: {}
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
