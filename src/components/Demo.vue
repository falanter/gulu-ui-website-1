<template>
<div class="demo">
  <h2>{{component.__sourceCodeTitle}}</h2>
  <div class="demo-component">
    <component :is="component" />
  </div>
  <div class="demo-actions" @click="toggleCode">
    <div class="showcodeText">显示代码</div>
  </div>
  <div class="demo-code" v-if="codeVisible">
    <pre class="language-html" v-html="html" />
  </div>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs';
// import 'prismjs/themes/prism.css'
import {
  computed,
  ref
} from 'vue';
const Prism = (window as any).Prism
export default {
  components: {
    Button
  },
  props: {
    component: Object
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const toggleCode = () => codeVisible.value = !codeVisible.value
    const codeVisible = ref(false)
    return {
      Prism,
      html,
      codeVisible,
      toggleCode
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 40px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
    /* border: 1px solid #ccc; */
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    cursor: pointer;
    height: 50px;
    display: flex;
    align-content: center;
    justify-content: center;
    .showcodeText{
      margin-top: 4px;
      color:#ccc;
      transform:translateX(100px);
      transition: all 300ms;
      opacity: 0;
    }
    &:hover:after{
      border-color:transparent transparent #40a9ff;
    }
    &:hover{
      .showcodeText{
        color:#40a9ff;
      }
    }
  }
  &:hover{
    .demo-actions::after{
      transform:rotate(180deg) translateX(35px);
    }
    .showcodeText{
      transform:translateX(50px);
      opacity: 1;
    }
  }
  &-actions::after{
    content: '';
    display: block;
    width:0;
    height:0;
    border:5px solid;
    border-color:transparent transparent #ccc;
    transform: rotate(180deg);
    margin-top:13px;
    transition: all 250ms;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      /* border: 1px solid #ccc; */
    }
  }
}
</style>
<style lang="scss">
@import 'prismjs/themes/prism.css';
</style>
