
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
                    <div class="border">
                        <ir-border title="边框1" :type="'small'" style="margin-top:20px;"></ir-border>
                        <ir-border title="边框2" :type="'middle'" style="margin-top:20px;width:400px"></ir-border>
                        <ir-border title="边框3" :type="'big'" style="margin-top:20px;width:400px"></ir-border>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>title</code> 来设置标题内容</p>
                    <p>通过设置
                        <code>fontClass</code> 来设置标题类名</p>
                    <p>通过设置
                        <code>type</code> 来更改边框类型</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="irBorder props" h3></Anchor>
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
                            <td>title</td>
                            <td>标题文字内容</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>外盒宽度</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>外盒高度</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>fontClass</td>
                            <td>设置标题的类名</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>边框大小类型,可通过
                                <code>small</code>、
                                <code>middle</code>、
                                <code>big</code>或者不设置</td>
                            <td>String</td>
                            <td>"small"</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="irBorder events" h3></Anchor>
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
                <Anchor title="irBorder slot" h3></Anchor>
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
import Code from "../../code/irBorder";
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
<style lang="less" scoped>
.border {
  width: 100%;
  height: 550px;
}
</style>
