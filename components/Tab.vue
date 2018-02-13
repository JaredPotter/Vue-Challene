<template>
	<div class="tabz" v-show="isActive">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive: false
			};
		},
		computed: {
			href() {
				return this.name.toLowerCase().replace(/ /g, '-');
			}
		},
		mounted() {
			this.isActive = this.selected;
		},
		props: {
			name: { required: true },
			selected: { default: false }
		}
	};
</script>

<style>
	.tabz{
		position: fixed;
		z-index: -1;
	}
</style>
