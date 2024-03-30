<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useBreadRouterStore } from "@/store/useBreadRouterStore";
const breadRouterStore = useBreadRouterStore();

onMounted(() => {});
</script>

<style lang="scss" scoped >
$header_height: 72px;
$base_color: #4088ff;
$gray_text_color: #909399;
$none_bg_color: #f2f3f5;

.Layout {
  height: 100%;
  .Header {
    height: $header_height;
    background-color: #ffffff;
    margin-bottom: 20px;
    .HeaderContent {
      height: $header_height;
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      align-items: center;
      .HeaderTitle {
        height: 100%;
        font-size: 32px;
        font-weight: bold;
        color: $base_color;
        margin-right: 20px;
      }
      .HeaderMenu {
        & > li:hover {
          color: $base_color;
          background-color: lighten($base_color, 30%);
        }
      }
      .userInfoContainer {
        margin-left: auto;
        cursor: pointer;
      }
    }
  }
  .Content {
    background-color: $none_bg_color;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .bread {
      font-size: 20px;
      margin-bottom: 20px;
    }
    .ContentContainer {
      padding: 20px;
      background-color: #ffffff;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
}

</style>
