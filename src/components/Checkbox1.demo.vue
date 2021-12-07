<demo>
常规用法
</demo>

<template>
    <CheckboxGroup v-model:value="checkList">
        <Checkbox label="复选框1"></Checkbox>
        <Checkbox label="2"></Checkbox>
        <Checkbox label="3"></Checkbox>
        <Checkbox label="4"></Checkbox>
    </CheckboxGroup>
</template>

<script lang="ts">
import {ref} from 'vue';
import Checkbox from '../lib/Checkbox.vue'
import CheckboxGroup from '../lib/CheckboxGroup.vue'
export default {
  components: {
    Checkbox,
    CheckboxGroup
  },
  setup(){
    const checkList=ref(['2'])
    return {checkList}
  },
}
</script>