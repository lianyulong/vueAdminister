<template>
	<div class="topic-list home-con">
		<el-breadcrumb separator="/" style="margin-bottom: 15px;">
			<el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>题目管理</el-breadcrumb-item>
			<el-breadcrumb-item>题目列表</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="seek-topic">
			<el-input class="seek-topic-input" v-model="getObj.title" placeholder="咨询问题"></el-input>
			<button class="seek-btn" @click="seekTopic"><i class="el-icon-search"></i></button>
		</div>
		<el-table :data="tableData" border style="width: 100%;flex: 1;display: flex;flex-direction: column;overflow: hidden;">
			<el-table-column type="index" label="#" width="50"></el-table-column>
			<el-table-column label="头像" width="85">
				<template slot-scope="scope">
					<img :src="scope.row.userHead" style="width: 60px; height: 60px;border-radius: 50%;" />
				</template>
			</el-table-column>
			<el-table-column prop="userName" label="提问者"></el-table-column>
			<el-table-column prop="title" label="标题"></el-table-column>
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
import { topicList } from '../../http/api.js';
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
			topicList(obj).then(res => {
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
		seekTopic() {
			this.getObj.page = 1;
			this.getObj.size = 10;
			this.getData(this.getObj);
		}
	}
};
</script>

<style scoped="scoped">
.seek-topic {
	margin-bottom: 22px;
	display: flex;
	width: 350px;
	border-radius: 4px;
	overflow: hidden;
	height: 40px;
}
</style>
