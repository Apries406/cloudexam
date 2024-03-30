<template>
    <div class="userInfo" :class="className" v-bind="props">
        <span class="headerName">刘旭峰</span>
        <span>
            <span class="schoolName">中南大学</span>
            <arrowDown />
        </span>
    </div>
</template>

<script setup lang="ts">
import{UserInfoType} from './type'
//@ts-ignore
import {arrowDown} from '@/assets/arrowDown.vue'
const {className, props} = defineProps<UserInfoType>()

</script>

<style scoped src="'./index.module.scss'">

</style>