<demo>不同尺寸</demo>
<template>
    <div>
        <Button size="big">大型按钮</Button>
        <Button>默认按钮</Button>
        <Button size="small">小型按钮</Button>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{Button},
}
</script>