<template>
  <div class="all">
    <div class="con">
      <div class="side">
        <div class="side-top">
          <i class="icon iconfont icon-lunzi2"></i>
          <div class="icon-title">Gulu</div>
        </div>
        <div class="side-bottom"></div>
      </div>
      <div class="center">
        <div class="topnav">
          <i class="icon iconfont icon-lunzi2" @click="toMain"></i>
        </div>
        <div class="topcon">
          <div class="banner">
            <div class="banner-left">
              <i class="icon iconfont icon-lunzi"></i>
            </div>
            <div class="banner-right">
              <h1>轱辘UI</h1>
              <h2>一个厉害的 UI 框架</h2>
              <p class="actions">
                <a href="https://github.com">GitHub</a>
                <router-link to="/doc/intro">开始</router-link>
              </p>
            </div>
          </div>
          <div class="banner-con">
            <div class="items">
              <div class="item vue-img"><i class="icon iconfont icon-vue"></i></div>
              <div class="item vue-text">
                <h1 class="title">Vue 3</h1>
                <h3 class="text">使用Vue3 Composition API</h3>
              </div>
            </div>
            <div class="items">
              <div class="item ts-text">
                <h1 class="title">TypeScript</h1>
                <h3 class="text">源代码书写采用TypeScript</h3>
              </div>
              <div class="item ts-img"><i class="icon iconfont icon-ts"></i></div>
            </div>
          </div>
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
export default {
  components: { Topnav},
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
      .side-bottom{
        height: 75px;
        width: 150px;
        background-color: #302F35;
      }
      @media (max-width: 700px) {
        display: none;
      }
    }
    .center{
      flex: 1;
      // background-color: #eee;
      display: flex;
      flex-direction: column;
      .topnav{
        width: 150px;
        height: 75px;
        background-color: #302F35;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        .icon{
          cursor: pointer;
          font-size: 40px;
          display: none;
        }
        @media (max-width: 700px) {
          width: auto;
          .icon{
            display: block;
          }
        }
      }
      .topcon{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.7);
        background-color: #F6F6F6;
        flex: 1;
        .banner {
          padding: 100px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          // flex-direction: column;
          // background: #4140F3;
          background: #4d4dec;
          color: #fff;
          .banner-left{
            // width: 100px;
            // height: 100px;
            // background-color: #fff;
            margin-right: 80px;
            display: flex;
            .icon{
              margin: auto;
              font-size: 120px;
            }
          }
          .banner-right{
            > .actions{
              padding: 8px 0;
              a {
                margin:0 8px;
                background: #fff;
                display: inline-block;
                $h: 28px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 8px;
                color: #4140F3;
              }
              
            }
          }
        }
        .banner-con{
          // height: 200px;
          padding: 50px 0;
          .items{
            height: 200px;
            // border: 1px solid #000;
            display: flex;
            .vue-img{
              background-color: #4140F3;
              .icon{
                font-size: 80px;
                color: #fff;
              }
            }
            .ts-img{
              background-color: #fff;
              .icon{
                font-size: 100px;
                color: #0288D1;
              }
            }
            .item{
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              // border: 1px solid #eee;
              .text{
                margin-top: 10px;
              }
            }
          }
        }
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
    @media (max-width: 700px) {
      width: auto;
    }
  }
}
</style>