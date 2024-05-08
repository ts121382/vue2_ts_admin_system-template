<template>
  <div class="layout_container">
    <!-- 左侧菜单-->
    <div
      class="layout_slider"
      :class="{ fold: LayOutSettingStore.fold ? true : false }"
    >
      <!-- 顶部用户信息 -->
      <Logo class="logo"></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-menu
        text-color="white"
        background-color="#001529"
        :default-active="$route.path"
        :collapse="LayOutSettingStore.fold ? true : false"
      >
        <Menu :menuList="userStore.menuRoutes" class="menu"></Menu>
      </el-menu>
    </div>
    <!-- 顶部导航 -->
    <div
      class="layout_tabbar"
      :class="{ fold: LayOutSettingStore.fold ? true : false }"
    >
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示 -->
    <div
      class="layout_main"
      :class="{ fold: LayOutSettingStore.fold ? true : false }"
    >
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
//获取路由对象
import { useRoute } from 'vue-router'
//引入左侧菜单顶部用户信息
import Logo from './logo/index.vue'
//引入左侧菜单组件
import Menu from './menu/index.vue'
//右侧内容展示
import Main from './main/index.vue'
//顶部组件
import Tabbar from './tabbar/index.vue'
//引入用户相关的小仓库
import useUserStore from '../store/modules/user'
import useLayOutSettingStore from '@/store/modules/setting'

let LayOutSettingStore = useLayOutSettingStore()
let userStore = useUserStore()
let $route = useRoute()
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: 20%;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;
    .logo {
      background-color: pink;
      height: 45%;
    }
    .scrollbar {
      width: 100%;
    }
    &.fold {
      width: $base-menu-min-width;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: 20%;
    width: 80%;
    height: $base-tabbar-height;
    transition: all 0.3s;
    &.fold {
      width: 96%;
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    left: 20%;
    top: $base-tabbar-height;
    width: 80%;
    height: calc(100vh - $base-tabbar-height);
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: 96%;
      left: $base-menu-min-width;
    }
  }
}
</style>
