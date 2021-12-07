<template>
    <span class="gulu-radio" @click="toggle" :class="{'gulu-radio-checked':label==value}"><slot/></span>
</template>
<script lang="ts">
export default {
    props:{
        value:String,
        label:{
            type:String,
            default:'1'
        }
    },
    setup(props,context){
        const toggle=()=>{
            context.emit('update:value',props.label)
        }
        return {toggle}
    }
}
</script>
<style lang="scss">
    $h:14px;
    $blue: #40a9ff;
    .gulu-radio {
        display: inline-flex;
        align-items: center;
        /* border: 1px solid red; */
        margin-left:10px ;
        cursor: pointer;
        margin-right: 10px;
    }
    .gulu-radio::before {
        content: '';
        margin-right: 8px;
        display: block;
        border: 1px solid #ccc;
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }

    .gulu-radio:hover:before,
    .gulu-radio:focus:before {
        border-color: $blue;
    }
    .gulu-radio-checked{
        color:$blue;
    }
    .gulu-radio-checked::before{
        border: 6px solid $blue;
        width: 5px;
        height: 5px;
        transition:all 100ms;
    }
</style>