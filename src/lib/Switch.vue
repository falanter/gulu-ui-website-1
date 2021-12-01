<template>
    <div>switch</div>
    <button class="gulu-switch" @click="toggle" :class="{'gulu-checked':value}" :disabled="disabled"><span></span></button>
    <div>{{value}}</div>
</template>
<script lang="ts">
export default {
    props:{
        value:Boolean,
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    setup(props,context){
        const toggle=()=>{
            // console.log(props,context,ref)
            // console.log(ref)
            context.emit('update:value',!props.value)
        }
        return {toggle}
    }
}
</script>
<style lang="scss">
$h:22px;
$h2:$h - 4px;
.gulu-switch{
    height: $h;
    width:$h*2;
    border:none;
    background: grey;
    border-radius: $h/2;
    position: relative;
    cursor: pointer;
    span{
        position: absolute;
        top:2px;
        left:2px;
        height: $h2;
        width:$h2;
        background: white;
        border-radius: $h2;
        transition:left 250ms;
    }
}
button.gulu-checked{
    background: #1890ff;
    span{
        left:calc(100% - #{$h2} - 2px);
    }
}
button:focus{outline:none;}
</style>