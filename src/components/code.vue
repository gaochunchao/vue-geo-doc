<style scoped>
    div{
        position: relative;
        font-size: 14px;
    }
    span.copy, span.scale, span.open-fiddle{
        border-radius: 0 0 3px 3px;
        padding: 2px 5px;
        position: absolute;
        top: 5px;
        right: 0;
        color: #b2b2b2;
        cursor: pointer;
    }
    span.scale{
        right: 25px;
    }
    span.open-fiddle{
        right: 50px;
    }
    .bg + span.copy{
        right: 5px;
    }
    span.copy:hover, span.scale:hover, span.open-fiddle:hover{
        color: #5c6b77;
    }
</style>
<style>
    .code-scale-modal .ivu-modal-body{
        background-color: #f7f7f7;
    }
    .code-scale-modal pre{
        font-size: 14px;
    }
</style>
<template>
    <div>
        <pre :class="{bg: bg}"><code :class="language" ref="code"><slot></slot></code></pre>
        <span class="scale" @click="scale">
            <Tooltip content="放大" placement="top" transfer>
                <Icon type="qr-scanner" size="18"></Icon>
            </Tooltip>
        </span>
        <span class="copy" @click="clip">
            <Tooltip content="复制" placement="top" transfer>
                <Icon type="clipboard" size="18" v-show="!copied"></Icon>
                <Icon type="checkmark" size="18" v-show="copied" style="color:#5cb85c"></Icon>
            </Tooltip>
        </span>
        <Modal class-name="code-scale-modal" :title="title" width="65" v-model="openScale">
            <pre :class="{bg: bg}"><code :class="language" ref="code2"></code></pre>
        </Modal>
    </div>
</template>
<script>
    import hljs from 'hljs';
    import Clipboard from 'clipboard';
    import tag_map from './tag-map';

    function replaceTag(source, tagMap) {
        Object.keys(tagMap).forEach(i => {
            source = source
                .replace(new RegExp(`<${i}\(\\W+\)`, 'g'), `<${tagMap[i]}$1`)
                .replace(new RegExp(`<\/${i}>`, 'g'), `<\/${tagMap[i]}>`);
        });
        return source;
    }

    export default {
        props: {
            lang: {
                type: String,
                default: 'javascript'
            },
            bg: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                openScale: false,
                code: '',
                copied: false,
                docLang: this.$lang,
                title: 'Code'
            }
        },
        computed: {
            language () {
                return ''
            }
        },
        mounted () {
            this.code = this.$refs.code.innerHTML.replace(/\n/, '');
            this.$refs.code.innerHTML = this.code;
            hljs.highlightBlock(this.$refs.code);

            this.$refs.code2.innerHTML = this.code;
            hljs.highlightBlock(this.$refs.code2);

            const Demo = this.$parent.$parent.$parent;
            if (Demo.$options.name === 'Demo') {
                this.title = Demo.title;
            }
        },
        methods: {
            clip () {
                const code = this.code.replace(/&lt;/g,'<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
                const clipboard = new Clipboard('.copy', {
                    text () {
                        return code
                    }
                });

                clipboard.on('success', (e) => {
                    e.clearSelection();
                    clipboard.destroy();
                    this.copied = true;
                    this.$Message.success('代码已复制到剪贴板');
                    setTimeout(() => {
                        this.copied = false;
                    }, 2000);
                });
            },
            scale () {
                this.openScale = true;
            },
			getSource(source, type){
				const regex = new RegExp(`<${type}[^>]*>`);
				let openingTag = source.match(regex);

				if (!openingTag) return '';
				else openingTag = openingTag[0];

                return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`));
            }
        }
    }
</script>
