<template>
    <div class="examCardTitle">
        <el-tag :color="status2stuatus[status][1]" ref="tagRef" class="examCardTitle__tag"></el-tag>
        <el-tooltip placement="top" :title="`考试ID:${id}`" class="examCardTitle__title">
            <h2 @cilck="handleClick">{{title}}</h2>
        </el-tooltip>
    </div>
</template>

<script setup lang="ts">
import {defineProps, toRefs, ref} from 'vue'
import { useRouter } from 'vue-router'
import type { titleProps } from './type'

type TChangeStatus = {
	waiting: [string, string]
	pending: [string, string]
	finished: [string, string]
}
const {status, title, id} = toRefs(defineProps<titleProps>())
const status2stuatus: TChangeStatus = {
    waiting: ['待上传答题卡', 'error'],
    pending: ['阅卷中', 'processing'],
    finished: ['已结束', 'success'],
}
const tagRef = ref<HTMLDivElement>()

const router = useRouter()
const handleClick = ()=>{
    console.log('Navigating to:', `/examlist/gradelist/${id}`)
    router.push({path: `/examlist/gradelist/${id}`,replace:true})
}
</script>

<style src="../index.modules.scss" lang="scss">
</style>