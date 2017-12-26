
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
                    <div class="iconBox">
                        <icon-box v-for="(item,index) in tx" :img="item.img" :text="item.text" :name="item.name" :key="index" :isShow="false" :styles="{width:'50%',height:'100%'}"></icon-box>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>styles</code> 来设置宽高</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="基础用法">
                <div slot="demo">
                    <div class="iconBox">
                        <icon-box v-for="(item,index) in tx2" :img="item.img" :text="item.text" :name="item.name" :key="index" :unit="item.unit" :isShow="true" :styles="{width:'50%',height:'100%'}"></icon-box>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>unit</code> 来设置单位</p>
                    <p>通过设置
                        <code>isShow</code> 来设置是否需要动画</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base2 }}</i-code>
            </Demo>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="iconBox props" h3></Anchor>
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
                            <td>styles</td>
                            <td>设置长宽</td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>img</td>
                            <td>设置图片</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>text</td>
                            <td>设置数值</td>
                            <td>Number | String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>名字</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>unit</td>
                            <td>设置单位</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>unitCor</td>
                            <td>设置单位的颜色</td>
                            <td>String</td>
                            <td>"#000"</td>
                        </tr>
                        <tr>
                            <td>numCor</td>
                            <td>设置数字的颜色</td>
                            <td>String</td>
                            <td>"#000"</td>
                        </tr>
                        <tr>
                            <td>nameCor</td>
                            <td>设置名称的颜色</td>
                            <td>String</td>
                            <td>"#000"</td>
                        </tr>
                        <tr>
                            <td>isShow</td>
                            <td>控制数字是否有动态效果(文字动态后面不可加单位)</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="iconBox events" h3></Anchor>
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
                <Anchor title="iconBox slot" h3></Anchor>
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
import Code from "../../code/iconBox";
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
      tx: [
        {
          img: require("../images/phone.png"),
          text: "98%",
          name: "移动电话使用量"
        },
        {
          img: require("../images/router.png"),
          text: "98%",
          name: "宽带用户数"
        }
      ],
      tx2: [
        {
          img: require("../images/phone.png"),
          text: "235",
          unit:"万户",
          name: "移动电话使用量"
        },
        {
          img: require("../images/router.png"),
          text: "213",
          unit:"万户",
          name: "宽带用户数"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.iconBox {
  width: 100%;
  height: 50px;
}
</style>
