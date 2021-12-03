<template>
    <h1>Button示例</h1>
    <Demo :component="ButtonNormal" />
    <Demo :component="ButtonRound" />
    <Demo :component="ButtonDisabled" />
    <Demo :component="ButtonFont" />
    <Demo :component="ButtonSize" />
    <Demo :component="ButtonLoading" />
    <table>
        <thead><h2>Attributes</h2></thead>
        <tbody>
            <tr><td>参数</td><td>说明</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
            <tr><td>level</td><td>类型</td><td>string</td><td>main / succese / info / warrning / danger</td><td>——</td></tr>
            <tr><td>radius</td><td>是否为圆角按钮</td><td>boolean</td><td>——</td><td>false</td></tr>
            <tr><td>disabled</td><td>是否禁用状态</td><td>boolean</td><td>——</td><td>false</td></tr>
            <tr><td>theme</td><td>样式</td><td>string</td><td>link / text</td><td>——</td></tr>
            <tr><td>size</td><td>尺寸</td><td>string</td><td>big / small</td><td>——</td></tr>
        </tbody>
        <tfoot></tfoot>
    </table>
</template>

<script lang="ts">
import ButtonNormal from './Button.normal.vue'
import ButtonSize from './Button.size.vue'
import ButtonDisabled from './Button.disabled.vue'
import ButtonFont from './Button.font.vue'
import ButtonLoading from './Button.loading.vue'
import ButtonRound from './Button.round.vue'
import Demo from './Demo.vue'
export default {
    components:{Demo},
    setup() {
        return {
            ButtonNormal,
            ButtonSize,
            ButtonDisabled,
            ButtonFont,
            ButtonLoading,
            ButtonRound
        }
  }
}
</script>
<style scoped>
    table{
        border-collapse: collapse;
        width: 100%;
        margin:0 0 100px 0;
    }
    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
</style>
