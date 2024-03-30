<template>
  <div>
    <div class="header">
        <h1>幸福中学第1次考试</h1>
    </div>
    <div class="content">
        <div class="upload-sheetlist">
            <div v-if="isUpdloadSheetlist">上传了答题卡</div>
            <div class="upload-sheetlist-container" v-else @click='(e)=>e.preventDefault()'>
                <input 
                 type="file"
                 multiple
                 class="upload-sheetlist-input"
                 placeholder="点击或者拖拽答题卡excel文件"
                >
            </div>
        </div>
        <div class="upload-studentslist">
            <div v-if="isUploadStudentlist">上传了学生名单</div>
            <div v-else>拖拽或者选择学生名单excel文件</div>
        </div>
        <div class="allocated-questions">
            <div v-if="isAllocatedQuestions">已分配试题</div>
            <div v-else>分配试题</div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isUpdloadSheetlist = false;
const isUploadStudentlist = true;
const isAllocatedQuestions = true;
</script>

<style scoped src="./index.module.scss"></style>
