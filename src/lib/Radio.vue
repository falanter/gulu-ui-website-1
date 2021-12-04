<template>
    <button class="gulu-switch" @click="toggle" :class="{'gulu-checked':value}" :disabled="disabled"><span></span></button>
    <!-- <div>
        <span class="gulu-radio" v-for="index" @click="toggle">备选项</span>
    </div> -->
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
    $h:14px;
    $blue: #40a9ff;
    .gulu-radio::before{
        content: '';
        display: inline-block;
        border: 1px solid #ccc;
        width: $h;
        height: $h;
        border-radius: 50%;
        cursor: pointer;
    }
    .gulu-radio:hover:before,.gulu-radio:focus:before{
        border-color:$blue;
    }
</style>