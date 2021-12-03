<demo>基础用法</demo>
<template>
    <div>
        <Button>默认按钮</Button>
        <Button level="main">主要按钮</Button>
        <Button level="succese">成功按钮</Button>
        <Button level="info">信息按钮</Button>
        <Button level="warrning">警告按钮</Button>
        <Button level="danger">危险按钮</Button>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{Button},
}
</script>