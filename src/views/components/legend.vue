
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
                    <div style="width:300px;height:100px">
                        <x-legend v-for="(item,index) in qxPie.itemData" :key="item.name" :item="{name:item.name,value:item.value,ratio:item.ratio,color:itemColor(index,qxPie.colors)}" style="width:50%;height:25%"></x-legend>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>tColor</code> 来改变文字颜色</p>
                    <p>通过设置
                        <code>item</code> 来接收传值</p>
                </div>
                <i-code lang="html" slot="code">{{ code.xLegend }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="xLegend props" h3></Anchor>
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
                            <td>tColor</td>
                            <td>设置文字颜色</td>
                            <td>String</td>
                            <td>"#000"</td>
                        </tr>
                        <tr>
                            <td>item</td>
                            <td>传值</td>
                            <td>Object</td>
                            <td>
                                color: "#000", <br> name: "孝感", <br> value: "10500", <br> ratio: "5%"
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <div style="width:300px;height:300px">
                        <y-legend v-for="(item,index) in qxPie.itemData" :key="item.name" :item="{name:item.name,value:item.value,ratio:item.ratio,color:itemColor(index,qxPie.colors)}" style="height:12.5%"></y-legend>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>unit</code> 来增加单位</p>
                    <p>通过设置
                        <code>item</code> 来接收传值</p>
                </div>
                <i-code lang="html" slot="code">{{ code.yLegend }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="yLegend props" h3></Anchor>
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
                            <td>unit</td>
                            <td>增加单位</td>
                            <td>String</td>
                            <td>"亿元"</td>
                        </tr>
                        <tr>
                            <td>item</td>
                            <td>传值</td>
                            <td>Object</td>
                            <td>
                                color: "#000", <br> name: "孝感", <br> value: "10500", <br> ratio: "5%"
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="legend events" h3></Anchor>
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
                <Anchor title="legend slot" h3></Anchor>
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
import Code from "../../code/legend";
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
      qxPie: {
        colors: [
          "#469df7",
          "#7cd8fd",
          "#a581d2",
          "#d2c681",
          "#ecbd6c",
          "#f28864",
          "#f17070",
          "#2eadbc"
        ],
        itemData: [
          {
            value: 45,
            name: "孝南区",
            ratio: "10%"
          },
          {
            value: 15,
            name: "孝昌县",
            ratio: "10%"
          },
          {
            value: 35,
            name: "云梦县",
            ratio: "10%"
          },
          {
            value: 55,
            name: "汉川市",
            ratio: "10%"
          },
          {
            value: 55,
            name: "安陆市",
            ratio: "10%"
          },
          {
            value: 55,
            name: "大悟县",
            ratio: "10%"
          },
          {
            value: 55,
            name: "应城市",
            ratio: "10%"
          },
          {
            value: 55,
            name: "市高新",
            ratio: "10%"
          }
        ]
      }
    };
  },
  methods: {
    itemColor(index, colors) {
      return colors[index];
    }
  }
};
</script>
