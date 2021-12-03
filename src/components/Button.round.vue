<demo>圆角按钮</demo>
<template>
    <div>
        <Button radius>默认按钮</Button>
        <Button level="main" radius>默认按钮</Button>
        <Button level="succese" radius>成功按钮</Button>
        <Button level="info" radius>信息按钮</Button>
        <Button level="warrning" radius>警告按钮</Button>
        <Button level="danger" radius>危险按钮</Button>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{Button},
}
</script>