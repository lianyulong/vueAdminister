<template>
	<el-container style="height: 100vh;">
		<el-aside style="width: auto;background-color:#001529;">
			<el-menu
				class="el-menu-vertical-demo"
				@open="handleOpen"
				@close="handleClose"
				:collapse="isCollapse"
				background-color="#001529"
				:router="true"
				text-color="#909399"
				active-text-color="#fff"
				:default-active="active"
			>
				<h3 class="title">大佬解疑</h3>
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>学科管理</span>
					</template>
					<el-menu-item index="disciplinelist">学科列表</el-menu-item>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>用户管理</span>
					</template>
					<el-menu-item index="userlist">用户列表</el-menu-item>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>题目管理</span>
					</template>
					<el-menu-item index="topiclist">题目列表</el-menu-item>
				</el-submenu>
				<el-submenu index="4">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>意见收集</span>
					</template>
					<el-menu-item index="idealist">意见列表</el-menu-item>
				</el-submenu>
				<el-submenu index="5">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>信息</span>
					</template>
					<el-menu-item index="messagelist">信息列表</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-container>
			<el-header style="font-size: 12px;background-color:#001529; display: flex;justify-content: space-between;">
				<div class="collapse-btn"><el-button type="text" @click="alterCollapse" style="color: #FFFFFF;" icon="el-icon-s-unfold"></el-button></div>
				<div style="color: #FFFFFF;">
					<el-dropdown>
						<i class="el-icon-setting" style="margin-right: 10px;color: #FFFFFF;"></i>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>修改密码</el-dropdown-item>
							<el-dropdown-item>退出</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<span>{{ username }}</span>
				</div>
			</el-header>
			<el-main><router-view /></el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	data() {
		var arr = this.$route.path.split('/');
		var str = arr[arr.length - 1];
		return {
			isCollapse: false,
			active: str,
			username: localStorage.getItem('name') || ''
		};
	},
	methods: {
		handleOpen(key, keyPath) {},
		handleClose(key, keyPath) {},
		alterCollapse() {
			this.isCollapse = !this.isCollapse;
		}
	},
	watch: {
		$route(to) {
			console.log(to);
			var arr = this.$route.path.split('/');
			this.active = arr[arr.length - 1];
		}
	}
};
</script>
