<template>
  <div>
    <el-container class="'Layout'">
      <el-header class="Header">
        <div class="HeaderContent">
          <h1 class="HeaderTitle">CloudExam</h1>
          <el-menu
            theme="light"
            mode="horizontal"
            class="HeaderMenu"
            :style="{ height: '72px' }"
          >
            <template v-for="item in AdmMenu" :key="item.key">
              <el-menu-item
                :index="item.key"
                @click="
                  (e) => {
                    breadRouterStore.clearRouter();
                    breadRouterStore.pushRouter({
                      title: (e.target as HTMLElement).innerText,
                      path: e.key,
                    });
                    router.push(e.key);
                  }
                "
              >
                <template #title>
                  {{ item.label }}
                </template>
              </el-menu-item>
            </template>
          </el-menu>
          <el-dropdown placement="bottom">
            <userInfo />
            <arrow-down />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="item in DropDownMenu">
                  {{ item.label }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-content class="Content">
        <div class="bread">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item
              v-for="(item, index) in breadRouterStore.router"
              :key="index"
              :to="{ path: item.path }"
              @click="
                () => {
                  breadRouterStore.clearRouter();
                  breadRouterStore.pushRouter({
                    title: item.title,
                    path: item.path,
                  });
                }
              "
            >
              {{ item.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="ContentContainer">
          <router-view />
        </div>
      </el-content>
      <el-footer class="Footer"></el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useBreadRouterStore } from "@/store/useBreadRouterStore";
import { useRouter } from "vue-router";
import { AdmMenu, DropDownMenu } from "src/constants";
import userInfo from "./components/UserInfo/userInfo.vue";
import { ArrowDown } from "@element-plus/icons-vue";
const breadRouterStore = useBreadRouterStore();
const router = useRouter();
onMounted(() => {});
</script>

<style lang="scss" scoped></style>
