<demo>
常规用法
</demo>

<template>
<Radio v-model:value="radio" label="1">yui</Radio>
<Radio v-model:value="radio" label="2">poi</Radio>
<Radio v-model:value="radio" label="3">jkl</Radio>
<Radio v-model:value="radio" label="4">斯蒂芬</Radio>
</template>

<script lang="ts">
import Radio from '../lib/Radio.vue'
export default {
  components: {
    Radio
  },
  data(){
      return{
          radio:'1'
      }
  }
}
</script>