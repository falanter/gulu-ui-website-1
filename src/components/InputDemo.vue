<template>
<div>
  <h1>Input 组件示例 </h1>
  <Demo :component="Input1" />
</div>
</template>

<script lang="ts">
import Input1 from './Input1.demo.vue'

import Demo from './Demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Input1
    }
  }
}
</script>

