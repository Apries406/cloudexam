<template>
    <div>
        <span>{{time}}</span>
        <span> | </span>
        <span>{{grade}}</span>
        <span> | </span>
        <span>{{analysis2status[analysis]}}</span>
    </div>
</template>

<script setup lang="ts">
import type {descriptionProps} from './type'
import {defineProps, toRefs} from 'vue'
const props= defineProps<descriptionProps>()
const {time, grade, analysis} = toRefs(props)
const analysis2status = {
    waiting: '阅卷结束后，系统自动分析并发布',
    published: '已发布',
    processing: '正在分析',
}
</script>

<style scoped lang="scss" src="../index.modules.scss">

</style>