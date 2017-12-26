
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
                    <div class="xLabelBox">
                        <x-label num="100" :styles="{width:'50%'}"></x-label>
                        <x-label num="100" :styles="{width:'50%'}" :isUnit="false" :nuSty="{color:'#469df7',width:'60%',fontSize:'28px'}" :badSty="{color:'#e47f61',fontSize:'12px'}"></x-label>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>styles</code> 来设置宽高</p>
                    <p>通过设置
                        <code>isUnit</code> 来切换两种展示效果</p>
                </div>
                <i-code lang="html" slot="code">{{ code.xLabel }}</i-code>
            </Demo>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="xLabel props" h3></Anchor>
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
                            <td>num</td>
                            <td>数字</td>
                            <td>String, Number</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>名字</td>
                            <td>String</td>
                            <td>"增加值"</td>
                        </tr>
                        <tr>
                            <td>unit</td>
                            <td>单位</td>
                            <td>String</td>
                            <td>"万元"</td>
                        </tr>
                        <tr>
                            <td>isUnit</td>
                            <td>如果为false,则数值前后都有文字</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>naSty</td>
                            <td>设置左边名字的样式</td>
                            <td>Object</td>
                            <td>width: "40%", <br> color: "#000",<br> fontSize: "14px"<br>
                            </td>
                        </tr>
                        <tr>
                            <td>nuSty</td>
                            <td>设置数字的样式</td>
                            <td>Object</td>
                            <td>width: "60%", <br> color: "#e47f61",<br> fontSize: "24px"<br>
                            </td>
                        </tr>
                        <tr>
                            <td>unitSty</td>
                            <td>设置单位的样式</td>
                            <td>Object</td>
                            <td>color: "#e47f61", <br> fontSize: "14px"<br>
                            </td>
                        </tr>
                        <tr>
                            <td>badSty</td>
                            <td>数值前后文字的样式</td>
                            <td>Object</td>
                            <td>color: "#e47f61", <br> fontSize: "14px"<br>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <div class="yLabelBox">
                        <y-label v-for="(item,index) in nygy" :key="index" :name="item.name" :val="item.val" :unit="item.unit" :uColor="'#333'" :styles="{width:'33.3%'}"></y-label>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>styles</code> 来设置宽高</p>
                    <p>通过设置
                        <code>color</code> 来改变文字颜色</p>
                </div>
                <i-code lang="html" slot="code">{{ code.yLabel }}</i-code>
            </Demo>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="yLabel props" h3></Anchor>
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
                            <td>val</td>
                            <td>数字</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>unit</td>
                            <td>单位</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>名字</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>uStyle</td>
                            <td>设置单位的样式</td>
                            <td>Object</td>
                            <td>color: "#f9693f", <br>fontSize: "14px"<br>
                            </td>
                        </tr>
                        <tr>
                            <td>vStyle</td>
                            <td>设置数字的样式</td>
                            <td>Object</td>
                            <td>color: "#f9693f",<br> fontSize: "24px"<br>
                            </td>
                        </tr>
                        <tr>
                            <td>uColor</td>
                            <td>设置名称的颜色</td>
                            <td>String</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="label events" h3></Anchor>
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
                <Anchor title="label slot" h3></Anchor>
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
import Code from "../../code/label";
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
       nygy: [
        //能源供应
        {
          val: "56",
          unit: "亿/m³",
          name: "供水量"
        },
        {
          val: "34",
          unit: "亿/m³",
          name: "供气量"
        },
        {
          val: "13",
          unit: "亿/千瓦时",
          name: "供电量"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.xLabelBox {
  width: 100%;
  height: 50px;
}
.yLabelBox {
  width: 100%;
  height: 70px;
}
</style>
