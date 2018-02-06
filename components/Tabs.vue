<template>
	<div>
		<ul class="nav nav-tabs">
		  <li v-for="tab in tabs" class="nav-item" :key="tab.id" :class="{'active': tab.isActive}"> 
			  <a class="nav-link" @click="selectTab(tab)"> {{ tab.name }} </a>
		  </li>
		</ul>

		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import Tab from '~/components/Tab.vue';

	export default {
		data() {
			return { tabs: [] };
		},
		created() {
			this.tabs = this.$children;
		},
		methods: {
			selectTab(selectedTab) {
				this.tabs.forEach(tab => {
					tab.isActive = (tab.name == selectedTab.name);
				})
			}
		}
	};
</script>