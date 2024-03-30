<template>
    <div>
        GradeList- {{id}}
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const {id} = route.params
</script>

<style scoped>

</style>