<template>
    <div ref="container">
        <span class="gulu-checkbox" @click="select(t)" v-for="(t,index) in labels" :class="{checked: value.find(tag=> tag===t)}" :key="index">{{t}}</span>
    </div>
</template>
<script lang="ts">
import Checkbox from './Checkbox.vue'
export default {
    props:{
        value:Array
    },
    setup(props,context){
        const defaults=context.slots.default()
        // console.log(defaults)
        // console.log(defaults[0].type===Checkbox)
        defaults.forEach((tag)=>{
            if(tag.type!==Checkbox){
                throw new Error('CheckboxGroup子标签必须是Checkbox')      //显示报错且停止运行代码
            }
        })
        const labels = defaults.map((tag)=>{
            return tag.props.label
        })
        const select =(label:string)=>{
            if(props.value.find(tag=> tag===label)){
                let index=props.value.indexOf(label)
                props.value.splice(index,1)
                console.log(props.value)
            }else{
                props.value.push(label)
                console.log(props.value)
            }
        }
        return {labels,select}
    }
}
</script>
<style lang="scss">
    $h:14px;
    $blue: #40a9ff;
    .gulu-checkbox {
        display: inline-flex;
        align-items: center;
        /* border: 1px solid red; */
        margin-left:10px ;
        cursor: pointer;
        margin-right: 10px;
        &.checked{
            color:$blue;
        }
        &.checked::before{
            border: 6px solid $blue;
            width: 5px;
            height: 5px;
            transition:all 100ms;
        }
    }
    .gulu-checkbox::before {
        content: '';
        margin-right: 8px;
        display: block;
        border: 1px solid #ccc;
        width: 15px;
        height: 15px;
        border-radius: 2px;
        
    }
    .gulu-checkbox:hover:before,
    .gulu-checkbox:focus:before {
        border-color: $blue;
    }
    
</style>