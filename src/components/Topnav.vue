<template>
  <div class="topnav">
    <div class="topleft">
      <router-link to="/" class="logo">Gulu-UI</router-link>
    </div>
    <div class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </div>
    <div v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside"></div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props:{
				toggleMenuButtonVisible:{
					type:Boolean,
					default:false
				}
			},
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); //get
    console.log("topnav获取的asideVisible为：", asideVisible.value);
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  background: #fff;
  display: flex;
  // padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  .topleft{
    background-color:#302F35;
    padding: 16px;
    width: 300px;
    .logo {
      max-width: 6em;
      // margin-right: auto;
      text-decoration: none;
      color:#fff;
    }
  }
  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  .toggleAside {
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    .menu {
      display: none;
    }
    .logo {
      margin: 0 auto;
    }
    .toggleAside {
      display: inline-block;
    }
  }
}
</style>