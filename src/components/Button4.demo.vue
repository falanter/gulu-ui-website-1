<demo>示例4</demo>
<template>
    <div>
        <Button disabled>你好</Button>
        <Button :disabled="true">你好</Button>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components:{Button},
}
</script>