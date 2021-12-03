<template>
  <button class="gulu-button" :class="classes" :disabled="disabled" :radius="radius">
    <span v-if="loading" class="gulu-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    radius:{
      type:Boolean,
      default:false,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
        [`gulu-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 40px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: #F56C6C;
$grey: #909399;
$green:#67C23A;
$origin:#E6A23C;
$bluelit:#ECF5FF;
.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 15px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  line-height: 90%;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
    background-color:$bluelit;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  
  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  
  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.gulu-theme-button {
    &[disabled]{
      color: white;
    }
    &.gulu-level-main {
    background-color: $blue;
    color: #fff;
    border-color:$blue;
    &:hover,
    &:focus {
      background-color: lighten($blue, 10%);
      border-color:lighten($blue, 10%);
    }
  }
  &.gulu-level-succese {
    background-color: $green;
    color: #fff;
    border-color:$green;
    &:hover,
    &:focus {
      background-color: lighten($green, 10%);
      border-color:lighten($green, 10%);
    }
  }
  &.gulu-level-info {
    background-color: $grey;
    color: #fff;
    border-color:$grey;
    &:hover,
    &:focus {
      background-color: lighten($grey, 10%);
      border-color:lighten($grey, 10%);
    }
  }
  &.gulu-level-warrning {
    background-color: $origin;
    color: #fff;
    border-color:$origin;
    &:hover,
    &:focus {
      background-color: lighten($origin, 10%);
      border-color:lighten($origin, 10%);
    }
  }
  &.gulu-level-danger {
    background-color: $red;
    color: #fff;
    border-color:$red;
    &:hover,
    &:focus {
      background-color: lighten($red, 10%);
      border-color:lighten($red, 10%);
    }
  }
  }
  &.gulu-theme-link {
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gulu-theme-text {
    &.gulu-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gulu-theme-button{
    &[radius="true"] {
      border-radius: 20px;
    }
  }
  &.gulu-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.gulu-level-main,&.gulu-level-succese,&.gulu-level-info,&.gulu-level-warrning,&.gulu-level-danger{
    &[disabled]{
      color: white;
      opacity: 0.5;
    }
  }
  &.gulu-theme-link, &.gulu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .gulu-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
  }
}
@keyframes gulu-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>