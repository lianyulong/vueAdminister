<template>
	<div class="idea-list home-con">
		<el-breadcrumb separator="/" style="margin-bottom: 15px;">
			<el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>消息</el-breadcrumb-item>
			<el-breadcrumb-item>消息列表</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="add-discipline" style="margin-bottom: 22px;"><el-button type="primary">新增消息</el-button></div>
		<el-table :data="tableData" border style="width: 100%;flex: 1;display: flex;flex-direction: column;overflow: hidden;">
			<el-table-column type="index" label="#" width="50"></el-table-column>
			<el-table-column prop="title" label="标题" width="150"></el-table-column>
			<el-table-column prop="text" label="反馈内容"></el-table-column>
			<el-table-column prop="addTime" label="时间"width="170"></el-table-column>
			<el-table-column label="操作" width="150">
				<template slot-scope="scope">
					<el-button type="primary" plain size="medium" icon="el-icon-edit" circle></el-button>
					<el-button type="danger" plain size="medium" icon="el-icon-delete" circle></el-button>
				</template>
			</el-table-column>
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
import { messageList } from '../../http/api.js';
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
			messageList(obj).then(res => {
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
