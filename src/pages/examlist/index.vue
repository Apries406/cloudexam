<template>
    <div class="exam-list-header">
        <div class="radio-group">
             <el-radio-group>
                 <el-radio label="all" value="all">全部</el-radio>
                 <el-radio label="inprocess" value="inprocess">进行中</el-radio>
                 <el-radio label="finished" value="finished">已结束</el-radio>
             </el-radio-group>
        </div>
        <el-select >
        <el-option v-for="item in YearOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-select>
        <el-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <div class="search">
            <el-input v-model="searchText" placeholder="搜索考试名称"></el-input>
            <el-button>搜索</el-button>
        </div>
    </div>
    <div class="exam-list">
        <el-table
            border
            :data="ExamListMock"
        >
            <el-table-column v-for="(item,index) in ExamListMock" 
            :key="item.id"
            :style="{marginBottom: '10px'}"
            >
                <template #header>
                    <ExamCardTitle 
                        :title="item.name"
                        :status="item.status"
                        :id="item.id"
                    />
                </template>

                <template #default>
                    <ExamCardDescription  
                        :time="item.time"
                        :grade="item.grade"
                        :analysis="item.analysis"
                    />
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default v-if="ExamListMock[index].ranking">
                    <ExamCardRankingButton :id="ExamListMock[index].id"/>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { ExamListMock } from '@/mock'
import { ref } from 'vue'
import ExamCardDescription from './components/ExamCard/ExamCardDescription.vue'
import ExamCardRankingButton from './components/ExamCard/ExamCardRankingButton.vue';
import ExamCardTitle from './components/ExamCard/ExamCardTitle.vue';
const YearOptions = [
    { value: 'all', label: '全部入学年份' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
]
const TypeOptions = [
    { value: 'all', label: '全部考试类型' },
    { value: '2024', label: '单元测试' },
    { value: '2023', label: '月考' },
    { value: '2022', label: '期中考' },
    { value: '2021', label: '期末考' },
    { value: '2020', label: '其他' },
]

const searchText = ref('')
</script>

<style scoped lang="scss" src="./index.module.scss">

</style>