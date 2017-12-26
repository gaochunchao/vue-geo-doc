<style lang="less" scoped>
    @import "../styles/navigate.less";
</style>
<template>
    <div class="navigate">
        <Menu width="auto" :active-name="activeKey" @on-select="handleSelect" v-if="type === 'component'">
            <Menu-item v-for="item in navigate.beforeComponents" :key="item.path" :name="item.path">
                <template>
                    <template>{{ item.title }}</template>
                </template>
            </Menu-item>
            <div class="navigate-group">组件</div>
            <Menu-group v-for="item in navigate.components" :key="item.type" :title="item.title">
                <Menu-item v-for="component in item.list" :key="component.path" :name="component.path">
                    <i class="ivu-icon" :class="'ivu-icon-' + component.icon"></i>
                    <template>
                        {{ component.title.split(' ')[0] }}
                        <span class="navigate-group-span">{{ component.title.split(' ')[1] }}</span>
                    </template>
                </Menu-item>
            </Menu-group>
        </Menu>
    </div>
</template>
<script>
    import navigate from '../config/navigate';

    export default {
        props: {
            type: {
                type: [String, Number]
            }
        },
        data () {
            return {
                navigate: navigate,
                showDot: false,
                activeKey: this.$route.path,
            }
        },
        methods: {
            handleSelect (path) {
                this.$nextTick(() => {
                    this.$router.push(path);
                });
            }
        },
        created () {
            const path = this.$route.path;
            this.activeKey = path;
        },
        mounted () {
        }
    }
</script>