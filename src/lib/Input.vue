<template>
    <input class="gulu-Input" @change="onChange" />
</template>
<script lang="ts">
export default {
    props:{
        value:String,
    },
    setup(props,context){
        // const newValue=props.value
        // console.log(newValue)
        const onChange=(e)=>{
            console.log(e.target.value)
            context.emit('update:value',e.target.value)
        }
        return {onChange}
    }
}
</script>
<style lang="scss">
    $h:14px;
    $blue: #40a9ff;
    .gulu-Input{
        border: 1.5px solid #ddd;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    .gulu-Input:hover{
        border-color:#ccc;
    }
    .gulu-Input:focus{
        outline:none;
        border-color: $blue;
    }
</style>