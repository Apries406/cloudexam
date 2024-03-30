<template>
    <div className="RankingButton">
			<span className="RankingButton__icon_container">
				<RankingIcon />
			</span>
			<span>排行榜</span>
		</div>
</template>

<script setup lang="ts">
import type {rankingButtonProps} from './type'
import {defineProps, toRefs} from 'vue'
const props = defineProps<rankingButtonProps>()
const { id } = toRefs(props)
</script>

<style scoped lang="scss" src="../index.modules.scss">

</style>