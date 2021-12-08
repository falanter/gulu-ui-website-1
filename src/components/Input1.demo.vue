<demo>
常规用法
</demo>

<template>
    <Input v-model:value="input" placeholder="请输入内容" />
</template>

<script lang="ts">
import {ref} from 'vue'
import Input from '../lib/Input.vue'
export default {
  components: {
    Input
  },
  setup(){
      const input=ref('')
      return {input}
  }
}
</script>