<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-container">
                <Row>
                    <i-col span="4" class="wrapper-navigate">
                        <Navigate :type="activeKey"></Navigate>
                    </i-col>
                    <i-col span="20">
                        <div class="wrapper-content ivu-article">
                            <slot></slot>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
        <div class="footer">
            <div class="footer-main">
            </div>
        </div>
    </div>
</template>
<script>
    import Navigate from './navigate.vue';
    import navigate from '../config/navigate';

    export default {
        components: {
            Navigate
        },
        data () {
            return {
                activeKey: ''
            }
        },
        methods: {
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.activeKey = 'component';
                }  else {
                    this.activeKey = 'guide';
                }
            }
        },
        mounted () {
            this.updateActiveNav();
        }
    }
</script>