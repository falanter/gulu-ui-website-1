<template>
<div>
  <h1>Radio 组件示例 </h1>
  <Demo :component="Radio1" />
</div>
</template>

<script lang="ts">
import Radio1 from './Radio1.demo.vue'

import Demo from './Demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Radio1
    }
  }
}
</script>

