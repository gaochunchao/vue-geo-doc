<template>
    <i-article>
        <article>
            <h1>表格</h1>
            <Anchor title="概述" h2></Anchor>
            <p>表格用于显示数字和其他项以便快速引用和分析,是一种组织整理数据的手段</p>
            <Alert show-icon style="margin-top: 16px">表格</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <div style="width:100%;height:500px">
                        <table-form :styles="{width:'100%',height:'100%'}" color="#195fb4" :columns="qyTable.columns" :dataItem="qyTable.dataItem" keyWord="孝南区" :isScroll="true"></table-form>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>style</code> 来改变图表的宽高</p>
                    <p>通过
                        <code>keyWord</code> 来设置该行数据的变色。</p>
                    <p>通过
                        <code>isScroll</code> 来设置表格的滚动。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <Demo title="基础用法">
                <div slot="demo">
                    <div style="width:100%;height:300px">
                        <table-form :styles="{width:'100%',height:'100%'}" :borCor="'#25d4e7'" :showBor="true" :animate="true" :columns="qyTable.columns" :dataItem="qyTable.dataItem" keyWord="孝南区" headerColor="rgba(0,0,0,0)" lineColors="rgba(0,0,0,0)" lColor="#0e2e5d" :show="true"></table-form>
                    </div>
                </div>
                <div slot="desc">
                    <p>通过设置
                        <code>style</code> 来改变图表的宽高</p>
                    <p>通过
                        <code>keyWord</code> 来设置该行数据的变色。</p>
                    <p>通过
                        <code>isScroll</code> 来设置表格的滚动。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>
            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="timelineChart props" h3></Anchor>
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
                            <td>width</td>
                            <td>组件宽度，单位 px</td>
                            <td>Number | String</td>
                            <td>500</td>
                        </tr>
                    </tbody>
                </table>
                <Anchor title="timelineChart events" h3></Anchor>
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
                <Anchor title="timelineChart slot" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <Anchor title="timelineChart methods" h3></Anchor>
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                            <th>参数</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Demo from "../../components/demo.vue";
import Code from "../../code/timelineChart";
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
      qyTable: {
        lineColors: ["rgba(0,0,0,0)"],
        columns: [
          {
            type: "name",
            name: "区域",
            width: "25%"
          },
          {
            type: "now",
            name: "总数",
            width: "25%"
          },
          {
            type: "same",
            name: "新增数",
            width: "25%"
          },
          {
            type: "add",
            name: "净增数",
            width: "25%"
          }
        ],
        dataItem: [
          {
            name: "大悟县",
            now: "2097.34",
            same: "2097.34",
            add: "9.6%"
          },
          {
            name: "汉川",
            now: "2097.34",
            same: "2097.34",
            add: "9.6%"
          },
          {
            name: "云梦县",
            now: "2097.34",
            same: "2097.34",
            add: "9.6%"
          },
          {
            name: "孝南区",
            now: "2097.34",
            same: "2097.34",
            add: "9.6%"
          },
          {
            name: "应城市",
            now: "2097.34",
            same: "2097.34",
            add: "9.6%"
          },
          {
            name: "孝昌县",
            now: "2097.34",
            same: "2097.34",
            add: "9.6%"
          },
          {
            name: "市本级",
            now: "2097.34",
            same: "2097.34",
            add: "9.6%"
          },
          {
            name: "孝感",
            now: "2097.34",
            same: "2097.34",
            add: "9.6%"
          }
        ]
      }
    };
  },
  mounted(){
          this.show=true;
          setTimeout(() => {
              this.show = false;
            }, 1000*9);

  }
};
</script>