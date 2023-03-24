<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const routes = router.options.routes;
const route = useRoute();
const store = useStore();

console.log(route);
</script>
<template>
  <div class="common-layout">
    <el-container direction="horizontal">
      <el-aside :width="!store.state.collapse ? '200px' : '64px'">
        <!--width="200px" :width="!store.state.collapse ? '200px' : '100px'" -->
        <el-row>
          <el-col :span="7">
            <img
              src="@/assets/logo.png"
              style="width: 50px; height: 50px"
              alt=""
            />
          </el-col>
          <el-col
            v-if="!store.state.collapse"
            style="line-height: 50px"
            :span="16"
          >
            xxx
          </el-col>
        </el-row>
        <el-menu
          style="user-select: none"
          :collapse="store.state.collapse"
          router
          :default-active="route.path"
          class="el-menu-vertical-demo"
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
        >
          <template v-for="route in routes[0].children" :key="route.name">
            <el-sub-menu v-if="route.children">
              <template #title>
                <el-icon><Connection /></el-icon>
                <span>{{ $translate(route.meta.name) }}</span>
              </template>
              <el-menu-item
                v-for="subRoute in route.children"
                :key="subRoute.name"
                :index="subRoute.path"
              >
                <el-icon><Compass /></el-icon>
                {{ $translate(subRoute.meta.name) }}
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index="route.path">
              <el-icon><Operation /></el-icon>
              {{ $translate(route.meta.name) }}
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container direction="vertical">
        <el-header>
          <el-switch v-model="store.state.collapse" />
          <el-dropdown
            type="button"
            @command="(c) => store.commit('SET_LANG', c)"
          >
            <el-button type="primary">
              {{ store.state.lang == "CN" ? "中文" : "english" }}
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="CN">中文</el-dropdown-item>
                <el-dropdown-item command="EN">English</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              style="margin-bottom: 10px; user-select: none"
              v-for="r in route.matched"
              :key="r.path"
              :to="{ path: r.path }"
            >
              {{ $translate(r.meta.name) }}
            </el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <a href="https://github.com/Pursuit01/vue3-ts-template">
            Copyright &copy; Github
          </a>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;

  .el-aside {
    height: 100vh;
    box-shadow: 4px 0 8px #ccc;
    // background-color: #eee;
  }
  .el-header {
    height: 55px;
    line-height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 4px 8px #ccc;
  }
  .el-footer {
    text-align: center;
    color: #666;
    font-size: 14px;
  }
}
</style>
