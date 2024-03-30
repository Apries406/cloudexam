<template>
    <div class="tags">
        <template v-if="alldone">
            <el-tag color="success">{{ text2tags.alldone }}</el-tag>
        </template>

        <template v-else>
            <el-tag v-if="noinitsheet" color="error">{{ text2tags.noinitsheet }}</el-tag>
            <el-tag v-if="noSheets" color="warning">{{ text2tags.noSheets }}</el-tag>
            <el-tag v-if="noStudents" color="warning">{{ text2tags.noStudents }}</el-tag>
            <el-tag v-if="noallocated" color="warning">{{ text2tags.noallocated }}</el-tag>
        </template>
    </div>
</template>

<script setup lang="ts">
import type{MTgasProps} from './type'
const {noinitsheet,noSheets,noStudents,noallocated,alldone} = defineProps<MTgasProps>()
const text2tags = {
    noinitsheet: '待上传模板答题卡',
    noSheets: '待上传答题卡',
    noStudents: '待上传学生名单',
    noallocated: '待分配试题',
    alldone: '管理已完成',
}
</script>

<style scoped>

</style>