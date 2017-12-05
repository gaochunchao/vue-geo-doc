<template>
    <i-article>
        <article>
            <h1>动画圆环</h1>
            <Anchor title="概述" h2></Anchor>
            <p>基本动画组件。</p>
            <Alert show-icon style="margin-top: 16px">注意：基本动画组件</Alert>
            <Anchor title="代码示例" h2></Anchor>
            <Demo title="基础用法">
                <div slot="demo">
                    <x-multiple-ring :size="70" :animate="false" :space="4" :outPercent="0.5" :outerWidth="6" outerColor="#386361"
                                     outTrailColor="#65e2f4" :innerWidth="6" innerColor="#edbaa0" innerTrailColor="#F63">
                        <div>社会保障</div>
                    </x-multiple-ring>
                </div>
                <div slot="desc">
                    <p>基本用法</p>
                </div>
                <i-code lang="html" slot="code">{{ code.base }}</i-code>
            </Demo>

            <div class="api">
                <Anchor title="API" h2></Anchor>
                <Anchor title="MultipleRing props" h3></Anchor>
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
                        <td>animated</td>
                        <td>开启动画</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>space</td>
                        <td>内外环间隔</td>
                        <td>Number</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>outPercent</td>
                        <td>外环占比</td>
                        <td>Number</td>
                        <td>0.27</td>
                    </tr>
                    <tr>
                        <td>outerWidth</td>
                        <td>外环宽度</td>
                        <td>Number</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>outerColor</td>
                        <td>外环底色</td>
                        <td>String</td>
                        <td>#386361</td>
                    </tr>
                    <tr>
                        <td>outTrailColor</td>
                        <td>外环填充色</td>
                        <td>String</td>
                        <td>#39F</td>
                    </tr>
                    <tr>
                        <td>innerWidth</td>
                        <td>内环占比</td>
                        <td>Number</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>innerColor</td>
                        <td>内环底色</td>
                        <td>String</td>
                        <td>#edbaa0</td>
                    </tr>
                    <tr>
                        <td>innerTrailColor</td>
                        <td>内环填充色</td>
                        <td>String</td>
                        <td>#F63</td>
                    </tr>
                    </tbody>
                </table>
                <Anchor title="MultipleRing events" h3></Anchor>
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
                <Anchor title="MultipleRing slot" h3></Anchor>
                <table>
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>无</td>
                        <td>圆环内部主体</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/MultipleRing';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            Anchor
        },
        data () {
            return {
                code: Code,
                value: '',
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: '',
                value9: '',
                value10: '',
                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        },
        methods: {

        }
    }
</script>