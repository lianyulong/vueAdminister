<template>
	<div class="user-list home-con">
		<el-breadcrumb separator="/" style="margin-bottom: 15px;">
			<el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>用户管理</el-breadcrumb-item>
			<el-breadcrumb-item>用户列表</el-breadcrumb-item>
		</el-breadcrumb>
		<el-table :data="tableData" border style="width: 100%;flex: 1;display: flex;flex-direction: column;overflow: hidden;">
			<el-table-column type="index" label="#" width="50"></el-table-column>
			<el-table-column prop="head" label="头像" width="85">
				<template slot-scope="scope">
					<img :src="scope.row.head" style="width: 60px; height: 60px;border-radius: 50%;" />
				</template>
			</el-table-column>
			<el-table-column prop="name" label="用户名"></el-table-column>
			<el-table-column prop="school" label="学校"></el-table-column>
			<el-table-column prop="year" label="入学年份"></el-table-column>
			<el-table-column prop="count" label="获取赞数量"></el-table-column>
		</el-table>
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:page-sizes="[10, 20, 30, 40]"
			:page-size="10"
			layout="total, sizes, prev, pager, next, jumper"
			:total="total"
		></el-pagination>
	</div>
</template>

<script>
import { userIist } from '../../http/api.js';
export default {
	data() {
		return {
			tableData: [],
			getObj: {
				page: 1,
				size: 10
			},
			total: 0
		};
	},
	mounted() {
		this.getData(this.getObj);
	},
	methods: {
		getData(obj) {
			userIist(obj).then(res => {
				this.tableData = res.data.records;
				this.total = res.data.total;
			});
		},
		handleSizeChange(val) {
			this.getObj.size = val;
			this.getData(this.getObj);
		},
		handleCurrentChange(val) {
			this.getObj.page = val;
			this.getData(this.getObj);
		}
	}
};
</script>

<style scoped="scoped"></style>
