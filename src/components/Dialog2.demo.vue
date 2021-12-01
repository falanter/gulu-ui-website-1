<demo>示例2</demo>
<template>
    <Button @click="showDialog">show</Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import {openDialog} from '../lib/openDialog'
import {h} from 'vue'
export default {
    components:{
        Button
    },
    setup(){
        const showDialog=()=>{
            openDialog({
                title:h('strong',{},'标题'),
                content:'你好',
                ok(){
                    console.log('ok')
                },
                cancel(){
                    console.log('cancel')
                }
            })
        }
        return {showDialog}
    }
}
</script>