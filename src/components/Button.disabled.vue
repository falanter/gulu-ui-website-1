<demo>禁用状态</demo>
<template>
    <div>
        <Button disabled>默认按钮</Button>
        <Button level="main" disabled>主要按钮</Button>
        <Button level="succese" disabled>成功按钮</Button>
        <Button level="info" disabled>信息按钮</Button>
        <Button level="warrning" disabled>警告按钮</Button>
        <Button level="danger" disabled>危险按钮</Button>
        <!-- <Button :disabled="true">你好</Button> -->
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{Button},
}
</script>