<template>
  <div class="all">
    <div class="con">
      <div class="side" v-if="asideVisible">
        <div class="side-top">
          <i class="icon iconfont icon-lunzi2" @click="toMain"></i>
          <div class="icon-title">Gulu</div>
        </div>
        <div class="side-center">
          <aside>
          <!-- <aside> -->
            <h2>文档</h2>
            <ol>
              <li>
                <router-link to="/doc/intro">介绍</router-link>
              </li>
              <li>
                <router-link to="/doc/install">安装</router-link>
              </li>
              <li>
                <router-link to="/doc/get-started">开始使用</router-link>
              </li>
            </ol>
            <h2>组件列表</h2>
            <ol>
              <li>
                <router-link to="/doc/switch">Switch 组件</router-link>
              </li>
              <li>
                <router-link to="/doc/button">Button 组件</router-link>
              </li>
              <li>
                <router-link to="/doc/dialog">Dialog 组件</router-link>
              </li>
              <li>
                <router-link to="/doc/tabs">Tabs 组件</router-link>
              </li>
            </ol>
          </aside>
        </div>
        <div class="side-bottom"></div>
      </div>
      <!-- <div class="cover"></div> -->
      <div class="center">
        <div class="topnav">
          <i class="icon-nav iconfont icon-danseshixintubiao-" @click="toggleAside"></i>
          <i class="icon iconfont icon-lunzi2" v-if="!asideVisible" @click="toMain"></i>
        </div>
        <div class="topcon">
          <main>
            <router-view />
          </main>
        </div>
      </div>
      <div class="right">
        <div class="right-top"></div>
        <div class="right-bottom"></div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject,Ref } from 'vue'
import {useRouter} from 'vue-router';
export default {
  components: { Topnav},
  setup(){
    const asideVisible =inject<Ref<boolean>>('asideVisible')    //get
    console.log('Doc aside获取的asideVisible为：',asideVisible.value)
    const router=useRouter();
    const toMain=()=>{
      router.push({path:'/'})
    }
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
      document.querySelector('.center .topnav .icon-nav').classList.toggle('to-right')
      // console.log(document.querySelector('.side-center'))
      
    };
    return{toMain,toggleAside,asideVisible}
  }
};
</script>
<style lang="scss" scoped>
.all{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .con{
    flex:1;
    display: flex;
    // max-width: 100%;
    // z-index: 2;
    // background-color: #ccc;
    .side{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .side-top{
        height: 150px;
        width: 150px;
        background-color: #302F35;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon{
          margin-bottom:10px;
          font-size: 40px;
          cursor: pointer;
        }
        .icon-title{
          font-size: 13px;
        }
      }
      .side-center{
        margin:20px auto auto auto;
        width: 150px;
        h2{
          // display: inline;
          margin: 4px 5px;
        }
        ol{
          li{
            a{
              display: block;
              padding: 10px 16px;
            }
            .router-link-active{
              background-color: #4140F3;
              color: #fff;
            }
          }
        }
      }
      .side-bottom{
        height: 75px;
        width: 150px;
        background-color: #302F35;
        
      }
      // @media (max-width: 500px) {
      //   display: none;
      // }
    }
    // .cover{
      // position: absolute;
      // left: 150px;
      // height: 100%;
      // width: 100%;
      // background-color: #ccc;
      // display: block;
    // }
    .center{
      flex: 1;
      // background-color: #eee;
      display: flex;
      flex-direction: column;
      max-width: 100%;
      .topnav{
        width: 150px;
        height: 75px;
        background-color: #302F35;
        display: flex;
        // justify-content: center;
        align-items: center;
        color: #fff;
        .icon-nav{
          // width: 20px;
          // height: 20px;
          // background: #fff;
          // border-radius: 50%;
          cursor: pointer;
          font-size: 40px;
          transform: translateX(20px) rotate(180deg);
          transition: all 250ms;
          display: none;
          &.to-right{
            transform: translateX(20px) rotate(0);
          }
        }
        .icon{
          margin: auto;
          font-size: 40px;
          cursor: pointer;
          display: none;
        }
        @media (max-width: 500px) {
          width: auto;
          .icon-nav{
            display: block;
          }
          .icon{
            display: block;
          }
        }
      }
      .topcon{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.7);
        // background-color: #F6F6F6;
        flex: 1;
        padding: 20px 20px;
      }
    }
    .right{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .right-top{
        width: 150px;
        height: 75px;
        // background-color: #eee;
      }
      .right-bottom{
        width: 150px;
        height: 75px;
        background-color: #302F35;
      }
      @media (max-width: 700px) {
        display: none;
      }
    }
  }
  .bottom{
    height: 75px;
    background-color: #302F35;
    @media (max-width: 500px) {
      width: auto;
    }
  }
}
</style>