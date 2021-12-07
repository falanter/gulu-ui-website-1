<template>
<div>
  <h1>Checkbox 组件示例 </h1>
  <Demo :component="Checkbox1Demo" />
</div>
</template>

<script lang="ts">
import Checkbox1Demo from './Checkbox1.demo.vue'

import Demo from './Demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Checkbox1Demo
    }
  }
}
</script>

