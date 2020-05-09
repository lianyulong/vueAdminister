<template>
	<div class="idea-list home-con">
		<el-breadcrumb separator="/" style="margin-bottom: 15px;">
			<el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>意见收集</el-breadcrumb-item>
			<el-breadcrumb-item>意见列表</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="seek-idea">
			<el-input class="seek-idea-input" v-model="getObj.title" placeholder="咨询意见反馈"></el-input>
			<button class="seek-btn" @click="seekIdea"><i class="el-icon-search"></i></button>
		</div>
		<el-table :data="tableData" border style="width: 100%;flex: 1;display: flex;flex-direction: column;overflow: hidden;">
			<el-table-column type="index" label="#" width="50"></el-table-column>
			<el-table-column prop="title" label="标题"></el-table-column>
			<el-table-column prop="text" label="反馈内容"></el-table-column>
			<el-table-column prop="addTime" label="时间"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
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
import { ideaList } from '../../http/api.js';
export default {
	data() {
		return {
			tableData: [],
			getObj: {
				page: 1,
				size: 10,
				title: ''
			},
			total: 0
		};
	},
	mounted() {
		this.getData(this.getObj);
	},
	methods: {
		getData(obj) {
			ideaList(obj).then(res => {
				console.log(res);
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
		},
		seekIdea() {
			this.getObj.page = 1;
			this.getObj.size = 10;
			this.getData(this.getObj);
		}
	}
};
</script>

<style scoped="scoped">
.seek-idea {
	margin-bottom: 22px;
	display: flex;
	width: 350px;
	border-radius: 4px;
	overflow: hidden;
	height: 40px;
}
</style>
