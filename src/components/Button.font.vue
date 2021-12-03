<demo>文字按钮</demo>
<template>
    <div>
        <Button theme="link">文字按钮</Button>
        <Button theme="text">文字按钮</Button>
        <Button theme="text" disabled>文字按钮</Button>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{Button},
}
</script>