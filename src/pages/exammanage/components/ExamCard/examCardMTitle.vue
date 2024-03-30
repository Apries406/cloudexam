<template>
    <div class="manage-exam-card-title">
        <div class="title-content" @click="handleClick">
            <h2>{{ name }}</h2>
        </div>
        <span>{{ time }} </span> | <span>{{ grade }}</span>
    </div>
</template>

<script setup lang="ts">
import type {MTitleProps} from './type'
import { toRefs } from 'vue'
import { useRouter } from 'vue-router';
const {name,time,grade,id} = toRefs(defineProps<MTitleProps>())
const router = useRouter()
import {useBreadRouterStore} from '@/store/useBreadRouterStore'
const BreadRouterStore = useBreadRouterStore()


const handleClick = () => {
    router.push({path:`/exammanage/management/${id}`})
    BreadRouterStore.pushRouter({title:name.value,path:`/exammanage/management/${id.value}`})
}
</script>

<style scoped lang="scss" src="'./index.module.scss'">

</style>