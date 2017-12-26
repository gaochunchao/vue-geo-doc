
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
                        <shadow-border title="全市工业增加值" style="margin-top:20px" :width="'50%'" :height="200" :borderColor="'#25d4e7'" :titleColor="'#25d4e7'"></shadow-border>
                        <shadow-border title="全市工业增加值" style="margin-top:20px" :borderColor="'#fe6b40'" :titleColor="'#fe6b40'" :width="'50%'" :height="200"></shadow-border>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>borderColor</code> 来设置边框颜色</p>
                    <p>通过设置
                        <code>titleColor</code> 来设置标题颜色</p>
                    <p>通过设置
                        <code>title</code> 来设置标题</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="shadowBorder props" h3></Anchor>
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
                            <td>border</td>
                            <td>是否显示边框</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>borderColor</td>
                            <td>边框颜色</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>xShift</td>
                            <td>阴影水平位移位置</td>
                            <td>Number | String</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>yShift</td>
                            <td>阴影垂直位移位置</td>
                            <td>Number | String</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>blur</td>
                            <td>阴影模糊半径</td>
                            <td>Number | String</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>titleColor</td>
                            <td>设置标题的颜色</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>设置标题</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="shadowBorder events" h3></Anchor>
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
                <Anchor title="shadowBorder slot" h3></Anchor>
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
import Code from "../../code/shadowBorder";
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
  height: 430px;
}
</style>
