<demo>
常规用法
</demo>

<template>
<Radio v-model:value="bool" />
</template>

<script lang="ts">
import Radio from '../lib/Radio.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Radio,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>
