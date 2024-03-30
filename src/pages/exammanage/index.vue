<template>
    <div>
        <div class="head-actions">
            <el-select>
                <el-option v-for="item in yearOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-select>
                <el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
           <el-button type="primary">添加考试</el-button>
        </div>
        <div class="examl-list">
            <el-table border :data="ManageExamStatusMock">
                <template v-for="(item, index) in ManageExamStatusMock">
                    <el-table-column >
                        <template #header>
                            <exanCardMTitle  
                              :name="item.name"
                              :time="item.time"
                              :grade="item.grade"
                              :id="item.id"
                            />
                            <!-- name,time,grade,id -->
                        </template>
                        <template #default>
                            <examCardMTags  
                              :noinitsheet="item.noinitsheet"
                              :noSheets="item.noSheets"
                              :noStudents="item.noStudents"
                              :noallocated="item.noallocated"
                              :alldone="item.alldone"
                            />
                            <!-- noinitsheet,noSheets,noStudents,noallocated,alldone -->
                        </template>
                    </el-table-column>
                </template>
            </el-table>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
//@ts-ignore
import {ManageExamStatusMock} from '@/mock'
import exanCardMTitle from './components/ExamCard/examCardMTitle.vue'
import examCardMTags from './components/ExamCard/examCardMTags.vue'
const yearOptions = [
    { value: 'all', label: '全部入学年份' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
]
const statusOptions = [
    { value: 'all', label: '全部考试状态' },
    { value: 'noinitsheet', label: '待上传模板答题卡' },
    { value: 'nosheets', label: '待上传答题卡' },
    { value: 'nostudents', label: '待上传学生名单' },
    { value: 'noallocated', label: '试题未完全分配' },
    { value: 'alldone', label: '管理完成' },
]
</script>

<style scoped src="./index.module.scss">

</style>